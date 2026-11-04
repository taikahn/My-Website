import { useEffect } from 'react';

// The rough hatch clears around the pointer (zide.dev's nav glow, inverted).
// Only the disc's transform changes per move, so it stays on the compositor; CSS eases the radius in and out.
export default function useHatchClear(hostRef, clearRef) {
  useEffect(() => {
    const host = hostRef.current;
    const clear = clearRef.current;
    if (!host || !clear || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const blob = clear.firstElementChild;
    let frame = 0;
    let point = null;
    let last = null;
    let speed = 0;
    let settle = 0;
    const apply = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      clear.style.translate = `${(point.x - rect.left).toFixed(1)}px ${(point.y - rect.top).toFixed(1)}px`;
      if (!blob || !last) { last = { ...point, t: performance.now() }; return; }
      // Stretch along the direction of travel, thinner as it speeds up, like something dragged through liquid.
      const now = performance.now();
      const dx = point.x - last.x;
      const dy = point.y - last.y;
      const dt = Math.max(now - last.t, 8);
      last = { ...point, t: now };
      speed = speed * 0.7 + (Math.hypot(dx, dy) / dt) * 0.3;
      let angle = Math.atan2(dy, dx);
      if (angle > Math.PI / 2) angle -= Math.PI;
      if (angle <= -Math.PI / 2) angle += Math.PI;
      const stretch = Math.min(1 + speed * 0.45, 1.8);
      blob.style.transform = `rotate(${angle.toFixed(3)}rad) scale(${stretch.toFixed(3)}, ${(1 / Math.sqrt(stretch)).toFixed(3)})`;
      clearTimeout(settle);
      settle = setTimeout(() => { speed = 0; blob.style.transform = ''; }, 140);
    };
    const move = (event) => {
      point = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const enter = (event) => {
      // Start the clearing where the pointer came in, not from wherever it was last.
      host.classList.add('is-placing');
      point = { x: event.clientX, y: event.clientY };
      last = null;
      apply();
      requestAnimationFrame(() => { host.classList.remove('is-placing'); host.classList.add('is-clearing'); });
    };
    const leave = () => host.classList.remove('is-clearing');
    host.addEventListener('pointerenter', enter);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      host.removeEventListener('pointerenter', enter);
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
    };
  }, [hostRef, clearRef]);
}
