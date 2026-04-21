import { useState, useEffect, useCallback } from 'react';

export default function Lightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => {
    setIndex(i);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, close, prev, next]);

  return { openAt, lightboxElement: (
    <div
      className={`lightbox${open ? ' is-open' : ''}`}
      aria-hidden={!open}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <button className="lightbox-close" type="button" aria-label="Close image viewer" onClick={close}>×</button>
      <button className="lightbox-prev" type="button" aria-label="Previous image" onClick={prev}>‹</button>
      <img
        className="lightbox-image"
        src={open ? images[index]?.src : ''}
        alt={open ? images[index]?.alt : ''}
      />
      <button className="lightbox-next" type="button" aria-label="Next image" onClick={next}>›</button>
    </div>
  )};
}
