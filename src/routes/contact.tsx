import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shoonya Technologies" },
      { name: "description", content: "Reach Shoonya Technologies in Surrey, BC, Canada. Phone, email, and business hours." },
      { property: "og:title", content: "Contact Shoonya Technologies" },
      { property: "og:description", content: "Get in touch with our Canadian software consultancy." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'd love to hear about your project. Reach out anytime.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Canada Office</h2>
          <div className="mt-6 space-y-5 text-sm">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 flex-none text-primary" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-muted-foreground">
                  14-14541 Winter Crescent<br />
                  Surrey BC, V4P 0G5<br />
                  Canada
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 flex-none text-primary" />
              <div>
                <div className="font-medium">Phone</div>
                <a href="tel:+17789394992" className="text-muted-foreground hover:text-primary">
                  +1 (778) 939-4992
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 flex-none text-primary" />
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:contact@shoonya.ca" className="text-muted-foreground hover:text-primary">
                  contact@shoonya.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Business Hours</h2>
          <div className="mt-6 flex gap-3 text-sm">
            <Clock className="h-5 w-5 flex-none text-primary" />
            <div className="text-muted-foreground">
              <div>Monday – Friday</div>
              <div>9:00 AM – 6:00 PM PT</div>
              <div className="mt-3">Weekends: by appointment</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Connect</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {[
                ["LinkedIn", "https://linkedin.com/company/shoonyatech"],
                ["GitHub", "https://github.com/shoonyatech/"],
                ["Twitter", "https://www.twitter.com/shoonyatech"],
                ["Facebook", "https://www.facebook.com/shoonya.ca"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-3 py-1.5 transition hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
