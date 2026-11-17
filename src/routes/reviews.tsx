import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Layout, PageHero, meta } from "@/components/site";
import { reviews } from "@/lib/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => meta("Reviews — Climbers on Mohakin Climbers", "Read what climbers and explorers from around the world share after experiencing East Africa with Mohakin Climbers."),
  component: Reviews,
});

function Reviews() {
  return (
    <Layout>
      <PageHero image={img.adventure} eyebrow="Community" title="Trusted by adventurers around the world." />
      <section className="mx-auto max-w-4xl px-6 py-24">
        {reviews.map((r) => (
          <figure key={r.name} className="border-l-2 border-accent pl-8">
            <blockquote className="font-display text-2xl leading-snug">"{r.text}"</blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground"><b className="text-foreground">{r.name}</b> · {r.trek} · {r.date}</figcaption>
          </figure>
        ))}
        <div className="mt-20 rounded-sm bg-secondary p-10">
          <h2 className="text-3xl">Every expedition leaves a story.</h2>
          <p className="mt-3 text-muted-foreground">Have you climbed with Mohakin? Share your experience and inspire future adventurers.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 font-bold text-primary-foreground">Share your story</Link>
        </div>
      </section>
    </Layout>
  );
}
