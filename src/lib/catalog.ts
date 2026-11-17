import { img } from "@/lib/images";
import itineraryData from "@/lib/trip-itineraries.json";
import type { TripItinerary } from "@/lib/itinerary";

export const tripItineraries: Record<string, TripItinerary> = itineraryData;

export type MountainKey = "mt-kenya" | "mt-kilimanjaro" | "aberdare" | "ngare-ndare";

export type Trek = {
  slug: string;
  mountain: MountainKey;
  name: string;
  route: string;
  tagline: string;
  duration: string;
  start: string;
  end: string;
  difficulty?: string;
  highestAltitude?: string;
  hero?: string;
};

export type Mountain = {
  name: string;
  country: string;
  image: string;
  hero: string;
  summit: string;
  interest: string;
  intro?: string;
  about?: string;
};

export const mountains: Record<MountainKey, Mountain> = {
  "mt-kenya": { name: "Mt. Kenya", country: "Kenya", image: img.naroMoru, hero: img.chogoria, summit: "Point Lenana (4,985 m)", interest: "Mount Kenya trek", intro: "The mountain has more than one way in. From scenic alpine lakes and trekking to Point Lenana (4,985 m) to the technical summits of Nelion (5,188 m) and Batian (5,199 m), explore Mount Kenya through unforgettable mountain adventures." },
  "mt-kilimanjaro": { name: "Mt. Kilimanjaro", country: "Tanzania", image: img.kili, hero: img.kili, summit: "Uhuru Peak (5,895 m)", interest: "Kilimanjaro expedition" },
  aberdare: { name: "Aberdare Ranges", country: "Kenya", image: img.aberdareSatima, hero: img.aberdareSatima, summit: "Mount Satima (4,001 m)", interest: "Aberdare hike" },
  "ngare-ndare": { name: "Ngare Ndare Forest", country: "Kenya", image: img.ngareNdareWaterfall, hero: img.ngareNdareWaterfall, summit: "Canopy Walkway & Blue Pools", interest: "Forest adventure", intro: "An ancient indigenous forest at the foothills of Mount Kenya.", about: "Wander forest trails, cross the canopy walkway and cool off in the natural blue pools with Mohakin's guides and local rangers." },
};

