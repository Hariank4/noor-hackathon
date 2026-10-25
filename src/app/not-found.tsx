import Link from "next/link";

export default function NotFound() {
  return (
    <main className="sec">
      <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 className="head"><span style={{ font: "300 clamp(2rem,6vw,3.6rem) var(--display)" }}>This star isn&apos;t on the map.</span></h1>
        <Link className="btn btn--gold" href="/">Back to Noor</Link>
      </div>
    </main>
  );
}
