import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Layout, meta } from "@/components/site";
import { HomeSlideshow } from "@/components/home-slideshow";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { safaris, treks } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ListChecks, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => meta("Mohakin Climbers — Mount Kenya & Kilimanjaro Treks from Nanyuki", "Explore Mount Kenya and Kilimanjaro with East Africa's most experienced guides. Treks, safaris and conservation journeys for over 30 years."),
  component: Index,
});

const experiences = [
  { to: "/treks", src: img.mtKenya, title: "Mountain Trekking", body: "Guided ascents across Mount Kenya, Kilimanjaro and East Africa's most iconic peaks." },
  { to: "/safaris", src: img.elephant, title: "Wildlife Safaris", body: "Experience Kenya's legendary wildlife through curated safari adventures." },
  { to: "/foundation", src: img.conservation, title: "Foundation Journeys", body: "Travel experiences that directly contribute to environmental restoration." },
] as const;

const why = [
  ["Local Expertise", "More than 30 years guiding adventures across East Africa."],
  ["Safety First", "Professional guides and proven expedition systems."],
  ["Conservation Impact", "Every adventure contributes to environmental protection."],
  ["Community Focus", "Supporting youth, women and mountain communities."],
  ["Authentic Experiences", "Deep connections with local cultures and landscapes."],
  ["Sustainable Travel", "Responsible tourism designed for long-term impact."],
];

const featuredTrek = treks.find((trip) => trip.slug === "chogoria-sirimon-traverse-7-days");
const featuredSafari = safaris.find((trip) => trip.slug === "masai-mara-amboseli-7-days");

function Index() {
  return (
    <Layout>
      <HomeSlideshow>
        <p className="mt-5 max-w-xl text-lg opacity-90">Explore Mount Kenya and Kilimanjaro with East Africa's most experienced guides.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/treks" className="rounded-sm bg-accent px-6 py-3 font-bold text-accent-foreground">View Treks →</Link>
          <Link to="/contact" className="rounded-sm border border-primary-foreground/60 px-6 py-3 font-bold">Plan a trip</Link>
        </div>
      </HomeSlideshow>


      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={img.highlandTrail} alt="A walker on a grassy highland trail beneath mountain peaks" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
        <div>
          <p className="eyebrow">Our story · East Africa</p>
          <h2 className="mt-3 text-4xl">Adventure is only the beginning.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">For more than 30 years, Mohakin has introduced travelers to the mountains, wildlife and cultures of East Africa.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">What began with mountaineering has grown into a wider commitment to conservation and community. Through our Foundation, we protect mountain ecosystems, open opportunities for young people and strengthen the communities connected to these landscapes.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[["30+", "Years"], ["1,000+", "Adventurers"], ["05", "Programs"]].map(([n, l]) => (
              <div key={l}><p className="font-display text-4xl text-accent">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
            ))}
          </div>
          <div className="mt-8 flex gap-6 font-bold">
            <Link to="/about">Discover Our Story</Link>
            <Link to="/foundation" className="text-accent">Our Foundation →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-4xl">Experiences With Purpose</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {experiences.map((s) => (
            <Link key={s.title} to={s.to} className="group block">
              <div className="overflow-hidden rounded-sm">
                <img src={s.src} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl">{s.title} <span className="text-accent">→</span></h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-4xl">Your next great story</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {featuredTrek && (
            <article>
              <p className="eyebrow">Mountain adventure</p>
              <Link to="/treks/trek/$slug" params={{ slug: featuredTrek.slug }} className="mt-4 block">
                <img src={img.mtKenya} alt="Mount Kenya peaks on a mountain adventure" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
              </Link>
              <h3 className="mt-6 text-3xl">{featuredTrek.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">Mount Kenya · {featuredTrek.duration}</p>
              <p className="mt-3 text-muted-foreground">{featuredTrek.route}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild><Link to="/treks/trek/$slug" params={{ slug: featuredTrek.slug }} hash="itinerary"><ListChecks />Itinerary</Link></Button>
                <Button asChild variant="outline"><Link to="/contact" search={{ interest: "Mount Kenya trek", trip: featuredTrek.name, customize: true }} hash="inquiry"><SlidersHorizontal />Customize</Link></Button>
              </div>
              <Button asChild variant="link" className="mt-4 px-0"><Link to="/treks">All mountain adventures <ArrowRight /></Link></Button>
            </article>
          )}
          {featuredSafari && (
            <article>
              <p className="eyebrow">Wildlife safari</p>
              <Link to="/safaris/safari/$slug" params={{ slug: featuredSafari.slug }} className="mt-4 block">
                <img src={featuredSafari.image} alt={featuredSafari.name} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
              </Link>
              <h3 className="mt-6 text-3xl">{featuredSafari.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">Kenya · {featuredSafari.days} days · {featuredSafari.parks} parks</p>
              <p className="mt-3 text-muted-foreground">{featuredSafari.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild><Link to="/safaris/safari/$slug" params={{ slug: featuredSafari.slug }} hash="itinerary"><ListChecks />Itinerary</Link></Button>
                <Button asChild variant="outline"><Link to="/contact" search={{ interest: "Safari", trip: featuredSafari.name, customize: true }} hash="inquiry"><SlidersHorizontal />Customize</Link></Button>
              </div>
              <Button asChild variant="link" className="mt-4 px-0"><Link to="/safaris">All wildlife safaris <ArrowRight /></Link></Button>
            </article>
          )}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl">Why Adventurers Choose Us</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {why.map(([t, b]) => (
              <div key={t} className="border-t border-border pt-4">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-4xl">Every Adventure Creates Impact</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Whether you climb with us, volunteer, donate or partner with us, you become part of a movement protecting East Africa's mountains and communities.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/treks" className="rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground">Start Your Adventure</Link>
          <Link to="/foundation" className="rounded-sm border border-primary px-6 py-3 font-bold">Support The Foundation</Link>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
}
