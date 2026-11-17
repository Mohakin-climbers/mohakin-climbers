import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { programs as catalog } from "@/lib/catalog";
import { Layout, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/foundation/")({
  head: () => meta("Mohakin Foundation — Adventure With Purpose", "Mountain conservation, youth climbing, women in mountaineering and porter welfare programs across East Africa.", "/foundation"),
  component: Foundation,
});

const programs = [
  { src: img.conservation, title: "Mountain Conservation Program", body: "Protecting East Africa's fragile mountain ecosystems through restoration, stewardship and long-term partnerships.", tags: "Trail restoration · Tree planting · Waste management" },
  { src: img.youth, title: "Youth Climbing Initiative", body: "Empowering young people through outdoor education, environmental awareness and mountain leadership.", tags: "500+ youth reached · 30+ schools · 12 communities" },
  { src: img.women, title: "Women in Mountaineering", body: "Creating pathways for women to participate, lead and thrive in guiding, conservation and adventure tourism.", tags: "Guide training · Mentorship · Leadership" },
  { src: img.training, title: "Porter Welfare Program", body: "Supporting dignity, safety, fair treatment and professional growth for the people who make expeditions possible.", tags: "300+ porters supported · 50+ equipment grants" },
];

function Foundation() {
  return (
    <Layout>
      <PageHero image={img.hero1} eyebrow="Foundation" title="Adventure With Purpose.">
        <p className="mt-5 max-w-xl text-lg opacity-90">Every trek and safari helps protect mountain ecosystems, empower local communities and create opportunities for future generations.</p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[["30+", "Years of Impact"], ["500+", "Students Supported"], ["10K+", "Trees Planted"], ["100+", "Community Projects"]].map(([n, l]) => (
            <div key={l} className="border-t border-border pt-4"><p className="font-display text-4xl text-accent">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
        <div className="mt-20 space-y-16">
          {programs.map((p, i) => (
            <article key={p.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={p.src} alt={p.title} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
              <div>
                <h2 className="text-3xl">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="eyebrow mt-5">{p.tags}</p>
                <Link to="/foundation/$slug" params={{ slug: catalog[i]?.slug ?? "" }} className="mt-6 inline-block font-bold text-accent">Explore program →</Link>
              </div>
            </article>
          ))}
        </div>
        <blockquote className="mx-auto mt-24 max-w-3xl text-center">
          <p className="font-display text-3xl">"The mountains have given us everything. Our responsibility is to give something back."</p>
          <footer className="eyebrow mt-4">Mohammed Muthiri Kinyua</footer>
        </blockquote>
        <div className="mt-12 text-center">
          <Link to="/contact" className="rounded-sm bg-accent px-6 py-3 font-bold text-accent-foreground">Partner With Us</Link>
        </div>
      </section>
    </Layout>
  );
}
