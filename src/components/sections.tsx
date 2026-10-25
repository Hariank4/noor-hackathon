import { event, themes, rounds, prizes, rubric, eligibility, rules, steps, fees, partners, team, faqs } from "../content/content";
import { flags, links } from "../content/links";
import Countdown from "./Countdown";
import { Head, Icon, Rule, Sparkle } from "./ui";

const register = (from: string) => `/go/register?utm_content=${from}`;

export function Hero() {
  return (
    <section id="top" className="hero">
      <svg className="orbit" viewBox="0 0 1200 600" aria-hidden="true" fill="none">
        <defs>
          <linearGradient id="og" x1="0" x2="1">
            <stop offset="0" stopColor="#E2B220" stopOpacity="0" />
            <stop offset=".5" stopColor="#E2B220" stopOpacity=".7" />
            <stop offset="1" stopColor="#E2B220" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="600" cy="300" rx="560" ry="190" transform="rotate(-8 600 300)" stroke="url(#og)" strokeWidth="1.2" />
        <ellipse cx="600" cy="300" rx="480" ry="150" transform="rotate(6 600 300)" stroke="url(#og)" strokeWidth=".8" />
      </svg>
      <div className="wrap hero__in">
        <p className="eyebrow">{event.presenters} presents</p>
        <h1 className="hero__logo">
          <img src="/brand/noor-wordmark.png" width={698} height={291} alt={`${event.name}: ${event.tagline}`} fetchPriority="high" />
        </h1>
        <p className="hero__year">2K26</p>
        <p className="hero__tag">{event.tagline}</p>
        <Rule />
        <p className="hero__fact">{event.format}</p>
        <p className="hero__dates">{event.dates}</p>
        <p className="hero__fact">{event.venue}</p>
        <p className="hero__mode">{event.mode}</p>
        <Countdown />
        <div className="cta">
          <a className="btn--shiny" href={register("hero")}><span>Register now</span></a>
          {links.brochure ? (
            <a className="btn" href={links.brochure} target="_blank" rel="noopener noreferrer">Download brochure</a>
          ) : (
            <a className="btn" href="#register">How to register</a>
          )}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <Head eyebrow="About" title={<>Think boldly. Build creatively. <em>Illuminate the future.</em></>} />
        <div className="about">
          <p className="lead">{event.description}</p>
          <div>
            {event.about.map((t) => <p key={t}>{t}</p>)}
            <ul className="chips" aria-label="Who Noor is for">
              {event.audience.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Themes() {
  return (
    <section id="themes" className="sec">
      <div className="wrap">
        <Head eyebrow="Challenge themes" title="Seven skies. Pick yours." />
        <ul className="themes">
          {themes.map((t) => (
            <li key={t.name}>
              <Icon name={t.icon} />
              <div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Rounds() {
  return (
    <section id="rounds" className="sec">
      <div className="wrap">
        <Head eyebrow="Competition format" title="Two rounds. One night sky." />
        <ol className="rounds">
          {rounds.map((r) => (
            <li key={r.n}>
              <span className="rounds__n">{r.n}</span>
              <h3>{r.name}</h3>
              <p className="rounds__date">{r.date}</p>
            </li>
          ))}
        </ol>
        <p className="note">
          Teams should be ready to explain their ideas, demonstrate their approach and answer questions from the evaluation panel.
          Time slots, submission steps and the round-wise process will be announced by the organisers through official channels.
        </p>
      </div>
    </section>
  );
}

export function Prizes() {
  return (
    <section id="prizes" className="sec">
      <div className="wrap">
        <Head eyebrow="Prizes" title="What shines at the end" />
        <ul className="prizes">
          {prizes.map((p, i) => (
            <li key={p.rank} className={i === 0 ? "is-top" : undefined}>
              <span className="prizes__rank">{p.rank}</span>
              <span className="prizes__amt">{p.amount}</span>
              {p.perk && <span className="prizes__perk">+ {p.perk}</span>}
              {p.note && <span className="prizes__perk">{p.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Rubric() {
  return (
    <section id="rubric" className="sec">
      <div className="wrap">
        <Head eyebrow="Judging criteria" title="How projects are judged" />
        <ol className="rubric">
          {rubric.map((r, i) => (
            <li key={r}>
              <span className="rubric__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r}</h3>
            </li>
          ))}
        </ol>
        <p className="note">The detailed evaluation rubric and scoring weightage will be communicated by the organisers.</p>
      </div>
    </section>
  );
}

export function Rules() {
  return (
    <section id="rules" className="sec">
      <div className="wrap">
        <Head eyebrow="Eligibility & rules" title="The ground rules" />
        <div className="rules">
          <div className="rules__elig">
            <p className="rules__size">{event.teamSize}</p>
            <p className="eyebrow">per team</p>
            <ul>{eligibility.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
          <ol className="rules__list">{rules.map((r) => <li key={r}>{r}</li>)}</ol>
        </div>
      </div>
    </section>
  );
}

export function Register({ qr }: { qr: string | null }) {
  return (
    <section id="register" className="sec">
      <div className="wrap">
        <Head eyebrow="Registration" title="Be the Noor. Register your team." />
        {flags.showFees && (
          <div className="fees">
            <div className="fees__card">
              <p className="eyebrow">Early bird · until {fees.early.until}</p>
              <p className="fees__amt">{fees.early.amount} <span>per team</span></p>
              <p>Use code <strong className="code">{fees.early.code}</strong></p>
            </div>
            <div className="fees__card">
              <p className="eyebrow">Regular · {fees.regular.range}</p>
              <p className="fees__amt">{fees.regular.amount} <span>per team</span></p>
              <p>Charged per team, not per participant.</p>
            </div>
          </div>
        )}
        <div className="reg">
          <ol className="steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <aside className="reg__side">
            <a className="btn--shiny" href={register("how")}><span>Register now</span></a>
            {qr && (
              <figure className="qr">
                <img src={qr} width={180} height={180} alt="QR code that opens the official registration form" />
                <figcaption>Scan to register</figcaption>
              </figure>
            )}
            <p className="note">
              Registration is complete only after the required information and payment details are submitted as instructed.
              Register only through the official registration link on this site.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Venue() {
  const q = encodeURIComponent(links.mapQuery);
  return (
    <section id="venue" className="sec">
      <div className="wrap">
        <Head eyebrow="Venue & brochure" title="Find your way to Noor" />
        <div className="venue">
          <div>
            <p className="lead">{event.venue}</p>
            <p>{event.dates} · {event.mode}</p>
            <div className="cta cta--left">
              <a className="btn" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              {links.brochure ? (
                <a className="btn btn--gold" href={links.brochure} target="_blank" rel="noopener noreferrer">Download brochure</a>
              ) : (
                <span className="btn btn--off" aria-disabled="true">Brochure coming soon</span>
              )}
            </div>
          </div>
          <iframe
            className="venue__map"
            title="Map showing Manav Rachna University, Faridabad"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="sec">
      <div className="wrap">
        <Head eyebrow="In association with" title="Partners & supporters" />
        <ul className="partners">
          {partners.map((p) => (
            <li key={p.name}>
              {p.logo ? <img src={p.logo} alt={p.name} height={56} loading="lazy" /> : <span>{p.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  if (!flags.showFaq) return null;
  return (
    <section id="faq" className="sec">
      <div className="wrap wrap--narrow">
        <Head eyebrow="FAQ" title="Questions, answered" />
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="sec">
      <div className="wrap">
        <Head eyebrow="Organising team" title="The people behind Noor" />
        <ul className="team">
          {team.map((t) => (
            <li key={t.name}>
              <Sparkle />
              <span className="team__name">{t.name}</span>
              <span className="team__role">{t.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="sec sec--last">
      <div className="wrap">
        <Head eyebrow="Contact" title="Bring your ideas. Form your team." />
        <ul className="contact">
          <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
          <li><a href={`tel:+91${links.phone}`}>{links.phone}</a></li>
          <li><a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram @noorhackathon</a></li>
          {links.linkedin && <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn · Noor Hackathon</a></li>}
          {flags.showWhatsApp && <li><a href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp group</a></li>}
        </ul>
        <p className="closing">{event.closing}</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p>© 2026 {event.name}</p>
        <p>Register only through the official registration link on this site.</p>
        <a href="/privacy">Privacy</a>
        <p className="foot__credit">
          <span>
            Made by <a href={links.authorSite} target="_blank" rel="noopener noreferrer">Hariank Juneja</a>
            {" · "}<a href={links.authorLinkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
