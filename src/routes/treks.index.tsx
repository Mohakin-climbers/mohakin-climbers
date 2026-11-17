import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { mountains, treks } from "@/lib/catalog";
import { Layout, PageHero, TrekCard, meta } from "@/components/site";

export const Route = createFileRoute("/treks/")({
  head: () => meta("Mount Kenya, Kilimanjaro & Aberdare Treks — Mohakin Climbers", "Guided Mount Kenya traverses, Kilimanjaro expeditions and Aberdare hikes including Mount Satima and Elephant Hill, starting in Nanyuki."),
  component: Treks,
});

function Treks() {
  return (
    <Layout>
      <PageHero image={img.chogoria} eyebrow="Mountains · Wild Places · East Africa" title="Choose your mountain.">
        <p className="mt-5 max-w-xl text-lg opacity-90">Expeditions into mountains, wild places and landscapes that ask something of you.</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {(Object.keys(mountains) as (keyof typeof mountains)[]).map((k) => {
            const m = mountains[k];
            return (
              <Link key={k} to="/treks/$mountain" params={{ mountain: k }} className="group relative block overflow-hidden rounded-sm">
                <img src={m.image} alt={m.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay to-transparent" />
                <div className="absolute bottom-0 p-6 text-primary-foreground">
                  <p className="eyebrow">{m.country}</p>
                  <h3 className="text-3xl">{m.name} <span className="text-accent">→</span></h3>
                </div>
              </Link>
            );
          })}
        </div>
        <h2 className="mb-10 mt-24 text-4xl">The journeys we take.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {treks.filter((t) => t.mountain === "mt-kenya").slice(0, 3).map((t) => <TrekCard key={t.slug} trek={t} />)}
        </div>
      </section>
    </Layout>
  );
}
