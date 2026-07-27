import {
  highlights,
  pillars,
  profile,
  projects,
  stackGroups,
  timeline,
} from "./portfolio-data";

const cvHref = "/cv-jerome-villiseck-2026.pdf";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#accueil" aria-label="Retour à l'accueil">
            <span className="brand-mark" aria-hidden="true">
              JV
            </span>
            <span>{profile.name}</span>
          </a>

          <nav aria-label="Navigation principale">
            <a href="#realisations">Réalisations</a>
            <a href="#stack">Stack</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cv" href={cvHref} download>
            Télécharger le CV
          </a>
        </div>
      </header>

      <main id="contenu">
        <section className="hero section-shell" id="accueil">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Montpellier · Ouvert aux échanges
            </div>

            <p className="hero-role">{profile.title}</p>
            <h1>
              Je développe.
              <span>Je maintiens.</span>
              Je fais avancer.
            </h1>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#realisations">
                Voir mes réalisations
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-secondary" href={cvHref} download>
                Mon CV en PDF
              </a>
            </div>

            <p className="hero-note">
              Java · Spring Boot · Vue.js · PostgreSQL · Docker
            </p>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/jerome-villiseck.jpg"
                alt="Portrait de Jérôme Villiseck"
                width={720}
                height={900}
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-caption">
                <span>6 ans</span>
                <p>à relier le code, la production et les besoins métier.</p>
              </div>
            </div>
            <div className="visual-stamp" aria-hidden="true">
              <span>DEV</span>
              <span>RUN</span>
              <span>LEAD</span>
            </div>
          </div>
        </section>

        <section className="highlights section-shell" aria-label="Repères">
          {highlights.map((highlight, index) => (
            <article className="highlight" key={highlight.label}>
              <span className="highlight-index" aria-hidden="true">
                0{index + 1}
              </span>
              <strong>{highlight.value}</strong>
              <p>{highlight.label}</p>
            </article>
          ))}
        </section>

        <section className="section-shell section-block" id="realisations">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Services publics numériques</p>
              <h2>Des réalisations utiles, pensées pour durer.</h2>
            </div>
            <p>
              Contributions menées au sein de l’équipe de développement de
              l’Abes, en lien étroit avec les responsables fonctionnels.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span>0{index + 1}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Découvrir ${project.name} — nouvelle fenêtre`}
                  >
                    Visiter le service
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                <ul className="tag-list" aria-label={`Technologies de ${project.name}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section" id="stack">
          <div className="section-shell">
            <div className="section-heading section-heading-light">
              <div>
                <p className="section-kicker">Stack technique</p>
                <h2>Une pratique full-stack, structurée par les usages.</h2>
              </div>
              <p>
                Du back-end à l’exploitation, avec une attention constante aux
                tests, à la maintenabilité et à la compréhension du métier.
              </p>
            </div>

            <div className="stack-grid">
              {stackGroups.map((group, index) => (
                <article className="stack-card" key={group.title}>
                  <div className="stack-card-heading">
                    <span aria-hidden="true">0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-block approach">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Mon approche</p>
              <h2>Dev, Run et Lead ne sont pas trois métiers séparés.</h2>
            </div>
            <p>
              Comprendre toute la chaîne permet de prendre de meilleures
              décisions et de livrer des services plus fiables.
            </p>
          </div>

          <div className="pillars">
            {pillars.map((pillar, index) => (
              <article className="pillar" key={pillar.key}>
                <div className="pillar-number" aria-hidden="true">
                  {index + 1}
                </div>
                <p className="pillar-key">{pillar.key}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="parcours">
          <div className="section-shell journey-layout">
            <div className="journey-intro">
              <p className="section-kicker">Parcours</p>
              <h2>Une trajectoire technique nourrie par le terrain.</h2>
              <p>
                Après plusieurs expériences commerciales, j’ai choisi le
                développement logiciel et construit un profil à la croisée de
                la technique, du service et de la coopération.
              </p>
              <a className="text-link" href={cvHref} download>
                Consulter le parcours complet
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Parlons d’un projet, d’une équipe ou d’un défi technique.</h2>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <span>E-mail</span>
                <strong>{profile.email}</strong>
                <b aria-hidden="true">↗</b>
              </a>
              <a href={`tel:${profile.phoneHref}`}>
                <span>Téléphone</span>
                <strong>{profile.phoneDisplay}</strong>
                <b aria-hidden="true">↗</b>
              </a>
              <div className="contact-address">
                <span>Adresse</span>
                <strong>{profile.address}</strong>
              </div>
            </div>
          </div>
          <div className="section-shell privacy-note">
            Coordonnées publiées volontairement à des fins professionnelles.
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <p>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </p>
          <p>© {new Date().getFullYear()} · Montpellier</p>
        </div>
      </footer>
    </>
  );
}
