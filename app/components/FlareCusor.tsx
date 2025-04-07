'use client';

import { useState, useEffect } from 'react';

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const cursorStyle = window.getComputedStyle(target).getPropertyValue('cursor');

      setIsPointer(cursorStyle === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : 20;
  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};

  return (
    <div
      className={`flare ${isPointer ? 'pointer' : ''}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        position: 'fixed',
        borderRadius: '50%',
        background: 'rgba(0, 200, 0, 0.5)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s, background 0.3s',
        mixBlendMode: 'difference',
        zIndex: 9999,
      }}
    />
  );
}

export default FlareCursor;
