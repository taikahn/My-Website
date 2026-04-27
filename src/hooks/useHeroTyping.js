import { useEffect, useRef, useCallback } from 'react';

const LINE_DURATION = 0.42;
const LINE_GAP = 0.14;
const LINE_OFFSET = 0.11;

export default function useHeroTyping(titleText) {
  const titleRef = useRef(null);
  const baseRef = useRef(null);
  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const run = useCallback(() => {
    const title = titleRef.current;
    const base = baseRef.current;
    const overlay = overlayRef.current;
    if (!title || !base || !overlay) return;

    clearTimers();

    // Measure word positions to find line breaks
    const words = titleText.trim().split(/\s+/);
    const measure = document.createElement('span');
    measure.className = 'hero-title-measure';
    measure.setAttribute('aria-hidden', 'true');
    measure.style.width = `${base.getBoundingClientRect().width}px`;

    const wordSpans = words.map((word, i) => {
      const span = document.createElement('span');
      span.className = 'hero-title-measure-word';
      span.textContent = i === words.length - 1 ? word : `${word} `;
      measure.appendChild(span);
      return span;
    });

    title.appendChild(measure);

    const lines = [];
    let currentLine = [];
    let currentTop = null;
    let currentLineTop = null;

    wordSpans.forEach((span) => {
      const top = span.offsetTop;
      if (currentTop === null || Math.abs(top - currentTop) < 2) {
        currentLine.push(span.textContent || '');
        if (currentLineTop === null) currentLineTop = top;
        currentTop = top;
      } else {
        lines.push({ text: currentLine.join(''), top: currentLineTop });
        currentLine = [span.textContent || ''];
        currentLineTop = top;
        currentTop = top;
      }
    });
    if (currentLine.length) lines.push({ text: currentLine.join(''), top: currentLineTop });

    measure.remove();

    // Build overlay lines
    overlay.innerHTML = '';
    const totalDuration = lines.length * LINE_DURATION + Math.max(0, lines.length - 1) * LINE_GAP;
    const cursor = document.createElement('span');
    cursor.className = 'hero-title-cursor';

    lines.forEach(({ text, top }, index) => {
      const line = document.createElement('span');
      const lineInner = document.createElement('span');
      const delay = index * (LINE_DURATION + LINE_GAP);

      line.className = 'hero-title-line';
      line.style.top = `calc(${top}px + ${LINE_OFFSET}em + 2px)`;
      line.style.animationDuration = `${LINE_DURATION}s`;
      line.style.animationDelay = `${delay}s`;

      lineInner.className = 'hero-title-line-inner';
      lineInner.textContent = text.trimEnd();

      line.appendChild(lineInner);
      overlay.appendChild(line);

      timersRef.current.push(
        setTimeout(() => { cursor.remove(); lineInner.appendChild(cursor); }, delay * 1000),
        setTimeout(() => { if (cursor.parentElement === lineInner) cursor.remove(); }, (delay + LINE_DURATION) * 1000)
      );
    });

    // Trigger animation
    overlay.classList.remove('is-typing', 'is-complete');
    void overlay.offsetWidth;
    overlay.classList.add('is-typing');

    timeoutRef.current = setTimeout(() => {
      overlay.classList.remove('is-typing');
      overlay.classList.add('is-complete');
    }, totalDuration * 1000 + 80);
  }, [titleText, clearTimers]);

  useEffect(() => {
    run();
    window.addEventListener('resize', run);
    return () => {
      window.removeEventListener('resize', run);
      clearTimers();
    };
  }, [run, clearTimers]);

  return { titleRef, baseRef, overlayRef };
}
