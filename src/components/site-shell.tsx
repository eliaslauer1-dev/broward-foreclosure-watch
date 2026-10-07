import { Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "Foreclosures", to: "/foreclosures" as const },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Broward Foreclosure Watch home">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Building2 aria-hidden="true" className="size-4" />
            </span>
            <span className="truncate text-sm font-bold uppercase tracking-[0.08em] sm:text-base">
              Broward Foreclosure Watch
            </span>
          </Link>

          <nav aria-label="Main navigation" className="ml-4 flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                activeProps={{ className: "bg-accent text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center px-5 py-6 sm:px-8">
          <p className="text-sm text-muted-foreground">
            Data from public county records. Not financial or legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}