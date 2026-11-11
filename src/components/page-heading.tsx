import type { ReactNode } from "react";

export function PageHeading({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <section className={`page-heading ${className}`}>
      <div className="container">
        <p className="eyebrow mono">{label}</p>
        <h1>{children}</h1>
      </div>
    </section>
  );
}
