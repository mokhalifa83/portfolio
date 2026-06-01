import { useEffect, useRef } from 'react';

function Cursor() {
  const cursorRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const isInteractive = (el) => {
      if (!el || !el.tagName) return false;
      const tag = el.tagName.toLowerCase();
      if (['a', 'button', 'input', 'textarea', 'select'].includes(tag)) return true;
      if (el.getAttribute('role') === 'button') return true;
      if (el.getAttribute('onclick')) return true;
      return false;
    };

    const move = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const overInteractive = isInteractive(el);

      if (overInteractive !== hoverRef.current) {
        hoverRef.current = overInteractive;
        if (cursorRef.current) {
          cursorRef.current.style.transform = overInteractive
            ? `translate(${e.clientX}px, ${e.clientY}px) scale(2.5)`
            : `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
          return;
        }
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = overInteractive
          ? `translate(${e.clientX}px, ${e.clientY}px) scale(2.5)`
          : `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
      }
    };

    const down = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(2.5)', 'scale(2)').replace('scale(1)', 'scale(0.6)');
      }
    };
    const up = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(2)', 'scale(2.5)').replace('scale(0.6)', 'scale(1)');
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 99999,
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: '#F5C518',
        transform: 'translate(-100px, -100px) scale(1)',
        transition: 'transform 0.12s ease-out, scale 0.2s ease',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  );
}

export default Cursor;
