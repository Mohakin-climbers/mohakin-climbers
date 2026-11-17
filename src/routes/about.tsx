import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { CardGrid, Layout, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Mohakin Climbers — A Legacy Built in the Mountains", "Founded in 1999 in Nanyuki and led by Mohammed Kinyua, Mohakin guides travelers across East Africa's mountains and wild places.", "/about"),
  component: About,
});

const timeline = [
  ["1999", "The Journey Begins", "Founded with a vision of sharing East Africa's mountains, wildlife and cultures with travelers from around the world."],
  ["2005", "Regional Expansion", "Operations expanded beyond Mount Kenya to include Kilimanjaro, Rwenzori and multi-country adventures."],
  ["2012", "Safari Experiences", "Curated safari journeys across Kenya and Tanzania."],
  ["2020", "Foundation Programs", "Community, conservation and youth initiatives became central to our mission."],
  ["Today", "Adventure With Purpose", "World-class expeditions combined with meaningful impact across East Africa."],
];

function About() {
  return (
    <Layout>
      <PageHero image={img.journey} eyebrow="About Mohakin" title="More than adventures. A legacy built in the mountains." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr]">
        <img src={img.moha} alt="Mohammed Kinyua, founder of Mohakin Climbers" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-4xl">Built one journey at a time.</h2>
          <ol className="mt-8 space-y-6">
            {timeline.map(([y, t, b]) => (
              <li key={y} className="grid grid-cols-[5rem_1fr] gap-4 border-t border-border pt-4">
                <span className="font-display text-xl text-accent">{y}</span>
                <div><h3 className="text-xl">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="eyebrow">Our Team</p>
        <h2 className="mb-10 mt-3 text-4xl">The Three Fingers</h2>
        <CardGrid items={[
          { meta: "Lead", title: "Guides", body: "Certified mountain professionals with extensive experience in navigation, safety and leadership." },
          { meta: "Support", title: "Porters", body: "The backbone of every expedition, ensuring comfort and support throughout the journey." },
          { meta: "Fuel", title: "Cooks", body: "Nutritious, timely meals that keep every adventure moving." },
        ]} />
        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/treks" className="rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground">Explore Expeditions</Link>
          <Link to="/contact" className="rounded-sm border border-primary px-6 py-3 font-bold">Contact Us</Link>
        </div>
      </section>
    </Layout>
  );
}
