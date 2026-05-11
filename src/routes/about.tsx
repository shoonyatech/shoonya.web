import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shoonya Technologies" },
      { name: "description", content: "Shoonya Technologies Ltd. is a Canadian software development and consultancy firm helping businesses thrive in the digital age." },
      { property: "og:title", content: "About Shoonya Technologies" },
      { property: "og:description", content: "Founded on innovation and excellence — a Canadian software consultancy." },
    ],
  }),
  component: AboutPage,
});

const REASONS = [
  "Proven track record of delivering high-quality solutions on time and within budget",
  "Deep technical expertise across multiple platforms and technologies",
  "Agile development methodology ensuring flexibility and rapid iteration",
  "Dedicated support and maintenance to ensure your systems run smoothly",
  "Transparent communication and collaborative approach throughout the project",
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">About Shoonya Technologies</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Founded on the principles of innovation and excellence, Shoonya Technologies Ltd. is a
          premier software development and consultancy firm dedicated to helping businesses thrive
          in the digital age.
        </p>
      </div>

      <div className="mt-10 space-y-5 text-muted-foreground">
        <p>
          Our team of experienced developers and consultants brings deep technical expertise across
          a wide range of technologies, from enterprise .NET applications to modern web frameworks.
          We understand that every business is unique, which is why we take a tailored approach to
          every project.
        </p>
        <p>
          Whether you're a startup looking to build your MVP or an enterprise seeking to modernize
          your legacy systems, we have the expertise and experience to deliver solutions that
          exceed expectations.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-border/60 bg-card p-8 md:grid-cols-4">
        {[
          ["7+", "Years in business"],
          ["20+", "Senior engineers across Canada"],
          ["1 week", "From kickoff to working demo"],
          ["100%", "Code & IP yours to keep"],
        ].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="text-3xl font-bold text-primary">{n}</div>
            <div className="mt-1 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <ul className="mt-6 space-y-3">
          {REASONS.map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-muted-foreground">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
