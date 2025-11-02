import Image from "next/image";
import photoIA from "../public/";

export default function Home() {
  return (
    <main id="accueil" className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-[1.1fr,0.9fr] items-center gap-10">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-beige-100 px-3 py-1 text-xs tracking-wide text-brown border border-beige">
              Développeuse Web
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-coffee">
              Bonjour, je suis{" "}
              <span className="text-brown-strong">Keliane Kossa</span>
            </h1>
            <p className="text-base sm:text-lg text-coffee/80 max-w-prose">
              Je crée des applications web modernes, performantes et
              accessibles. Passionné·e par l'UX, la qualité du code et les
              détails pixel-perfect.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projets" className="btn-coffee">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-ghost">
                Me contacter
              </a>
            </div>
          </div>
          <div className="relative mx-auto sm:mx-0 w-48 h-48 sm:w-56 sm:h-56">
            <Image
              src={photoIA}
              alt="Keliane Kossa"
              fill
              sizes="(min-width: 640px) 14rem, 12rem"
              className="rounded-full object-cover border border-beige shadow-sm"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projets */}
      <section
        id="projets"
        className="py-16 sm:py-20 bg-sand-100 rounded-3xl border border-beige"
      >
        <div className="px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-coffee">
            Projets sélectionnés
          </h2>
          <p className="mt-2 text-coffee/75 max-w-prose">
            Quelques réalisations récentes. Remplacez les descriptions par vos
            propres projets.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dashboard Analytics",
                desc: "Next.js + Chart.js, design minimal et performances optimisées.",
                tags: ["Next.js", "TypeScript", "Charts"],
              },
              {
                title: "E‑commerce Headless",
                desc: "Intégration API, panier persistant et paiement sécurisé.",
                tags: ["React", "Headless", "Stripe"],
              },
              {
                title: "Design System",
                desc: "Bibliothèque de composants accessible et themable.",
                tags: ["UI", "Storybook", "A11y"],
              },
            ].map((p, i) => (
              <article
                key={i}
                className="group rounded-2xl bg-white/70 dark:bg-[color:var(--beige-50)]/60 border border-beige p-5 hover:shadow-sm transition-shadow"
              >
                <div className="aspect-[16/9] w-full rounded-xl bg-beige-50 border border-beige mb-4 grid place-items-center text-xs text-brown/70">
                  Aperçu
                </div>
                <h3 className="text-lg font-semibold text-coffee group-hover:text-brown-strong">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-coffee/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-full border border-beige bg-beige-100 px-2 py-1 text-brown"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="a-propos" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-coffee">
              À propos
            </h2>
            <p className="text-coffee/80">
              Avec plusieurs années d'expérience en développement front‑end et
              back‑end, j'aime transformer des idées en produits robustes. Je
              collabore avec des designers, PM et autres développeurs pour
              livrer des solutions élégantes et maintenables.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-coffee/80">
              <li>• Next.js / React</li>
              <li>• TypeScript</li>
              <li>• Node.js</li>
              <li>• Design System</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-beige bg-sand-100 p-6">
            <h3 className="text-brown-strong font-semibold">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-coffee/80">
              <li>— Développement d'applications web</li>
              <li>— Intégration d'API et optimisation des performances</li>
              <li>— Accessibilité et bonnes pratiques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="rounded-3xl border border-brown bg-beige-50 p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-coffee">
            Travaillons ensemble
          </h2>
          <p className="mt-2 text-coffee/80">
            Disponible pour de nouvelles opportunités, missions et
            collaborations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a className="btn-coffee" href="mailto:votre.email@example.com">
              votre.email@example.com
            </a>
            <a
              className="btn-ghost"
              href="https://github.com/votre-github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn-ghost"
              href="https://www.linkedin.com/in/votre-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
