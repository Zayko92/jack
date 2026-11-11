import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { PageLinks } from "@/components/page-links";
import { Award, ArrowUpRight } from "@/components/icons";
import content from "@/content/site.json";

export const metadata: Metadata = {
  title: "Libri",
  description: "I libri di Gioacchino Orlando: No Justice No Peace e L’epidemia delle emergenze. Sinossi, pubblicazioni e link agli editori.",
};

export default function BooksPage() {
  return (
    <>
      <PageHeading label="pubblicazioni">libri</PageHeading>
      <section className="books-section" aria-label="Pubblicazioni">
        <div className="container">
          {content.books.map((book, index) => (
            <article className="book" key={book.title} aria-labelledby={`book-${index}`}>
              <div className="book-visual">
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="book-cover" aria-label={`Scopri ${book.title} su ${book.linkLabel}`}>
                  <Image src={book.cover} alt={`Copertina di ${book.title}`} fill priority={index === 0} sizes="(max-width: 767px) min(340px, calc(100vw - 48px)), 340px" />
                </a>
              </div>
              <div className="book-copy reading-panel">
                <p className="book-meta mono">{String(index + 1).padStart(2, "0")} · {book.publisher}</p>
                <h2 id={`book-${index}`}>{book.title}</h2>
                <p className="book-subtitle">{book.subtitle}</p>
                {book.prize && <p className="book-prize mono"><Award />{book.prize}</p>}
                <p className="book-description">{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="publisher-link mono"><span className="link-label">{book.linkLabel}</span><ArrowUpRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageLinks current="/libri" />
    </>
  );
}
