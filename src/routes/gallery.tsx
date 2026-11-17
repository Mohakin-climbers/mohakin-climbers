import { createFileRoute } from "@tanstack/react-router";
import { gallery, img } from "@/lib/images";
import { Layout, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => meta("Gallery — Mohakin Climbers", "Photos from Mount Kenya, Kilimanjaro, Kenyan safaris and Mohakin Foundation programs."),
  component: Gallery,
});

function Gallery() {
  return (
    <Layout>
      <PageHero image={img.highlandTrail} eyebrow="Gallery" title="Moments from the mountains and the wild." />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((g) => (
            <figure key={g.src} className="mb-4 break-inside-avoid">
              <img src={g.src} alt={g.caption} loading="lazy" className="w-full rounded-sm" />
              <figcaption className="mt-2 text-xs text-muted-foreground">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
