import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { programs } from "@/lib/catalog";
import { Layout, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/foundation/$slug")({
  loader: ({ params }) => {
    const p = programs.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) =>
    loaderData
      ? meta(`${loaderData.name} — Mohakin Foundation`, loaderData.body, `/foundation/${loaderData.slug}`)
      : { meta: [{ title: "Program not found" }, { name: "robots", content: "noindex" }] },
  component: ProgramPage,
});

function ProgramPage() {
  const p = Route.useLoaderData();
  return (
    <Layout>
      <PageHero image={p.image} eyebrow="Mohakin Foundation" title={p.name}>
        <p className="mt-5 max-w-xl text-lg opacity-90">{p.body}</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-3 gap-6">
          {p.stats.map(([n, l]) => (
            <div key={l} className="border-t border-border pt-4"><p className="font-display text-4xl text-accent">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
        <h2 className="mt-16 text-3xl">Our focus</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {p.focus.map((f) => <li key={f} className="flex gap-3"><Check className="h-5 w-5 text-accent" />{f}</li>)}
        </ul>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/contact" search={{ interest: "Foundation partnership", trip: p.name }} className="rounded-sm bg-accent px-6 py-3 font-bold text-accent-foreground">Partner With Us</Link>
          <Link to="/foundation" className="rounded-sm border border-primary px-6 py-3 font-bold">All programs</Link>
        </div>
      </section>
    </Layout>
  );
}
