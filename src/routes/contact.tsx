import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { img } from "@/lib/images";
import { Layout, PageHero, meta } from "@/components/site";

const interests = ["Mount Kenya trek", "Kilimanjaro expedition", "Rwenzori trek", "Aberdare hike", "Forest adventure", "Safari", "Custom expedition", "Corporate adventure", "Foundation partnership", "Something else"];

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ interest: z.string().optional(), trip: z.string().optional(), customize: z.boolean().optional() }),
  head: () => meta("Contact & Book — Mohakin Climbers, Nanyuki", "Plan your Mount Kenya, Kilimanjaro or safari trip. Call +254 708 120 806 or visit us on Comfort Street, Nanyuki, Kenya."),
  component: Contact,
});

const field = "w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-ring";

function Contact() {
  const { interest, trip, customize } = Route.useSearch();
  const defaultMessage = trip
    ? customize
      ? `I'd like to customize: ${trip}\nChanges I have in mind (number of days, dates, accommodation, extra parks or activities, budget):\n`
      : `I'm interested in: ${trip}\n`
    : "";
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "");
    setState("sending");
    try {
      const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
      const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
      const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: v("full_name"),
          from_email: v("email"),
          reply_to: v("email"),
          phone: v("phone"),
          country: v("country"),
          interest: v("interest"),
          group_size: v("group_size"),
          preferred_dates: v("preferred_dates"),
          message: v("message"),
        },
        { publicKey },
      );
      setState("sent");
    } catch (error) {
      console.error("Failed to send inquiry via EmailJS", error);
      setState("error");
    }
  }

  return (
    <Layout>
      <PageHero image={img.journey} eyebrow="Contact" title="Every journey starts with a conversation." />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <h2 className="text-3xl">We're listening.</h2>
          <p className="flex gap-3"><Phone className="h-5 w-5 text-accent" /><span><a href="tel:+254708120806">+254 708 120 806</a><br /><a href="tel:+254733340849">+254 733 340 849</a></span></p>
          <p className="flex gap-3"><Mail className="h-5 w-5 text-accent" /><a href="mailto:mohakinclimbers@gmail.com">mohakinclimbers@gmail.com</a></p>
          <p className="flex gap-3"><MapPin className="h-5 w-5 text-accent" /><span>Comfort Street, off Laikipia Road<br />Nanyuki, Kenya</span></p>
          <iframe title="Map" className="h-64 w-full rounded-md border border-border" loading="lazy" src="https://www.google.com/maps?q=Laikipia+Road+Nanyuki+Kenya&output=embed" />
        </div>
        {state === "sent" ? (
          <div className="self-center">
            <p className="eyebrow">Asante!</p>
            <h2 className="mt-3 text-3xl">Thanks — your inquiry has been received. We'll be in touch soon.</h2>
          </div>
        ) : (
          <form id="inquiry" className="scroll-mt-24 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
            <h2 className="text-3xl sm:col-span-2">{customize ? "Customize your trip" : "What are you planning?"}</h2>
            {customize && trip && <p className="-mt-2 text-sm text-muted-foreground sm:col-span-2">Tell us how you'd like to change <span className="font-semibold text-foreground">{trip}</span> — we'll tailor the days, pace, accommodation and extras to suit you.</p>}
            <input name="full_name" required maxLength={120} placeholder="Full name *" className={field} />
            <input name="email" required type="email" maxLength={200} placeholder="Email address *" className={field} />
            <input name="phone" maxLength={40} placeholder="Phone number" className={field} />
            <input name="country" maxLength={80} placeholder="Country of residence" className={field} />
            <select name="interest" required className={field} defaultValue={interest && interests.includes(interest) ? interest : ""}>
              <option value="" disabled>I'm interested in *</option>
              {interests.map((i) => <option key={i}>{i}</option>)}
            </select>
            <select name="group_size" className={field} defaultValue="">
              <option value="">Group size</option>
              {["Just me", "2 people", "3–5 people", "6–10 people", "11+ people", "Not decided yet"].map((g) => <option key={g}>{g}</option>)}
            </select>
            <input name="preferred_dates" maxLength={80} placeholder="Preferred dates" className={`${field} sm:col-span-2`} />
            <textarea name="message" required maxLength={4000} rows={5} defaultValue={defaultMessage} placeholder="Tell us about your plans *" className={`${field} sm:col-span-2`} />
            {state === "error" && <p className="text-sm text-destructive sm:col-span-2">Something went wrong — please try again or call us.</p>}
            <button disabled={state === "sending"} className="rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground disabled:opacity-60 sm:col-span-2">{state === "sending" ? "Sending…" : "Send your inquiry"}</button>
          </form>
        )}
      </section>
    </Layout>
  );
}
