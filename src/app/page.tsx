import { HomeHero } from "@/components/home-hero";
import { PageLinks } from "@/components/page-links";
import content from "@/content/site.json";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="biography" id="biografia" aria-labelledby="biography-title">
        <div className="container editorial-grid">
          <div><h2 id="biography-title" className="section-label mono">biografia</h2></div>
          <div className="editorial-content biography-copy reading-panel">
            {content.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <PageLinks current="/" />
    </>
  );
}
