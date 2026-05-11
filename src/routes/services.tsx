import { createFileRoute } from "@tanstack/react-router";
import { Code2, Compass, Database, Smartphone, Cloud, GitBranch } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shoonya Technologies" },
      { name: "description", content: "Custom software development, technology consulting, database, mobile, cloud, and DevOps services." },
      { property: "og:title", content: "Our Services — Shoonya Technologies" },
      { property: "og:description", content: "Comprehensive software solutions designed to propel your business forward." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Bespoke software solutions tailored to your unique business requirements. From web applications to enterprise systems, we build scalable and maintainable software.",
    tags: [".NET", "C#", "React"],
  },
  {
    icon: Compass,
    title: "Technology Consulting",
    desc: "Strategic technology guidance to help you make informed decisions. We assess your current infrastructure and recommend optimal solutions for growth.",
    tags: ["Architecture", "Cloud"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    desc: "Robust database design, optimization, and management. We ensure your data is secure, accessible, and performs at peak efficiency.",
    tags: ["SQL Server", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    tags: ["React Native", "Flutter"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud migration, deployment, and optimization services. We help you leverage the power of cloud computing for scalability and cost-efficiency.",
    tags: ["Azure", "AWS"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Streamline your development and deployment processes with automated pipelines, continuous integration, and deployment best practices.",
    tags: ["Docker", "Kubernetes"],
  },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive software solutions designed to propel your business into the digital future.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc, tags }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
