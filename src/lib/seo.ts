export const siteOrigin = "https://mohakin-climbers.vercel.app";
export const socialImageUrl = new URL("/og-image.jpg", siteOrigin).toString();

export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteOrigin).toString();
}
