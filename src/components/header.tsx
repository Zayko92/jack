"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "home", href: "/" },
  { label: "libri", href: "/libri" },
  { label: "articoli", href: "/articoli" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark">Gioacchino Orlando</Link>
        <nav aria-label="Navigazione principale" className="main-navigation mono">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-spacer" aria-hidden="true" />
      </div>
    </header>
  );
}
