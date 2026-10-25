"use client";
import { useState } from "react";
import { Sparkle } from "./ui";

export default function Nav({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <a href="#top" className="nav__brand" aria-label="Noor 2K26, back to top">
          <Sparkle /> <span>NOOR <em>2K26</em></span>
        </a>
        <nav aria-label="Primary" id="menu" className={open ? "nav__links is-open" : "nav__links"}>
          {items.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn--gold nav__cta" href="/go/register?utm_content=nav">Register</a>
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
