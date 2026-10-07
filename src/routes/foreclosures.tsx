import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/foreclosures")({
  head: () => ({
    meta: [
      { title: "Foreclosures | Broward Foreclosure Watch" },
      {
        name: "description",
        content:
          "Upcoming Broward County foreclosure auctions ranked by estimated equity.",
      },
      { property: "og:title", content: "Foreclosures | Broward Foreclosure Watch" },
      {
        property: "og:description",
        content:
          "Upcoming Broward County foreclosure auctions ranked by estimated equity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForeclosuresPage,
});

function ForeclosuresPage() {
  return (
    <section className="bg-background">
      <iframe
        src="/foreclosure-watch.html"
        title="Broward foreclosure auction dashboard"
        className="block w-full border-0"
        style={{ height: "calc(100svh - 4rem)", minHeight: "640px" }}
      />
    </section>
  );
}
