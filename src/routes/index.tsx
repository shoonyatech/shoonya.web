import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Zap, Settings2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoonya Technologies — Software Development & Consultancy" },
      { name: "description", content: "Canadian software development and consultancy. We turn complex challenges into elegant, production-ready software." },
      { property: "og:title", content: "Shoonya Technologies — Building Digital Excellence" },
      { property: "og:description", content: "Custom software, cloud, mobile, and DevOps solutions, built in Canada." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Web Summit promo banner */}
      <Link
        to="/websummit"
        className="group block bg-gradient-to-r from-[#F43F5E] to-[#EC4899] text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:flex-row sm:gap-3 sm:text-base">
          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
            Web Summit Vancouver 2026
          </span>
          <span className="font-medium">
            🇨🇦 Founder at Web Summit? Get a working MVP by Friday — free 90-min scoping call.
          </span>
          <span className="inline-flex items-center gap-1 font-semibold underline-offset-4 group-hover:underline">
            See the offer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Software Development & Consultancy
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building Digital Excellence{" "}
              <span className="text-primary">Through Innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We transform complex challenges into elegant solutions. From concept to
              deployment, we deliver cutting-edge software that drives your business
              forward — engineered in Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5"
              >
                Get in Touch
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Canadian corporation since 2019 · 7+ years in active operation
            </p>
          </div>

          <div className="grid gap-4 self-center">
            {[
              { icon: CheckCircle2, title: "Custom Development", sub: "Tailored Solutions" },
              { icon: Zap, title: "Rapid Deployment", sub: "Fast Time-to-Market" },
              { icon: Settings2, title: "Expert Consultation", sub: "Strategic Guidance" },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {[
            ["7+", "Years in business"],
            ["20+", "Senior engineers across Canada"],
            ["1 week", "From kickoff to working demo"],
            ["100%", "Code & IP yours to keep"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Satisfaction guarantee */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm font-medium sm:px-6 sm:text-base">
          <span className="mr-2">🤝</span>
          We invoice only if you're <span className="font-semibold text-primary">100% satisfied</span> with our work. No questions asked.
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div
          className="overflow-hidden rounded-3xl px-8 py-14 text-center text-primary-foreground"
          style={{ background: "var(--gradient-maple)" }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to build something great?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Let's talk about your project. Whether it's an MVP or modernizing legacy systems,
            we have you covered.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground shadow hover:bg-background/90"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
