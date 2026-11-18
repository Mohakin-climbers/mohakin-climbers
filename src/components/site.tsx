import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Camera, Clock, Compass, Home, Leaf, ListChecks, Mail, MapPin, Menu, Mountain, PawPrint, SlidersHorizontal, Star, Trees, X } from "lucide-react";
import { mountains, type Safari, type Trek } from "@/lib/catalog";
import { canonicalUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import logo from "@/assets/mohakin-photos/mohakin-original-logo.png";
import logoDark from "@/assets/mohakin-photos/mohakin-dark-logo.png";

export const nav = [
  { to: "/", label: "Home", icon: Home, blurb: "Start here" },
  { to: "/about", label: "About", icon: Compass, blurb: "30+ years of our story" },
  { to: "/treks", label: "Treks", icon: Mountain, blurb: "Mt. Kenya, Kilimanjaro & Aberdare" },
  { to: "/safaris", label: "Safaris", icon: PawPrint, blurb: "Kenya & Tanzania wildlife" },
  { to: "/foundation", label: "Foundation", icon: Leaf, blurb: "Conservation & community" },
  { to: "/gallery", label: "Gallery", icon: Camera, blurb: "Moments from the field" },
  { to: "/reviews", label: "Reviews", icon: Star, blurb: "Stories from climbers" },
  { to: "/contact", label: "Contact", icon: Mail, blurb: "Plan your journey" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-40 transition-all duration-300",
      scrolled ? "border-b border-cloud-line/60 bg-cloud/85 shadow-sm backdrop-blur-md" : "border-b border-transparent",
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-primary sm:px-6">
        <Link to="/" aria-label="Mohakin Climbers home" className="shrink-0">
          <img src={logoDark} alt="Mohakin Climbers" className="h-11 w-auto max-w-[170px] object-contain sm:max-w-[210px]" />
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-cloud-line/60 bg-cloud/80 px-2 py-1 text-xs font-semibold shadow-sm backdrop-blur-md lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 opacity-75 transition hover:bg-primary/10 hover:opacity-100" activeProps={{ className: "text-accent opacity-100" }}>
              <n.icon className="h-4 w-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg sm:inline-block"
          >
            Plan a trip
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex min-h-dvh flex-col overflow-y-auto overscroll-contain bg-gradient-to-br from-cloud via-cloud to-cloud-2 px-5 pb-6 pt-4 text-primary sm:px-8"
        >
          <div className="flex items-center justify-between border-b border-cloud-line/70 pb-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              aria-label="Mohakin Climbers home"
              className="shrink-0"
            >
              <img
                src={logoDark}
                alt="Mohakin Climbers"
                className="h-10 w-auto max-w-[170px] object-contain sm:max-w-[210px]"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-accent/15 hover:text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="grid shrink-0 gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-accent/15 hover:text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <n.icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="min-w-0">
                  <span className="block font-semibold">{n.label}</span>
                  <span className="block truncate text-xs text-muted-foreground">{n.blurb}</span>
                </span>
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto flex min-h-12 items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:opacity-90"
          >
            Plan a trip
          </Link>
        </div>
      )}
    </header>
  );
}

export function IconMenu() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {nav.filter((n) => n.to !== "/").map((n) => (
        <Link key={n.to} to={n.to} className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition group-hover:bg-accent group-hover:text-accent-foreground"><n.icon className="h-7 w-7" /></span>
          <span className="font-display text-lg">{n.label}</span>
          <span className="text-xs text-muted-foreground">{n.blurb}</span>
        </Link>
      ))}
    </div>
  );
}

function tripInterest(kind: "trek" | "safari", mountain?: Trek["mountain"]) {
  if (kind === "safari") return "Safari";
  return mountain ? mountains[mountain].interest : "Custom expedition";
}

const btnPrimary = "flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition hover:opacity-90";
const btnOutline = "flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground";

