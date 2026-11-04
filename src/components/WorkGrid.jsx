import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { archive } from '../data/archive';

const easing = 'cubic-bezier(.2, .8, .2, 1)';

// Where an opened tile should sit: it grows from where it is, shifting left when it's in the
// last column and upward when it's in the last row, so it never jumps to a new line.
function placeFrom(grid, el) {
  const style = getComputedStyle(grid);
  const cols = style.gridTemplateColumns.split(' ').length;
  const colGap = parseFloat(style.columnGap) || 0;
  const rowGap = parseFloat(style.rowGap) || 0;
  const g = grid.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const col = Math.round((r.left - g.left) / (r.width + colGap));
  const row = Math.round((r.top - g.top) / (r.height + rowGap));
  const rows = Math.round((g.height + rowGap) / (r.height + rowGap));
  return { cols, col: Math.max(0, Math.min(col, cols - 2)), row: row >= rows - 1 ? Math.max(0, row - 1) : row };
}

// Focus grid: open a tile and it grows to 2×2 in place; the rest reflow (grid-auto-flow: dense)
// and slide to their new spots with a FLIP animation.
export default function WorkGrid() {
  const [open, setOpen] = useState(null); // { id, col, row, cols }
  const activeId = open?.id ?? null;
  const gridRef = useRef(null);
  const before = useRef(new Map());

  const tiles = () => gridRef.current?.querySelectorAll('[data-tile]') ?? [];

  // Record where every tile is, then change state; the layout effect animates from there.
  const withFlip = useCallback((update) => {
    const current = gridRef.current?.querySelectorAll('[data-tile]') ?? [];
    before.current = new Map([...current].map((el) => [el.dataset.tile, el.getBoundingClientRect()]));
    update();
  }, []);

  useLayoutEffect(() => {
    const previous = before.current;
    before.current = new Map();
    if (!previous.size || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    tiles().forEach((el) => {
      const from = previous.get(el.dataset.tile);
      if (!from) return;
      const to = el.getBoundingClientRect();
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      const sx = from.width / to.width;
      const sy = from.height / to.height;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;
      el.animate(
        [{ transformOrigin: 'top left', transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transformOrigin: 'top left', transform: 'none' }],
        { duration: 520, easing },
      );
    });
  }, [activeId]);

  // Bring the opened tile into view once it has settled.
  useEffect(() => {
    if (!activeId) return undefined;
    const timer = setTimeout(() => {
      gridRef.current?.querySelector(`[data-tile="${activeId}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 540);
    return () => clearTimeout(timer);
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') withFlip(() => setOpen(null)); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId, withFlip]);

  // The saved placement only makes sense for the column count it was measured at.
  useEffect(() => {
    if (!open) return undefined;
    const onResize = () => {
      if (gridRef.current && getComputedStyle(gridRef.current).gridTemplateColumns.split(' ').length !== open.cols) setOpen(null);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <div className="work-board">
      <ul className="work-grid" ref={gridRef}>
        {archive.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id} data-tile={item.id} className={`work-tile${active ? ' is-active' : ''}`} style={active ? { gridColumn: `${open.col + 1} / span 2`, gridRow: `${open.row + 1} / span 2` } : undefined}>
              <button type="button" className="work-tile-button" aria-expanded={active} aria-label={item.title} onClick={(event) => {
                const tile = event.currentTarget.parentElement;
                withFlip(() => setOpen(active ? null : { id: item.id, ...placeFrom(gridRef.current, tile) }));
              }}>
                <img src={`/assets/grid/${item.id}.jpg`} width="1000" height="750" alt={item.alt} loading="lazy" />
              </button>
              <div className="work-tile-caption">
                <h3>{item.title}</h3>
                {active && (
                  <div className="work-tile-detail">
                    <p>{item.note}</p>
                    {(item.to || item.href) && (
                      <div className="work-tile-links">
                        {item.to && <Link className="editorial-link" to={item.to}>Read the case study <span aria-hidden="true">→</span></Link>}
                        {item.href && <a className="editorial-link" href={item.href} target="_blank" rel="noreferrer">Visit the site <span aria-hidden="true">↗</span></a>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
