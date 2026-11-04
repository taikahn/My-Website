import { useEffect, useRef, useState } from 'react';

const pearPath = 'M0,7 C3.8,7 5.8,4.9 5.8,2.2 C5.8,-0.6 4,-1.6 3,-2.9 C2.2,-4 1.9,-5.2 0.2,-5.2 C-1.6,-5.2 -2.1,-4 -2.9,-2.9 C-3.9,-1.6 -5.8,-0.6 -5.8,2.2 C-5.8,4.9 -3.8,7 0,7 Z M0.6,-6.4 C0.7,-8.8 2.5,-10.1 4.5,-10.2 C4.4,-7.9 2.7,-6.5 0.6,-6.4 Z';

const formatClock = (date) => date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
const MIN_LEFT = 6;

export default function PearbarStudy() {
  const sceneRef = useRef(null);
  const [left, setLeft] = useState(32);
  // Plays the pearbar.app drag twice once the scene is on screen; a pointer coming in hands over early.
  const [auto, setAuto] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [handoff, setHandoff] = useState(false);
  const [clock, setClock] = useState(() => formatClock(new Date()));

  // The menu bar clock shows the visitor's real time, ticking over on the minute.
  useEffect(() => {
    let interval;
    const tick = () => setClock(formatClock(new Date()));
    const toNextMinute = setTimeout(() => { tick(); interval = setInterval(tick, 60000); }, 60000 - (Date.now() % 60000));
    return () => { clearTimeout(toNextMinute); clearInterval(interval); };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !('IntersectionObserver' in window)) { setPlaying(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setPlaying(true); observer.disconnect(); }
    }, { threshold: 0.6 });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  const takeOver = () => {
    if (!auto) return;
    const scene = sceneRef.current;
    const win = windowRef.current;
    if (scene && win) {
      // Keep the window where the loop left it: fold its animated offset into `left`.
      const offset = new DOMMatrixReadOnly(getComputedStyle(win).transform).m41;
      const max = maxLeft();
      setLeft((current) => Math.max(MIN_LEFT, Math.min(max, current + (offset / scene.getBoundingClientRect().width) * 100)));
    }
    setHandoff(true);
    setAuto(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setHandoff(false)));
  };

  const windowRef = useRef(null);
  const barRef = useRef(null);
  const coveredRef = useRef(null);
  const drag = useRef(null); // { offset, max, left } while dragging

  // Furthest right the window can go: its bar stops where the band ends, never over the clock's cutout.
  const maxLeft = () => {
    const scene = sceneRef.current;
    const covered = coveredRef.current;
    const bar = barRef.current;
    if (!scene || !covered || !bar) return 52;
    const s = scene.getBoundingClientRect();
    const bandEnd = covered.getBoundingClientRect().right - s.left + s.width * 0.006; // the band runs .6cqw past its contents
    return Math.max(MIN_LEFT, ((bandEnd - bar.offsetWidth) / s.width) * 100);
  };

  // While dragging, write the position straight to the two elements (no React render, no transition), then commit on release.
  const place = (value) => {
    const css = `${value}%`;
    if (windowRef.current) windowRef.current.style.left = css;
    if (barRef.current) barRef.current.style.left = css;
  };

  const moveWindow = (event) => {
    if (!drag.current) return;
    const bounds = sceneRef.current.getBoundingClientRect();
    const next = ((event.clientX - bounds.left - drag.current.offset) / bounds.width) * 100;
    drag.current.left = Math.max(MIN_LEFT, Math.min(drag.current.max, next));
    place(drag.current.left);
  };

  const startDragging = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const windowBounds = event.currentTarget.getBoundingClientRect();
    drag.current = { offset: event.clientX - windowBounds.left, max: maxLeft(), left: null };
    sceneRef.current?.classList.add('is-dragging');
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const stopDragging = (event) => {
    if (drag.current?.left != null) setLeft(drag.current.left);
    drag.current = null;
    sceneRef.current?.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <figure className="pear-study pearbar-reference">
      <div className={`pear-hero-scene${auto ? ' is-auto' : ''}${playing ? ' is-started' : ''}${handoff ? ' is-handoff' : ''}`} ref={sceneRef} onPointerEnter={takeOver} onPointerDown={takeOver} onAnimationEnd={(event) => { if (event.target.classList.contains('pear-hero-window')) takeOver(); }}>
        <div className="pear-hero-menubar">
          {/* Pearbar's “Hide Real App Menus” is on: a black band covers the real menus; the clock stays. */}
          <span className="pear-hero-covered" ref={coveredRef}>
            <svg viewBox="-7 -11 14 19" aria-hidden="true"><path d={pearPath} /></svg>
            <b>Notes</b><span>File</span><span>Edit</span>
          </span>
          <em>{clock}</em>
        </div>
        <div className="pear-hero-window" ref={windowRef} style={{ left: `${left}%` }} onPointerDown={startDragging} onPointerMove={moveWindow} onPointerUp={stopDragging} onPointerCancel={stopDragging}>
          <div className="pear-hero-titlebar"><i /><i /><i /><span>Notes</span></div>
          <div className="pear-hero-window-body"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="pear-hero-bar" ref={barRef} style={{ left: `${left}%` }} aria-hidden="true">
          <svg viewBox="-7 -11 14 19"><path d={pearPath} /></svg>
          <b>Notes</b><span>File</span><span>Edit</span><span>View</span>
        </div>
        <svg className="pear-hero-cursor" viewBox="0 0 12 18" aria-hidden="true"><path d="M1 1 L1 15 L4.6 11.6 L7 17 L9.4 16 L7 10.6 L12 10.6 Z" /></svg>
      </div>
      <figcaption>Drag the window. Its menus come along.</figcaption>
    </figure>
  );
}