export function TrekCard({ trek }: { trek: Trek }) {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl">
      <p className="eyebrow">{mountains[trek.mountain].name}</p>
      <Link to="/treks/trek/$slug" params={{ slug: trek.slug }} className="mt-3 text-2xl font-display hover:text-accent">{trek.name}</Link>
      <p className="mt-2 text-sm text-muted-foreground">{trek.route}</p>
      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-xs font-semibold">
        <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-accent" />{trek.duration}</span>
        <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-accent" />{trek.start}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link to="/treks/trek/$slug" params={{ slug: trek.slug }} hash="itinerary" className={btnPrimary}><ListChecks className="h-4 w-4" />Itinerary</Link>
        <Link to="/contact" search={{ interest: tripInterest("trek", trek.mountain), trip: trek.name, customize: true }} hash="inquiry" className={btnOutline}><SlidersHorizontal className="h-4 w-4" />Customize</Link>
      </div>
    </div>
  );
}

export function SafariCard({ safari }: { safari: Safari }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
      <Link to="/safaris/safari/$slug" params={{ slug: safari.slug }} className="block overflow-hidden"><img src={safari.image} alt={safari.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{safari.country === "kenya" ? "Kenya" : "Tanzania"}</p>
        <Link to="/safaris/safari/$slug" params={{ slug: safari.slug }} className="mt-2 font-display text-xl hover:text-accent">{safari.name}</Link>
        <p className="mt-1 text-sm text-muted-foreground">{safari.tagline}</p>
        <div className="mt-4 flex gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-accent" />{safari.days} days</span>
          <span className="flex items-center gap-1"><Trees className="h-4 w-4 text-accent" />{safari.parks} {safari.parks === 1 ? "park" : "parks"}</span>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link to="/safaris/safari/$slug" params={{ slug: safari.slug }} hash="itinerary" className={btnPrimary}><ListChecks className="h-4 w-4" />Itinerary</Link>
          <Link to="/contact" search={{ interest: tripInterest("safari"), trip: safari.name, customize: true }} hash="inquiry" className={btnOutline}><SlidersHorizontal className="h-4 w-4" />Customize</Link>
        </div>
      </div>
    </div>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="mohakin-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-instagram-1)" />
          <stop offset="25%" stopColor="var(--color-instagram-2)" />
          <stop offset="50%" stopColor="var(--color-instagram-3)" />
          <stop offset="75%" stopColor="var(--color-instagram-4)" />
          <stop offset="100%" stopColor="var(--color-instagram-5)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mohakin-instagram-gradient)"
        fillRule="evenodd"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3"
      />
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="var(--color-facebook)"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="Mohakin Climbers home"><img src={logo} alt="Mohakin Climbers" className="h-16 w-auto max-w-full object-contain" loading="lazy" /></Link>
          <p className="mt-3 text-sm opacity-75">Guided eco-adventures on Mount Kenya, Kilimanjaro and Kenya's wild places — for over 30 years.</p>
        </div>
        <div className="text-sm opacity-85">
          <p className="eyebrow mb-3">Visit</p>
          <p>Comfort Street, off Laikipia Road</p>
          <p>Nanyuki, Kenya</p>
          <p className="mt-3"><a href="tel:+254708120806">+254 708 120 806</a></p>
          <p><a href="tel:+254733340849">+254 733 340 849</a></p>
          <p><a href="mailto:mohakinclimbers@gmail.com">mohakinclimbers@gmail.com</a></p>
          <p className="eyebrow mb-3 mt-6">Follow us</p>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/mohakin_climbers/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><InstagramGlyph className="h-4 w-4 shrink-0" />@mohakin_climbers</a>
            <a href="https://www.facebook.com/MohakinClimbers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><FacebookGlyph className="h-4 w-4 shrink-0" />Mohakin Climbers</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-85">
          <p className="eyebrow mb-1">Explore</p>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="flex items-center gap-2"><n.icon className="h-4 w-4" />{n.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ image, eyebrow, title, children }: { image: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden">
      <img src={image} alt="" width={1920} height={1080} className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 text-primary-foreground">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function CardGrid({ items }: { items: { title: string; meta: string; body: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
      {items.map((i) => (
        <article key={i.title} className="bg-card p-8">
          <p className="eyebrow">{i.meta}</p>
          <h3 className="mt-3 text-2xl">{i.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
        </article>
      ))}
    </div>
  );
}

export function meta(title: string, description: string, pathname: string) {
  const canonical = canonicalUrl(pathname);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
