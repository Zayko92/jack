import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { PageLinks } from "@/components/page-links";
import { ArrowUpRight } from "@/components/icons";
import content from "@/content/site.json";

export const metadata: Metadata = {
  title: "Articoli e reportage",
  description: "Reportage, analisi, recensioni e approfondimenti di Gioacchino Orlando: ultimi lavori e archivio degli articoli.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeading label="scritture" className="articles-heading">articoli<br />e reportage</PageHeading>
      <section className="articles-section" aria-label="Articoli e reportage">
        <div className="container editorial-grid">
          <div><p className="section-label articles-label mono">testate nazionali · tradotti all’estero</p></div>
          <div className="editorial-content reading-panel">
            <p className="articles-intro">Miei reportage, analisi, recensioni e approfondimenti sono pubblicati su testate nazionali, alcuni tradotti all&apos;estero.</p>
            <div className="article-resources">
              {content.articles.map((article, index) => (
                <div className="article-resource" key={article.url}>
                  <h2 className="resource-label mono">{String(index + 1).padStart(2, "0")} · {article.label}</h2>
                  <p>{article.text}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="resource-link"><span className="link-label">{article.display}</span><ArrowUpRight /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageLinks current="/articoli" />
    </>
  );
}
