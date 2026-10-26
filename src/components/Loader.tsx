"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { event } from "../content/content";

// Loaded only after mount, so the three.js bundle never blocks first paint of the page underneath.
const MilkyWay = dynamic(() => import("./MilkyWay"), { ssr: false });

const SEEN = "noor-intro-seen";
const HOLD_MS = 2200; // how long the galaxy stays once it is visible
const MAX_MS = 4000; // give up waiting for WebGL
const FADE_MS = 900; // keep in sync with .loader transition in globals.css

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const giveUp = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Marked seen on exit, not on entry: React strict mode runs the mount effect twice in dev.
  const leave = () => {
    setLeaving(true);
    try { sessionStorage.setItem(SEEN, "1"); } catch {}
  };

  useEffect(() => {
    // Few CPU threads usually means a low-end GPU too: skip the WebGL intro there.
    let skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.hardwareConcurrency < 4;
    try {
      skip ||= sessionStorage.getItem(SEEN) === "1";
    } catch {}
    if (skip) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- storage/media checks only exist on the client
      setGone(true);
      return;
    }
    setMounted(true);
    giveUp.current = setTimeout(leave, MAX_MS);
    return () => clearTimeout(giveUp.current);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setGone(true), FADE_MS);
    return () => clearTimeout(t);
  }, [leaving]);

  if (gone) return null;

  return (
    <div className={leaving ? "loader is-leaving" : "loader"}>
      {mounted && (
        <div className="loader__sky">
          <MilkyWay
            backgroundColor="#050505"
            coreColor="#fff4dc"
            accentColor="#E2B220"
            outerColor="#b9780a"
            particleSize={0.6}
            rotationSpeed={0.35}
            onReady={() => {
              clearTimeout(giveUp.current); // it rendered: let the intro play out
              setTimeout(leave, HOLD_MS);
            }}
            onSlow={leave}
          />
        </div>
      )}
      <div className="loader__text">
        <p className="eyebrow">{event.presenters} presents</p>
        <p className="loader__name">Noor <em>2K26</em></p>
        <p className="loader__tag">{event.tagline}</p>
      </div>
      <button type="button" className="loader__skip" onClick={leave}>Skip intro</button>
    </div>
  );
}
