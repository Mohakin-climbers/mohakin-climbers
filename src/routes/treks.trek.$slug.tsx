import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Clock, Flag, Gauge, ListChecks, MapPin, Mountain, SlidersHorizontal } from "lucide-react";
import { mountains, trekIncluded, treks, tripItineraries } from "@/lib/catalog";
import { Layout, PageHero, meta } from "@/components/site";
import { TripItineraryDetails } from "@/components/trip-itinerary";

export const Route = createFileRoute("/treks/trek/$slug")({
  loader: ({ params }) => {
    const trek = treks.find((t) => t.slug === params.slug);
    if (!trek) throw notFound();
    return trek;
  },
  head: ({ loaderData }) =>
    loaderData
      ? meta(`${loaderData.name} (${loaderData.duration}) — Mohakin Climbers`, `${loaderData.route}. ${loaderData.duration}, guided by Mohakin Climbers.`)
      : { meta: [{ title: "Trek not found" }, { name: "robots", content: "noindex" }] },
  component: TrekPage,
});

function TrekPage() {
  const t = Route.useLoaderData();
  const m = mountains[t.mountain];
  const itinerary = tripItineraries[t.slug];
  const facts = [
    { icon: Clock, label: "Duration", value: t.duration },
    { icon: MapPin, label: "Start", value: t.start },
    { icon: Flag, label: "Finish", value: t.end },
    ...(t.highestAltitude ? [{ icon: Mountain, label: "Highest point", value: t.highestAltitude }] : []),
    ...(t.difficulty ? [{ icon: Gauge, label: "Difficulty", value: t.difficulty }] : []),
  ];
  const interest = m.interest;
  return (
    <Layout>
      <PageHero image={t.hero ?? m.hero} eyebrow={`${m.name} · Trek`} title={t.name}>
        <p className="mt-5 max-w-xl text-lg opacity-90">{t.route}</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className={`grid gap-px overflow-hidden rounded-sm border border-border bg-border ${facts.length >= 5 ? "md:grid-cols-5" : facts.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-4 bg-card p-6">
              <f.icon className="h-6 w-6 text-accent" />
              <div><p className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</p><p className="font-semibold">{f.value}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {itinerary && <a href="#itinerary" className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground"><ListChecks className="h-5 w-5" />View itinerary</a>}
          <Link to="/contact" search={{ interest, trip: t.name, customize: true }} hash="inquiry" className="flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-bold"><SlidersHorizontal className="h-5 w-5" />Customize this trek</Link>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">About this route</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.tagline}. {m.about ?? (t.mountain === "mt-kenya" ? `Summit ${m.summit} with Mohakin's guides, porters and cooks — the three fingers that make every expedition work.` : `Reach ${m.summit} with Mohakin's guides, porters and cooks by your side.`)}</p>
          </div>
          {!itinerary && <div>
            <h2 className="text-3xl">Included</h2>
            <ul className="mt-4 space-y-2">
              {trekIncluded.map((i) => <li key={i} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-accent" />{i}</li>)}
            </ul>
          </div>}
        </div>
        {itinerary && <TripItineraryDetails itinerary={itinerary} />}
        {itinerary?.whatToCarry && (
          <div className="mt-16">
            <h2 className="text-3xl">What to carry</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {itinerary.whatToCarry.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-accent" />{item}</li>)}
            </ul>
          </div>
        )}
        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/contact" search={{ interest, trip: t.name }} className="rounded-sm bg-accent px-6 py-3 font-bold text-accent-foreground">Enquire about this trek</Link>
          <Link to="/contact" search={{ interest, trip: t.name, customize: true }} hash="inquiry" className="rounded-sm border border-primary px-6 py-3 font-bold">Customize this trek</Link>
          <Link to="/treks/$mountain" params={{ mountain: t.mountain }} className="rounded-sm border border-primary px-6 py-3 font-bold">All {m.name} routes</Link>
        </div>
      </section>
    </Layout>
  );
}
