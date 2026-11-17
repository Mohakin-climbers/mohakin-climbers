import { type ReactNode } from "react";
import { img } from "@/lib/images";

const slides = [
  { src: img.mtKenya, alt: "Mount Kenya peaks" },
  { src: img.maraElephant, alt: "Elephants in the Masai Mara" },
  { src: img.lakeEllis, alt: "Lake Ellis, Mount Kenya" },
  { src: img.lions, alt: "Lion pride in the Masai Mara" },
  { src: img.kili, alt: "Mount Kilimanjaro" },
] as const;

export function HomeSlideshow({ children }: { children: ReactNode }) {
  return (
    <section aria-label="Mountain landscapes and wildlife" className="relative flex min-h-[75vh] items-end overflow-hidden">
      <div className="home-slideshow-track absolute inset-y-0 left-0 flex">
        {[...slides, slides[0]].map((slide, index) => (
          <img key={index} src={slide.src} alt={index === slides.length ? "" : slide.alt} aria-hidden={index === slides.length || undefined} fetchPriority={index === 0 ? "high" : "auto"} className="home-slideshow-image h-full object-cover" />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-primary-foreground">
        <p className="eyebrow">Mohakin Climbers · Nanyuki, Kenya</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">Climb Mountains. Challenge Yourself.</h1>
        {children}
      </div>
    </section>
  );
}