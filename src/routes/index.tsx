import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CalendarDays, Landmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import browardAerial from "@/assets/broward-aerial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Broward Foreclosure Watch | Broward County Auction Insights" },
      {
        name: "description",
        content:
          "Track upcoming Broward County foreclosure auctions ranked by estimated equity.",
      },
      {
        property: "og:title",
        content: "Broward Foreclosure Watch | Broward County Auction Insights",
      },
      {
        property: "og:description",
        content:
          "Track upcoming Broward County foreclosure auctions ranked by estimated equity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden">
        <img
          src={browardAerial}
          alt="Aerial view of Broward County homes, waterways, and skyline"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/75">
              <Landmark aria-hidden="true" className="size-4" />
              Broward County, Florida
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              Broward Foreclosure Watch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85 sm:text-xl">
              Track upcoming Broward County foreclosure auctions, ranked by estimated equity—so
              you can focus your research where the opportunity may be strongest.
            </p>
            <Button asChild size="lg" className="mt-9 h-12 px-6 text-base shadow-lg">
              <Link to="/foreclosures">
                View this week&apos;s auctions
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
              A clearer starting point
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
              Public auction records, organized for faster review.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-primary pl-5">
              <CalendarDays aria-hidden="true" className="size-5 text-primary" />
              <h3 className="mt-4 font-bold">Upcoming auctions</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Keep the week&apos;s scheduled Broward County sales in view.
              </p>
            </div>
            <div className="border-l-2 border-accent-foreground pl-5">
              <BarChart3 aria-hidden="true" className="size-5 text-accent-foreground" />
              <h3 className="mt-4 font-bold">Equity-ranked research</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Start with properties showing the strongest estimated equity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
