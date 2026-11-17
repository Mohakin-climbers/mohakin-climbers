import type { TripItinerary } from "@/lib/itinerary";

export function TripItineraryDetails({ itinerary }: { itinerary: TripItinerary }) {
  return (
    <div className="mt-16 min-w-0">
      <section id="itinerary" aria-labelledby="itinerary-heading" className="scroll-mt-24">
        <p className="eyebrow">Your journey, day by day</p>
        <h2 id="itinerary-heading" className="mt-3 text-3xl md:text-4xl">Detailed itinerary</h2>
        <ol className="mt-8 border-t border-border">
          {itinerary.days.map((day, index) => (
            <li key={`${day.label}-${index}`} className="grid gap-4 border-b border-border py-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
              <p className="font-semibold text-accent">{day.label}</p>
              <div className="min-w-0">
                <h3 className="break-words text-2xl leading-snug">{day.title}</h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {day.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="whitespace-pre-line break-words">{paragraph}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {itinerary.extraSections.map((section, index) => (
        <section key={`${section.title}-${index}`} className="mt-10 border-b border-border pb-10">
          <h2 className="text-3xl">{section.title}</h2>
          <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="whitespace-pre-line break-words">{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}