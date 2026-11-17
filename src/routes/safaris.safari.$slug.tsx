import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Clock, ListChecks, SlidersHorizontal, Trees, X } from "lucide-react";
import { countries, safariExcluded, safariIncluded, safaris, tripItineraries } from "@/lib/catalog";
import { Layout, PageHero, meta } from "@/components/site";
import { TripItineraryDetails } from "@/components/trip-itinerary";

export const Route = createFileRoute("/safaris/safari/$slug")({
  loader: ({ params }) => {
    const s = safaris.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) =>
    loaderData
      ? meta(`${loaderData.name} (${loaderData.days} days) — Mohakin Safaris`, `${loaderData.tagline}: a ${loaderData.days}-day safari across ${loaderData.parks} ${loaderData.parks === 1 ? "park" : "parks"} with Mohakin.`, `/safaris/safari/${loaderData.slug}`)
      : { meta: [{ title: "Safari not found" }, { name: "robots", content: "noindex" }] },
  component: SafariPage,
});

function SafariPage() {
  const s = Route.useLoaderData();
  const c = countries[s.country];
  const itinerary = tripItineraries[s.slug];
  return (
    <Layout>
      <PageHero image={s.image} eyebrow={`${c.name} · Safari`} title={s.name}>
        <p className="mt-5 max-w-xl text-lg opacity-90">{s.tagline}</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap gap-8 border-b border-border pb-8 font-semibold">
          <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-accent" />{s.days} days</span>
          <span className="flex items-center gap-2"><Trees className="h-5 w-5 text-accent" />{s.parks} {s.parks === 1 ? "park" : "parks"}</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {itinerary && <a href="#itinerary" className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground"><ListChecks className="h-5 w-5" />View itinerary</a>}
          <Link to="/contact" search={{ interest: "Safari", trip: s.name, customize: true }} hash="inquiry" className="flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-bold"><SlidersHorizontal className="h-5 w-5" />Customize this safari</Link>
        </div>
        {itinerary && <TripItineraryDetails itinerary={itinerary} />}
        {!itinerary && <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Included</h2>
            <ul className="mt-4 space-y-2">{safariIncluded.map((i) => <li key={i} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-accent" />{i}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-3xl">Not included</h2>
            <ul className="mt-4 space-y-2">{safariExcluded.map((i) => <li key={i} className="flex gap-3 text-sm text-muted-foreground"><X className="h-5 w-5" />{i}</li>)}</ul>
          </div>
        </div>}
        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/contact" search={{ interest: "Safari", trip: s.name }} className="rounded-sm bg-accent px-6 py-3 font-bold text-accent-foreground">Enquire about this safari</Link>
          <Link to="/contact" search={{ interest: "Safari", trip: s.name, customize: true }} hash="inquiry" className="rounded-sm border border-primary px-6 py-3 font-bold">Customize this safari</Link>
          <Link to="/safaris/$country" params={{ country: s.country }} className="rounded-sm border border-primary px-6 py-3 font-bold">More {c.name} safaris</Link>
        </div>
      </section>
    </Layout>
  );
}
