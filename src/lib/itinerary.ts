export type ItineraryDay = {
  label: string;
  title: string;
  paragraphs: string[];
};

export type TripItinerary = {
  /** Link to the page on mohakinclimbers.org this itinerary was taken from. Omitted for trips added directly here. */
  sourceUrl?: string;
  days: ItineraryDay[];
  extraSections: { title: string; paragraphs: string[] }[];
  /** Optional packing list shown on the trip page (e.g. day hikes). */
  whatToCarry?: string[];
};