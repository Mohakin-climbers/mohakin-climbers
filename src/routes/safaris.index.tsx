import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { countries, safaris } from "@/lib/catalog";
import { Layout, PageHero, SafariCard, meta } from "@/components/site";

export const Route = createFileRoute("/safaris/")({
  head: () => meta("Kenya & Tanzania Wildlife Safaris — Mohakin Climbers", "Masai Mara, Amboseli, Serengeti and Ngorongoro safaris shaped around East Africa's landscapes, wildlife and people.", "/safaris"),
  component: Safaris,
});

function Safaris() {
  return (
    <Layout>
      <PageHero image={img.elephant} eyebrow="Mohakin Safaris" title="The wild, within reach.">
        <p className="mt-5 max-w-xl text-lg opacity-90">Journeys through East Africa's wild places, shaped around the landscapes, wildlife and people that make them unforgettable.</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl">Countries</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {(Object.keys(countries) as (keyof typeof countries)[]).map((k) => (
            <Link key={k} to="/safaris/$country" params={{ country: k }} className="group relative block overflow-hidden rounded-sm">
              <img src={countries[k].image} alt={countries[k].name} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-overlay to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-3xl text-primary-foreground">{countries[k].name} <span className="text-accent">→</span></h3>
            </Link>
          ))}
        </div>
        <h2 className="mt-24 text-4xl">All safaris</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {safaris.map((s) => <SafariCard key={s.slug} safari={s} />)}
        </div>
      </section>
    </Layout>
  );
}
