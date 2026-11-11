import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="mono">404</p>
      <h1>pagina non trovata</h1>
      <Link href="/" className="publisher-link mono">Torna alla home</Link>
    </section>
  );
}
