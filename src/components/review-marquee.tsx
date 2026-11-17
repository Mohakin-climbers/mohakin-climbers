import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { reviews } from "@/lib/reviews";

export function ReviewMarquee() {
  return (
    <section className="bg-secondary py-20" aria-labelledby="home-reviews-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From the trail</p>
            <h2 id="home-reviews-title" className="mt-3 text-4xl">
              Stories from our adventurers
            </h2>
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 font-bold text-accent hover:underline"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="review-marquee mt-10">
        <div className="review-marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={`review-marquee-group${copy === 1 ? " review-marquee-copy" : ""}`}
              aria-hidden={copy === 1}
            >
              {reviews.map((review) => (
                <figure
                  key={review.name}
                  className="w-[min(84vw,38rem)] flex-none rounded-sm border border-border bg-card p-7 shadow-sm sm:p-9"
                >
                  <Quote aria-hidden="true" className="h-8 w-8 text-accent" />
                  <blockquote className="mt-5 font-display text-xl leading-relaxed sm:text-2xl">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">{review.name}</span>
                    <span aria-hidden="true"> · </span>
                    {review.trek}
                    <span aria-hidden="true"> · </span>
                    {review.date}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
