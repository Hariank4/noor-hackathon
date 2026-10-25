import { partners } from "../content/content";

// Pure-CSS marquee: four copies, animated by -50%, so the loop is seamless on wide screens.
// Copies after the first set are aria-hidden with empty alt text.
export default function SponsorStrip() {
  const copies = [0, 1, 2, 3];
  return (
    <section className="strip" aria-label="Event partners">
      <span className="strip__label">In association with</span>
      <div className="strip__view">
        <ul className="strip__track">
          {copies.flatMap((c) =>
            partners.map((p) => (
              <li key={`${c}-${p.name}`} className="strip__item" aria-hidden={c > 0 || undefined}>
                {p.logo ? (
                  <img src={p.logo} alt={c > 0 ? "" : p.name} height={40} />
                ) : (
                  <span className="strip__text">{p.name}</span>
                )}
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
