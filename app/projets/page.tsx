export default function Projets() {
  return (
    <>
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
                title: "Animania-Blog",
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
    </>
  );
}
