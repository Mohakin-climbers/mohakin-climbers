import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { countries, safaris } from "@/lib/catalog";
import { Layout, PageHero, SafariCard, meta } from "@/components/site";

export const Route = createFileRoute("/safaris/$country")({
  loader: ({ params }) => {
    const c = countries[params.country as keyof typeof countries];
    if (!c) throw notFound();
    return { key: params.country, name: c.name, image: c.image };
  },
  head: ({ loaderData }) =>
    loaderData
      ? meta(`${loaderData.name} Safaris — Mohakin Climbers`, `Guided wildlife safaris in ${loaderData.name}, tailored by Mohakin Climbers.`, `/safaris/${loaderData.key}`)
      : { meta: [{ title: "Country not found" }, { name: "robots", content: "noindex" }] },
  component: Country,
});

function Country() {
  const c = Route.useLoaderData();
  const list = safaris.filter((s) => s.country === c.key);
  return (
    <Layout>
      <PageHero image={c.image} eyebrow="East Africa · Safari Destination" title={c.name}>
        <p className="mt-5 max-w-xl text-lg opacity-90">Where the wild still moves freely. {list.length} expeditions.</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl">Find your way into the wild.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {list.map((s) => <SafariCard key={s.slug} safari={s} />)}
        </div>
        <Link to="/contact" className="mt-14 inline-block rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground">Create your safari</Link>
      </section>
    </Layout>
  );
}