export const treks: Trek[] = [
  { slug: "burguret-chogoria-traverse-6-days", mountain: "mt-kenya", name: "Burguret – Chogoria Traverse", route: "Burguret Route In – Point Lenana – Chogoria Route Out", tagline: "6 days entirely on the mountain, starting in Nanyuki", duration: "6 Days, 5 Nights", start: "Burguret Route", end: "Chogoria Gate" },
  { slug: "chogoria-sirimon-traverse-7-days", mountain: "mt-kenya", name: "Chogoria – Sirimon Traverse", route: "Chogoria Route – Point Lenana – Sirimon Route", tagline: "7 days, most scenic route — gentle, family-friendly pace", duration: "7 Days, 6 Nights", start: "Chogoria Gate", end: "Sirimon Gate" },
  { slug: "chogoria-sirimon-traverse-5-days", mountain: "mt-kenya", name: "Chogoria – Sirimon Traverse (Express)", route: "Chogoria Route – Summit Point Lenana – Sirimon Route", tagline: "The classic traverse in five days", duration: "5 Days, 4 Nights", start: "Chogoria Gate", end: "Sirimon Gate" },
  { slug: "naru-moru-route-classic-5-days", mountain: "mt-kenya", name: "Naru Moru Route Peak Circuit", route: "Naro Moru Route – Point Lenana – Naro Moru Route", tagline: "Starting and ending in Naru Moru town", duration: "5 Days, 4 Nights", start: "Naru Moru Gate", end: "Naru Moru Gate" },
  { slug: "naru-moru-route-express-4-days", mountain: "mt-kenya", name: "Naru Moru Route", route: "4 Days 3 Nights to Point Lenana", tagline: "Starting and ending in Naru Moru town", duration: "4 Days, 3 Nights", start: "Naru Moru Gate", end: "Naru Moru Gate" },
  { slug: "sirimon-chogoria-traverse-5-days", mountain: "mt-kenya", name: "Sirimon – Chogoria Traverse", route: "Sirimon Route – Point Lenana – Chogoria Route", tagline: "Starting in Nanyuki", duration: "5 Days, 4 Nights", start: "Sirimon Gate", end: "Chogoria Gate" },
  { slug: "mount-kenya-lakes-trout-fishing-5-days", mountain: "mt-kenya", name: "Mount Kenya Lakes & Trout Fishing Expedition", route: "Chogoria Route – Lake Ellis – Lake Michaelson – Chogoria Route", tagline: "Lake Ellis & Lake Michaelson, from Chogoria town", duration: "5 Days, 4 Nights", start: "Chogoria Gate", end: "Chogoria Gate" },
  { slug: "sirimon-naru-moru-traverse-4-days", mountain: "mt-kenya", name: "Sirimon – Naro Moru Traverse", route: "Sirimon Route – Point Lenana – Naro Moru Route", tagline: "Starting in Nanyuki", duration: "4 Days, 3 Nights", start: "Sirimon Gate", end: "Naro Moru Gate" },
  { slug: "nelion-technical-climb-8-days", mountain: "mt-kenya", name: "Nelion Technical Climb", route: "Chogoria Ascent – Point Lenana – Nelion – Sirimon Descent", tagline: "Technical alpine climb to Mount Kenya's second-highest peak, via Point Lenana", duration: "8 Days, 7 Nights", start: "Chogoria", end: "Sirimon Gate", difficulty: "Very Challenging – Technical Alpine Climb", highestAltitude: "5,188 m", hero: img.nelionLewisGlacier },
  { slug: "batian-technical-climb-8-days", mountain: "mt-kenya", name: "Batian Technical Climb", route: "Chogoria Ascent – Point Lenana – Batian – Sirimon Descent", tagline: "Technical alpine climb to Batian, Mount Kenya's highest summit, via the North Face Standard Route", duration: "8 Days, 7 Nights", start: "Chogoria", end: "Sirimon Gate", difficulty: "Extremely Challenging – Technical Alpine Climb", highestAltitude: "5,199 m", hero: img.mountKenyaPeaksNelion },
  { slug: "northern-crater-10-days", mountain: "mt-kilimanjaro", name: "Northern Crater Trek", route: "10 Days Ultimate Kilimanjaro Experience", tagline: "7 nights on the mountain, from Moshi/Arusha", duration: "10 Days, 9 Nights", start: "Londorossi Gate", end: "Mweka Gate" },
  { slug: "northern-circuit-9-days", mountain: "mt-kilimanjaro", name: "Northern Circuit Route", route: "Northern Circuit – Uhuru Peak – Mweka Route", tagline: "Highest success rate route", duration: "9 Days, 8 Nights", start: "Londorossi Gate", end: "Mweka Gate" },
  { slug: "lemosho-route-10-days", mountain: "mt-kilimanjaro", name: "Lemosho Route", route: "Lemosho Route – Uhuru Peak – Mweka Route", tagline: "Most scenic western approach", duration: "8 Days, 7 Nights", start: "Londorossi Gate", end: "Mweka Gate" },
  { slug: "shira-route-7-days", mountain: "mt-kilimanjaro", name: "Shira Route", route: "Shira Plateau Adventure", tagline: "Across the Shira Plateau", duration: "7 Days, 6 Nights", start: "Shira Gate", end: "Mweka Gate" },
  { slug: "rongai-route-9-days", mountain: "mt-kilimanjaro", name: "Rongai Route", route: "Rongai – Uhuru Peak – Marangu", tagline: "Northern approach", duration: "7 Days, 6 Nights", start: "Rongai Gate", end: "Marangu Gate" },
  { slug: "marangu-route-6-days", mountain: "mt-kilimanjaro", name: "Marangu Route", route: "Marangu Route – Uhuru Peak – Marangu Route", tagline: "The \"Coca-Cola\" route with huts", duration: "6 Days, 5 Nights", start: "Marangu Gate", end: "Marangu Gate" },
  { slug: "marangu-route-express-4-days", mountain: "mt-kilimanjaro", name: "Marangu Express", route: "Fastest hut-to-hut route", tagline: "No acclimatization day — lower summit success than 6+ day routes", duration: "4 Days, 3 Nights", start: "Marangu Gate", end: "Marangu Gate" },
  { slug: "umbwe-route-6-days", mountain: "mt-kilimanjaro", name: "Umbwe Route", route: "Umbwe Route – Uhuru Peak – Mweka Route", tagline: "Steep and direct", duration: "6 Days, 5 Nights", start: "Umbwe Gate", end: "Mweka Gate" },
  { slug: "mount-meru-4-days", mountain: "mt-kilimanjaro", name: "Mount Meru Acclimatization Trek", route: "Momella Gate – Mount Meru – Momella Gate", tagline: "Ideal warm-up before Kilimanjaro, from Arusha", duration: "4 Days, 3 Nights", start: "Momella Gate", end: "Momella Gate" },
  { slug: "mount-satima-table-mountain-2-days", mountain: "aberdare", name: "Mount Satima & Table Mountain Expedition", route: "Aberdare Ranges – Mount Satima – Table Mountain", tagline: "Two days on the highest peak in the Aberdare Ranges", duration: "2 Days, 1 Night", start: "Nanyuki", end: "Nanyuki", difficulty: "Challenging", highestAltitude: "4,001 m" },
  { slug: "elephant-hill-day-hike-1-day", mountain: "aberdare", name: "Elephant Hill Day Hike", route: "Mutubio Gate – Elephant Hill", tagline: "A challenging day hike to the Aberdare summit", duration: "1 Day", start: "Nanyuki", end: "Nanyuki", difficulty: "Challenging", highestAltitude: "3,658 m" },
  { slug: "ngare-ndare-forest-adventure-1-day", mountain: "ngare-ndare", name: "Ngare Ndare Forest Adventure", route: "Nanyuki – Ngare Ndare Forest – Nanyuki", tagline: "Canopy walkway, forest trekking, waterfalls, natural blue pools and wildlife viewing", duration: "1 Day", start: "Nanyuki", end: "Nanyuki" },
];

