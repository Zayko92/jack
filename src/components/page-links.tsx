import Link from "next/link";
import { ArrowRight } from "./icons";

const pages = [
  { href: "/", title: "home" },
  { href: "/libri", title: "libri" },
  { href: "/articoli", title: "articoli e reportage" },
];

export function PageLinks({ current }: { current: string }) {
  return (
    <nav className="page-links" aria-label="Esplora il sito">
      <div className="container page-links-inner">
        {pages.filter(({ href }) => href !== current).map(({ href, title }) => (
          <Link key={href} href={href} className="page-link">
            <span className="link-label">{title}</span><ArrowRight />
          </Link>
        ))}
      </div>
    </nav>
  );
}
