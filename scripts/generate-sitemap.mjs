import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist");

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? findHtmlFiles(entryPath) : entry.name.endsWith(".html") ? [entryPath] : [];
    }),
  );
  return files.flat();
}

function readCanonicalUrls(html, filePath) {
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  const canonicalLinks = links.filter((link) => /\brel=["']canonical["']/i.test(link));

  if (canonicalLinks.length !== 1) {
    throw new Error(`Expected one canonical link in ${filePath}, found ${canonicalLinks.length}.`);
  }

  const href = canonicalLinks[0].match(/\bhref=["']([^"']+)["']/i)?.[1];
  if (!href || !URL.canParse(href)) {
    throw new Error(`Invalid canonical URL in ${filePath}.`);
  }

  return href;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const htmlFiles = (await findHtmlFiles(outputDirectory)).sort();
if (htmlFiles.length === 0) {
  throw new Error(`No prerendered HTML pages found in ${outputDirectory}.`);
}

const urls = new Set();
for (const filePath of htmlFiles) {
  const html = await readFile(filePath, "utf8");
  urls.add(readCanonicalUrls(html, filePath));
}

if (urls.size !== htmlFiles.length) {
  throw new Error(`Found ${urls.size} unique canonical URLs for ${htmlFiles.length} prerendered pages.`);
}

const entries = [...urls].sort().map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${urls.size} prerendered URLs.`);
