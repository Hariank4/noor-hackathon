"use client";
import { useEffect, useState } from "react";
import { event } from "../content/content";

const target = Date.parse(event.startsAt);
const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    // Set after mount (not in useState) so server and client first render match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const left = now === null ? null : Math.max(0, target - now);
  if (left === 0) return <p className="count__live">Noor is live. Let&apos;s illuminate the way.</p>;

  const s = left === null ? null : Math.floor(left / 1000);
  const cells: [string, string][] = [
    ["Days", s === null ? "--" : pad(Math.floor(s / 86400))],
    ["Hours", s === null ? "--" : pad(Math.floor((s % 86400) / 3600))],
    ["Minutes", s === null ? "--" : pad(Math.floor((s % 3600) / 60))],
    ["Seconds", s === null ? "--" : pad(s % 60)],
  ];
  return (
    <div className="count" role="timer" aria-label="Time until the event begins on 2 November 2026">
      {cells.map(([label, value]) => (
        <div key={label} className="count__cell">
          <span className="count__num">{value}</span>
          <span className="count__lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}