export const trekIncluded = ["Certified mountain guides", "Porters & mountain cooks", "Park & camping fees", "All meals on the mountain", "Gear rental available", "Transfers to and from the gate"];

export type Safari = { slug: string; country: "kenya" | "tanzania"; name: string; tagline: string; days: number; parks: number; image: string };

export const countries = {
  kenya: { name: "Kenya", image: img.lions },
  tanzania: { name: "Tanzania", image: img.wildebeest },
} as const;

export const safaris: Safari[] = [
  { slug: "masai-mara-nakuru-naivasha-amboseli-9-days", country: "kenya", name: "Masai Mara, Lake Nakuru, Lake Naivasha & Amboseli", tagline: "The Ultimate Kenya Safari Experience", days: 9, parks: 4, image: img.lions },
  { slug: "masai-mara-amboseli-7-days", country: "kenya", name: "Masai Mara & Amboseli Safari", tagline: "Kenya's Premier Wildlife Parks", days: 7, parks: 2, image: img.elephant },
  { slug: "masai-mara-lake-nakuru-6-days", country: "kenya", name: "Masai Mara & Lake Nakuru Safari", tagline: "Classic Kenya Wildlife Circuit", days: 6, parks: 2, image: img.maraElephant },
  { slug: "amboseli-tsavo-east-west-7-days", country: "kenya", name: "Amboseli, Tsavo East & Tsavo West", tagline: "Southern Kenya Wildlife Adventure", days: 7, parks: 3, image: img.safariGiraffe },
  { slug: "samburu-wilderness-safari-3-days", country: "kenya", name: "Samburu Wilderness Safari", tagline: "Kenya's Northern Frontier Wildlife Safari", days: 3, parks: 1, image: img.mara1 },
  { slug: "ol-pejeta-conservancy-safari-3-days", country: "kenya", name: "Ol Pejeta Conservancy Safari", tagline: "Wildlife and Conservation Safari in Laikipia", days: 3, parks: 1, image: img.olPejetaElephants },
  { slug: "serengeti-ngorongoro-tarangire-10-days", country: "tanzania", name: "Serengeti, Ngorongoro Crater, Lake Manyara & Tarangire", tagline: "Tanzania's Ultimate Safari Circuit", days: 10, parks: 4, image: img.wildebeest },
  { slug: "serengeti-ngorongoro-8-days", country: "tanzania", name: "Serengeti & Ngorongoro Crater Safari", tagline: "Plains and crater", days: 8, parks: 3, image: img.mara4 },
  { slug: "northern-circuit-luxury-12-days", country: "tanzania", name: "Northern Circuit Luxury Safari", tagline: "Tanzania's north in comfort", days: 12, parks: 5, image: img.lions },
  { slug: "selous-ruaha-southern-circuit-10-days", country: "tanzania", name: "Selous & Ruaha Southern Circuit", tagline: "Remote southern wilderness", days: 10, parks: 2, image: img.elephant },
];

export const safariIncluded = ["All transfers", "4x4 Land Cruiser", "Professional guide", "All park fees", "Full board", "Water during drives", "Government taxes", "Flying Doctors cover"];
export const safariExcluded = ["Flights", "Visa", "Insurance", "Optional activities", "Tips", "Personal items", "Drinks"];

export type Program = { slug: string; name: string; body: string; focus: string[]; stats: [string, string][]; image: string };

export const programs: Program[] = [
  { slug: "mountain-conservation-program", name: "Mountain Conservation Program", body: "Protecting East Africa's fragile mountain ecosystems through restoration, stewardship and long-term conservation partnerships.", focus: ["Trail restoration", "Tree planting", "Waste management", "Ecosystem protection"], stats: [["10K+", "Trees Planted"], ["30+", "Projects"], ["5", "Regions"]], image: img.conservation },
  { slug: "youth-climbing-initiative", name: "Youth Climbing Initiative", body: "Empowering young people through outdoor education, environmental awareness and mountain leadership programs.", focus: ["Outdoor education", "Leadership development", "School partnerships", "Environmental awareness"], stats: [["500+", "Youth Reached"], ["30+", "Schools"], ["12", "Communities"]], image: img.youth },
  { slug: "women-in-mountaineering", name: "Women in Mountaineering", body: "Creating pathways for women to participate, lead and thrive in mountain guiding, conservation and adventure tourism.", focus: ["Guide training", "Mentorship", "Leadership development", "Skills programs"], stats: [["100+", "Participants"], ["15", "Training Events"], ["8", "Partners"]], image: img.women },
  { slug: "porter-welfare", name: "Porter Welfare Program", body: "Supporting dignity, safety, fair treatment and professional growth for the people who make mountain expeditions possible.", focus: ["Fair treatment", "Equipment support", "Safety awareness", "Skills development"], stats: [["300+", "Porters Supported"], ["50+", "Equipment Grants"], ["10", "Years Running"]], image: img.training },
];
