import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { mountains, treks } from "@/lib/catalog";
import { Layout, PageHero, TrekCard, meta } from "@/components/site";

export const Route = createFileRoute("/treks/$mountain")({
  loader: ({ params }) => {
    const m = mountains[params.mountain as keyof typeof mountains];
    if (!m) throw notFound();
    return { key: params.mountain, name: m.name, country: m.country, hero: m.hero, summit: m.summit, intro: m.intro };
  },
  head: ({ loaderData }) =>
    loaderData
      ? meta(`${loaderData.name} Trekking Routes — Mohakin Climbers`, loaderData.intro && loaderData.intro.length <= 160 ? `Every guided ${loaderData.name} adventure with Mohakin Climbers — ${loaderData.intro}` : `Every guided route up ${loaderData.name} with Mohakin Climbers — durations, gates and summit ${loaderData.summit}.`)
      : { meta: [{ title: "Mountain not found" }, { name: "robots", content: "noindex" }] },
  component: Mountain,
});

function Mountain() {
  const m = Route.useLoaderData();
  const list = treks.filter((t) => t.mountain === m.key);
  return (
    <Layout>
      <PageHero image={m.hero} eyebrow={`${m.country} · Mountain Expedition`} title={m.name}>
        <p className="mt-5 max-w-xl text-lg opacity-90">{m.intro ?? `The mountain has more than one way in. ${list.length} routes to ${m.summit}.`}</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl">Find your way up.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((t) => <TrekCard key={t.slug} trek={t} />)}
        </div>
        <Link to="/contact" className="mt-14 inline-block rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground">Talk to Mohakin</Link>
      </section>
    </Layout>
  );
}
