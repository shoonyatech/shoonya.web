import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/websummit")({
  head: () => ({
    meta: [
      { title: "Shoonya | Canadian Dev Teams for Founders | Web Summit Vancouver 2026" },
      {
        name: "description",
        content:
          "Canada-based dev teams you can hire for a week. Build your MVP without 3-month minimums or offshore black boxes.",
      },
      { property: "og:title", content: "Shoonya | Canadian Dev Teams for Founders" },
      {
        property: "og:description",
        content:
          "Hire a senior Canadian engineer for a week. Working MVP by Friday. Built for Web Summit Vancouver 2026 founders.",
      },
    ],
  }),
  component: WebSummitPage,
});

const CALENDLY_LINK = "[CALENDLY_LINK_PLACEHOLDER]";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Page ---------- */
function WebSummitPage() {
  return (
    <div className="ws-root min-h-screen bg-[#FAFAFA] text-[#0B0B12] antialiased">
      <style>{`
        .ws-root { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif; }
        .ws-display { font-family: 'Space Grotesk', 'General Sans', 'Inter', system-ui, sans-serif; letter-spacing: -0.02em; }
        .ws-tilt-l { transform: rotate(-2deg); transition: transform .3s ease; }
        .ws-tilt-r { transform: rotate(2deg); transition: transform .3s ease; }
        .ws-tilt-l:hover, .ws-tilt-r:hover { transform: rotate(0deg); }
        .ws-blob { filter: blur(60px); opacity: .55; }
        @keyframes wsfloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
        .ws-float { animation: wsfloat 7s ease-in-out infinite; }
        @keyframes wsblob { 0%,100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; } 50% { border-radius: 40% 60% 45% 55% / 60% 40% 60% 40%; } }
        .ws-morph { animation: wsblob 12s ease-in-out infinite; }
        .ws-pill-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .ws-pill-btn:hover { transform: scale(1.04); }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      />

      <TopBanner />
      <Hero />
      <Problem />
      <Offer />
      <HowItWorks />
      <WhyCanadian />
      <TechStack />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- 1. Sticky banner ---------- */
function TopBanner() {
  return (
    <button
      onClick={() => scrollToId("book")}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#F43F5E] to-[#EC4899] py-2.5 text-center text-sm font-medium text-white shadow-sm transition hover:brightness-110"
    >
      🇨🇦 Web Summit attendee? Book a FREE 90-min MVP scoping session →
    </button>
  );
}

/* ---------- 2. Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 lg:pt-20">
      <div className="ws-blob ws-morph absolute -left-24 top-10 h-80 w-80 bg-[#6D28D9]" aria-hidden />
      <div className="ws-blob ws-morph absolute -right-20 top-40 h-72 w-72 bg-[#F43F5E]" aria-hidden style={{ animationDelay: "-4s" }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#6D28D9]/10 px-3 py-1 text-xs font-semibold text-[#6D28D9]">
            Web Summit Vancouver · May 2026
          </span>
          <h1 className="ws-display mt-5 text-[44px] font-bold leading-[1.05] sm:text-6xl lg:text-[76px]">
            Got an idea?
            <br />
            We'll have a working MVP
            <br />
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#EC4899] bg-clip-text text-transparent">by Friday.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#3F3F46] sm:text-xl">
            Canada-based dev teams you can hire for a week. No 3-month minimums, no offshore black
            boxes — just senior engineers in your timezone shipping code from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("book")}
              className="ws-pill-btn rounded-full bg-[#6D28D9] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#6D28D9]/30"
            >
              Book your free scoping call
            </button>
            <button
              onClick={() => scrollToId("how")}
              className="ws-pill-btn rounded-full border-2 border-[#0B0B12] bg-white px-7 py-4 text-base font-semibold text-[#0B0B12]"
            >
              See how a week works
            </button>
          </div>
          <p className="mt-6 text-sm text-[#52525B]">
            ⚡ 1-week sprints &nbsp;•&nbsp; 🇨🇦 Canadian team &nbsp;•&nbsp; 💸 SR&amp;ED eligible &nbsp;•&nbsp; 🔒 Your IP, your code
          </p>
          <p className="mt-3 text-xs font-medium text-[#6D28D9]">
            Canadian corporation since 2019 · 7+ years shipping production software
          </p>
        </div>

        <div className="relative ws-float">
          <div className="ws-tilt-r rounded-3xl border border-[#0B0B12]/10 bg-white p-6 shadow-2xl shadow-[#6D28D9]/10">
            <div className="mb-4 flex items-center justify-between">
              <span className="ws-display text-lg font-bold">Your week with us</span>
              <span className="rounded-full bg-[#FEF3C7] px-2.5 py-0.5 text-xs font-semibold text-[#92400E]">May 2026</span>
            </div>
            <ul className="space-y-2.5">
              {[
                ["Mon", "Kickoff + scoping", true],
                ["Tue", "Build sprint", true],
                ["Wed", "Midweek demo", true],
                ["Thu", "Polish + tests", true],
                ["Fri", "Working demo 🚀", true],
              ].map(([day, label, done]) => (
                <li key={day as string} className="flex items-center gap-3 rounded-xl bg-[#FAFAFA] px-3 py-2.5">
                  <span className="w-10 text-xs font-bold text-[#6D28D9]">{day}</span>
                  <span className="flex-1 text-sm font-medium">{label}</span>
                  {done && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6D28D9] text-xs text-white">✓</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Problem ---------- */
function Problem() {
  const cards = [
    { title: "Hiring a CTO takes 6 months.", body: "...and you wanted to test the idea this quarter.", tilt: "ws-tilt-l", bg: "bg-[#FFE4E6]" },
    { title: "Agencies want 3-month minimums.", body: "You want to validate. Not commit to a marriage.", tilt: "ws-tilt-r", bg: "bg-[#EDE9FE]" },
    { title: "Offshore is a black box.", body: "12-hour time gaps. Unclear progress. Surprise scope debates at midnight.", tilt: "ws-tilt-l", bg: "bg-[#FEF3C7]" },
  ];
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">
            Building an MVP shouldn't feel like this
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className={`${c.tilt} ${c.bg} h-full rounded-2xl border border-[#0B0B12]/5 p-7 shadow-md`}>
                <p className="ws-display text-2xl font-bold leading-tight">{c.title}</p>
                <p className="mt-3 text-[#3F3F46]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Offer ---------- */
function Offer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#F3F0FF] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">
            Try us for a week. Decide if you want a month.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl border-2 border-[#6D28D9] bg-white p-8 shadow-2xl shadow-[#6D28D9]/20 sm:p-12">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#F43F5E] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                The Sprint Week
              </span>
              <div className="mt-5 flex items-baseline justify-center gap-2">
                <span className="ws-display text-6xl font-bold sm:text-7xl">$3,900</span>
                <span className="text-lg font-medium text-[#52525B]">CAD / week</span>
              </div>
              <p className="mt-3 text-lg text-[#3F3F46]">
                40 hours · 1 senior engineer · Working code by Friday
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-[#27272A]">
              {[
                ["Monday", "kickoff + technical scoping"],
                ["Tuesday–Thursday", "build sprint, daily check-ins"],
                ["Friday", "working demo + decision point"],
                ["Always", "full source code, deployed and yours to keep"],
                ["All week", "shared Slack channel with your engineer"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#6D28D9]/10 text-sm text-[#6D28D9]">✓</span>
                  <span>
                    <span className="font-semibold">{k}:</span> {v}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollToId("book")}
              className="ws-pill-btn mt-10 w-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#EC4899] py-5 text-lg font-semibold text-white shadow-xl shadow-[#6D28D9]/30"
            >
              Start with a week
            </button>
            <p className="mt-5 text-center text-sm font-medium text-[#6D28D9]">
              🤝 We invoice only if you're 100% satisfied. No questions asked.
            </p>
          </div>
        </Reveal>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#52525B]">
          Need more time, more people, or ongoing support? We also run 4-week MVP packages and full-team
          engagements. Let's talk on the scoping call.
        </p>
      </div>
    </section>
  );
}

/* ---------- 5. How It Works ---------- */
function HowItWorks() {
  const steps = [
    { day: "Day 0", text: "Free 90-min scoping call. We pressure-test your idea and scope the week.", color: "bg-[#F43F5E]" },
    { day: "Monday", text: "Kickoff. Architecture, stack decisions, sprint plan.", color: "bg-[#EC4899]" },
    { day: "Tue–Thu", text: "Build. Daily Slack updates. Midweek demo.", color: "bg-[#A855F7]" },
    { day: "Friday", text: "Demo day. See what we built. Decide what's next.", color: "bg-[#6D28D9]" },
    { day: "Day 8+", text: "Continue, extend, or take the code and run. Your call.", color: "bg-[#4C1D95]" },
  ];
  return (
    <section id="how" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">From DM to demo, in 5 days</h2>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.day} delay={i * 80}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className={`${s.color} flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg`}>
                  <span className="ws-display text-xl font-bold">{i + 1}</span>
                </div>
                <p className="ws-display mt-4 text-lg font-bold">{s.day}</p>
                <p className="mt-2 text-sm text-[#3F3F46]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Why Canadian ---------- */
function WhyCanadian() {
  const cards = [
    { icon: "🕐", title: "Same timezone", body: "PT, MT, ET — we're 0–3 hours apart. Sync calls happen at human times." },
    { icon: "💰", title: "SR&ED eligible", body: "Our Canadian engineering hours qualify for federal R&D tax credits. Up to 35% back." },
    { icon: "🇨🇦", title: "Canadian contracts & IP", body: "Disputes settled under Canadian law. Your IP, full stop." },
    { icon: "🗣️", title: "Native English communication", body: "No translation tax. Specs land clearly. Code reviews catch nuance." },
  ];
  return (
    <section className="bg-[#0B0B12] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">
            Why a Canadian team actually matters
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                <div className="text-3xl">{c.icon}</div>
                <p className="ws-display mt-3 text-2xl font-bold">{c.title}</p>
                <p className="mt-2 text-white/70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Tech Stack ---------- */
function TechStack() {
  const groups = [
    { label: "Frontend", items: ["React", "Next.js", "Vue", "React Native", "Flutter", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", ".NET / C#", "Python", "PostgreSQL", "SQL Server"] },
    { label: "Cloud & Infra", items: ["AWS", "Azure", "Docker", "Kubernetes"] },
    { label: "Other", items: ["REST APIs", "GraphQL", "Git"] },
  ];
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">Stack we ship in</h2>
        </Reveal>
        <div className="mt-12 space-y-8">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="w-32 flex-none">
                  <span className="ws-display text-sm font-bold uppercase tracking-wider text-[#6D28D9]">{g.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#0B0B12]/10 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-[#6D28D9] hover:text-[#6D28D9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[#52525B]">
          Don't see your stack? Ask us — chances are we've shipped in it.
        </p>
      </div>
    </section>
  );
}

/* ---------- 8. Testimonials ---------- */
function Testimonials() {
  const cards = [
    { quote: "[TESTIMONIAL_1_QUOTE]", name: "[TESTIMONIAL_1_NAME]", role: "[TESTIMONIAL_1_TITLE_AND_COMPANY]", bg: "bg-[#EDE9FE]", tilt: "ws-tilt-l" },
    { quote: "[TESTIMONIAL_2_QUOTE]", name: "[TESTIMONIAL_2_NAME]", role: "[TESTIMONIAL_2_TITLE_AND_COMPANY]", bg: "bg-[#FFE4E6]", tilt: "ws-tilt-r" },
    { quote: "[TESTIMONIAL_3_QUOTE]", name: "[TESTIMONIAL_3_NAME]", role: "[TESTIMONIAL_3_TITLE_AND_COMPANY]", bg: "bg-[#FCE7F3]", tilt: "ws-tilt-l" },
  ];
  return (
    <section className="bg-[#FAFAFA] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">Founders who trusted us first</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`${c.tilt} ${c.bg} h-full rounded-2xl border border-[#0B0B12]/5 p-7 shadow-md`}>
                <p className="ws-display text-xl italic leading-snug text-[#0B0B12]">"{c.quote}"</p>
                <p className="mt-6 text-sm font-semibold">— {c.name}</p>
                <p className="text-sm text-[#52525B]">{c.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. FAQ ---------- */
const FAQS = [
  {
    q: "How is this different from Toptal or Upwork?",
    a: "Toptal places individual freelancers. We come as a coordinated team — engineer, designer where needed, and project oversight — already working together. You're not stitching together strangers.",
  },
  { q: "What if my idea changes mid-week?", a: "That's exactly what week-long sprints are for. Pivot Wednesday and we'll rebuild Thursday. No change orders, no scope debates." },
  { q: "Who owns the code?", a: "You do. Full IP transfer is in every contract. We hand over the GitHub repo, the deployment, the credentials — everything." },
  { q: "What if a week isn't enough?", a: "Most projects aren't done in a week. The point is you don't have to commit to more than that to start. Founders typically extend after the Friday demo — but the choice is always yours." },
  { q: "Can I get the same engineer week after week?", a: "Yes. Once we match you to an engineer, they're yours for as long as you need them. Continuity matters." },
  { q: "Where are your engineers based?", a: "Across Canada — Greater Vancouver, Toronto, Montreal, Calgary. All timezone-aligned with you." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="ws-display text-center text-4xl font-bold sm:text-5xl">Real questions founders ask us</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-[#0B0B12]/10 bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[#FAFAFA]"
                >
                  <span className="ws-display text-lg font-semibold">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#6D28D9]/10 text-[#6D28D9] transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#3F3F46]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Final CTA ---------- */
function FinalCTA() {
  const calendlyReady = CALENDLY_LINK && !CALENDLY_LINK.startsWith("[");
  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#EC4899] px-5 py-24 text-white sm:px-8">
      <div className="ws-blob ws-morph absolute -right-20 top-10 h-72 w-72 bg-white/20" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="ws-display text-4xl font-bold leading-tight sm:text-6xl">
            Walking the Web Summit floor today?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Book your free 90-min MVP scoping session. Web Summit attendees only, available this week.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            {calendlyReady ? (
              <iframe
                src={CALENDLY_LINK}
                title="Book a scoping call"
                className="h-[640px] w-full rounded-xl border-0"
              />
            ) : (
              <button
                disabled
                className="w-full cursor-not-allowed rounded-full bg-gradient-to-r from-[#6D28D9] to-[#EC4899] px-8 py-5 text-lg font-semibold text-white opacity-90"
              >
                Book my scoping call
              </button>
            )}
          </div>
        </Reveal>

        <p className="mt-8 text-sm text-white/90">
          Prefer email?{" "}
          <a href="mailto:contact@shoonya.ca" className="underline underline-offset-4 hover:text-white">
            contact@shoonya.ca
          </a>
        </p>
        <p className="mt-1 text-sm text-white/90">
          Text us:{" "}
          <a href="tel:+17789394992" className="underline underline-offset-4 hover:text-white">
            +1 (778) 939-4992
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- 11. Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#0B0B12] px-5 py-12 text-white/80 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="ws-display text-xl font-bold text-white">Shoonya Technologies Ltd.</p>
          <p className="mt-1 text-sm text-white/60">Building Canadian software, one week at a time.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a href="https://github.com/shoonyatech" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/company/shoonyatech" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="mailto:contact@shoonya.ca" className="hover:text-white">Email</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/40">© 2026 Shoonya Technologies Ltd.</p>
    </footer>
  );
}
