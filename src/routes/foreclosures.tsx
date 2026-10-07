import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Clock3 } from "lucide-react";

export const Route = createFileRoute("/foreclosures")({
  head: () => ({
    meta: [
      { title: "Foreclosures | Broward Foreclosure Watch" },
      {
        name: "description",
        content: "Broward County foreclosure auction dashboard, coming soon.",
      },
      { property: "og:title", content: "Foreclosures | Broward Foreclosure Watch" },
      {
        property: "og:description",
        content: "Broward County foreclosure auction dashboard, coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForeclosuresPage,
});

function ForeclosuresPage() {
  return (
    <section className="min-h-[calc(100svh-9rem)] bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
            <Clock3 aria-hidden="true" className="size-4" />
            Coming soon
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">Foreclosure auctions</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The Broward County auction dashboard is being prepared. Soon, this page will organize
            upcoming sales by estimated equity for faster investor research.
          </p>
        </div>

        <div className="mt-14 grid min-h-72 place-items-center border border-dashed border-border bg-secondary/50 p-8 text-center">
          <div>
            <span className="mx-auto flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BarChart3 aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-5 text-xl font-bold">Auction dashboard</h2>
            <p className="mt-2 text-sm text-muted-foreground">Property data will appear here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}