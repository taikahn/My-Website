import { useRef, useState } from 'react';

const pearPath = 'M0,7 C3.8,7 5.8,4.9 5.8,2.2 C5.8,-0.6 4,-1.6 3,-2.9 C2.2,-4 1.9,-5.2 0.2,-5.2 C-1.6,-5.2 -2.1,-4 -2.9,-2.9 C-3.9,-1.6 -5.8,-0.6 -5.8,2.2 C-5.8,4.9 -3.8,7 0,7 Z M0.6,-6.4 C0.7,-8.8 2.5,-10.1 4.5,-10.2 C4.4,-7.9 2.7,-6.5 0.6,-6.4 Z';

export default function PearbarStudy() {
  const sceneRef = useRef(null);
  const [left, setLeft] = useState(32);

  const dragOffsetRef = useRef(0);
  const draggingRef = useRef(false);

  const moveWindow = (event) => {
    if (!draggingRef.current) return;
    const scene = sceneRef.current;
    if (!scene) return;
    const bounds = scene.getBoundingClientRect();
    const next = ((event.clientX - bounds.left - dragOffsetRef.current) / bounds.width) * 100;
    setLeft(Math.max(6, Math.min(52, next)));
  };

  const startDragging = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const windowBounds = event.currentTarget.getBoundingClientRect();
    dragOffsetRef.current = event.clientX - windowBounds.left;
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const stopDragging = (event) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <figure className="pear-study pearbar-reference">
      <div className="pear-hero-scene" ref={sceneRef}>
        <div className="pear-hero-menubar">
          <svg viewBox="-7 -11 14 19" aria-hidden="true"><path d={pearPath} /></svg>
          <b>Notes</b><span>File</span><span>Edit</span><em>9:41</em>
        </div>
        <div className="pear-hero-window" style={{ left: `${left}%` }} onPointerDown={startDragging} onPointerMove={moveWindow} onPointerUp={stopDragging} onPointerCancel={stopDragging}>
          <div className="pear-hero-titlebar"><i /><i /><i /><span>Notes</span></div>
          <div className="pear-hero-window-body"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="pear-hero-bar" style={{ left: `${left}%` }} aria-hidden="true">
          <svg viewBox="-7 -11 14 19"><path d={pearPath} /></svg>
          <b>Notes</b><span>File</span><span>Edit</span><span>View</span>
        </div>
        <svg className="pear-hero-cursor" viewBox="0 0 12 18" aria-hidden="true"><path d="M1 1 L1 15 L4.6 11.6 L7 17 L9.4 16 L7 10.6 L12 10.6 Z" /></svg>
      </div>
      <figcaption>Drag the window. Its menus come along.</figcaption>
    </figure>
  );
}
