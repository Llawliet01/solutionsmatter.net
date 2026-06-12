'use client';
import { useRef, useEffect, useState } from 'react';
import {
  Search, Layers, Code2, ShieldCheck, Rocket,
  Settings, Database, Globe, Zap, ClipboardList
} from 'lucide-react';

const STEP_ICONS = [Search, Layers, Code2, ShieldCheck, Rocket, Settings, Database, Globe, Zap, ClipboardList];

// Card dimensions (px) — must match CSS
const CARD_W = 480;
const CARD_GAP = 28;

export default function ProcessHorizontalScroll({ steps }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const n = steps.length;

  // Calculate the correct maxTranslate purely from geometry
  // This matches the CSS: padding-left: max(24px, calc((100vw - 1200px) / 2 + 24px))
  const calcMaxTranslate = () => {
    const vw = window.innerWidth;
    const paddingLeft = Math.max(24, (vw - 1200) / 2 + 24);
    // Total width of all cards + gaps laid out in the track
    const totalCardsWidth = n * CARD_W + (n - 1) * CARD_GAP;
    // The track's content right edge in viewport coordinates (no transform)
    const trackRightEdge = paddingLeft + totalCardsWidth;
    // How much we need to translate left to bring last card's right edge to viewport right edge
    return Math.max(0, trackRightEdge - vw);
  };

  // Start at 0 so SSR and client initial render produce identical HTML (no hydration mismatch)
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    // Apply the real value after mount — runs only on client, after hydration
    setMaxTranslate(calcMaxTranslate());

    const handleResize = () => setMaxTranslate(calcMaxTranslate());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollRange = outer.offsetHeight - window.innerHeight;
      if (scrollRange <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [maxTranslate]);

  return (
    <div
      ref={outerRef}
      className="process-hscroll-outer"
      style={{ height: `calc(100vh + ${maxTranslate}px)` }}
    >
      <div className="process-hscroll-sticky">
        {/* Section Header */}
        <div className="process-hscroll-header">
          <span className="process-hscroll-tag">Workflow</span>
          <h3 className="process-steps-section-title">Our Easy Working Process</h3>
          <p className="process-steps-intro-text">
            How we coordinate deliverables and verify requirements through our Agile workflow sprints.
          </p>
        </div>

        {/* Scrolling Cards Track */}
        <div className="process-hscroll-viewport">
          <div ref={trackRef} className="process-hscroll-track">
            {steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              const stepNum = step.step || String(idx + 1).padStart(2, '0');
              return (
                <div key={idx} className="process-hscroll-card">
                  {/* Top row: icon + watermark number */}
                  <div className="phsc-top-row">
                    <div className="phsc-icon-box">
                      <Icon size={32} />
                    </div>
                    <span className="phsc-watermark">{stepNum}</span>
                  </div>

                  {/* Phase label */}
                  <span className="phsc-phase-label">PHASE {stepNum}</span>

                  {/* Title */}
                  <h4 className="phsc-title">{step.name}</h4>

                  {/* Description */}
                  <p className="phsc-desc">{step.desc}</p>

                  {/* Bottom accent line */}
                  <div className="phsc-accent-bar" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="process-hscroll-progress-hint">
          <span />
          <p>scroll to explore</p>
        </div>
      </div>
    </div>
  );
}
