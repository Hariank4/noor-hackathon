import type { ReactNode } from "react";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 0c.8 7.2 4.8 11.2 12 12-7.2.8-11.2 4.8-12 12-.8-7.2-4.8-11.2-12-12 7.2-.8 11.2-4.8 12-12Z" />
    </svg>
  );
}

export function Rule() {
  return (
    <div className="rule" aria-hidden="true">
      <Sparkle />
    </div>
  );
}

export function Head({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <header className="head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <Rule />
    </header>
  );
}

const icons: Record<string, ReactNode> = {
  leaf: <><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19c3-5 6-8 10-10" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><rect x="9.5" y="11" width="5" height="4" rx=".5" /><path d="M10.5 11V9.5a1.5 1.5 0 013 0V11" /></>,
  venus: <><circle cx="12" cy="9" r="5" /><path d="M12 14v8M9 18h6" /></>,
  heart: <><path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z" /><path d="M6 11h3l1.5-2.5 2 4 1.5-1.5H18" /></>,
  city: <><path d="M4 21V9h6v12M10 21V4h6v17M16 21V11h4v10" /><path d="M6.5 12h1M6.5 15h1M12.5 7h1M12.5 10h1M12.5 13h1M12.5 16h1" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="6.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /></>,
};

export function Icon({ name }: { name: string }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}
