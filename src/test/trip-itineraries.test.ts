import { describe, expect, it } from "vitest";
import { safaris, treks, tripItineraries } from "@/lib/catalog";

describe("Original trip itinerary coverage", () => {
  it.each(treks.map((trip) => [trip.slug]))("includes the original itinerary for trek %s", (slug) => {
    const itinerary = tripItineraries[slug];
    expect(itinerary).toBeDefined();
    if (!itinerary) throw new Error(`Missing trek itinerary: ${slug}`);
    if (itinerary.sourceUrl) expect(itinerary.sourceUrl).toMatch(/^https:\/\/mohakinclimbers\.org\//);
    expect(itinerary.days.length).toBeGreaterThan(0);
    expect(itinerary.days.every((day) => day.label.trim().length > 0 && day.title.trim().length > 0 && day.paragraphs.length > 0)).toBe(true);
  });

  it.each(safaris.map((trip) => [trip.slug]))("includes the original itinerary for safari %s", (slug) => {
    const itinerary = tripItineraries[slug];
    expect(itinerary).toBeDefined();
    if (!itinerary) throw new Error(`Missing safari itinerary: ${slug}`);
    if (itinerary.sourceUrl) expect(itinerary.sourceUrl).toMatch(/^https:\/\/mohakinclimbers\.org\//);
    expect(itinerary.days.length).toBeGreaterThan(0);
    expect(itinerary.days.every((day) => day.label.trim().length > 0 && day.title.trim().length > 0 && day.paragraphs.length > 0)).toBe(true);
  });
});