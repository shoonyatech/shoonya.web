import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Shoonya Technologies" },
      { name: "description", content: "Cutting-edge technologies and industry-standard tools we work with: .NET, React, Vue, Azure, Docker, and more." },
      { property: "og:title", content: "Technical Expertise — Shoonya Technologies" },
      { property: "og:description", content: "Our toolkit spans modern frameworks, cloud, and data platforms." },
    ],
  }),
  component: ExpertisePage,
});

const TECH = [
  { icon: "⚡", name: ".NET Framework", level: "4.7.2+" },
  { icon: "💎", name: "C#", level: "Modern" },
  { icon: "⚛️", name: "React", level: "18+" },
  { icon: "🟢", name: "Vue.js", level: "2 & 3" },
  { icon: "🗄️", name: "SQL Server", level: "Enterprise" },
  { icon: "🐘", name: "PostgreSQL", level: "Advanced" },
  { icon: "☁️", name: "Azure", level: "Cloud" },
  { icon: "📦", name: "Docker", level: "Containers" },
  { icon: "🎯", name: "TypeScript", level: "Typed JS" },
  { icon: "🔧", name: "Git", level: "Version Control" },
  { icon: "🚀", name: "REST APIs", level: "Web Services" },
  { icon: "🎨", name: "Tailwind CSS", level: "Utility-First" },
];

function ExpertisePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Technical Expertise</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We work with cutting-edge technologies and industry-standard tools.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {TECH.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <div className="text-4xl">{t.icon}</div>
            <div className="mt-3 font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
