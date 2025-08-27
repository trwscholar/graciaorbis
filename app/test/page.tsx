'use client';
import React from 'react';
import { FlickeringGrid } from '@/components/ui/flickering-grid-hero';

export default function TestPage() {
  const LOGO_MASK_STYLE: React.CSSProperties = {
    WebkitMaskImage: `url('/gracialogo.png')`,
    WebkitMaskSize: '65vw',   // tweak as needed
    WebkitMaskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat',
    maskImage: `url('/gracialogo.png')`,
    maskSize: '105vw',
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
  };

  // Clip areas
  const LEFT_G_CLIP: React.CSSProperties = { clipPath: 'inset(0 50% 0 0)' };
  const RIGHT_O_CLIP: React.CSSProperties = { clipPath: 'inset(0 0 0 50%)' };

  // Arrow polygon — tightened so it fully covers the inside of the O
  const ARROW_CLIP: React.CSSProperties = {
    clipPath:
      'polygon(60% 38%, 60% 62%, 72% 62%, 72% 70%, 94% 50%, 72% 30%, 72% 38%)',
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Base faint grey dots so background isn’t empty */}
      <FlickeringGrid
        className="absolute inset-0 opacity-20"
        color="rgb(148,163,184)"   // slate-400
        maxOpacity={0.08}
        flickerChance={0.08}
        squareSize={3}
        gridGap={5}
      />

      {/* RIGHT O (black ring) */}
      <div className="absolute inset-0 opacity-90" style={{ ...LOGO_MASK_STYLE, ...RIGHT_O_CLIP }}>
        <FlickeringGrid
          color="rgb(0,0,0)"
          maxOpacity={0.65}
          flickerChance={0.16}
          squareSize={4}
          gridGap={3}
        />
      </div>

      {/* ARROW (orange) */}
      <div className="absolute inset-0 opacity-95" style={{ ...LOGO_MASK_STYLE, ...ARROW_CLIP }}>
        <FlickeringGrid
          color="rgb(251,146,80)"   // brand orange 500
          maxOpacity={0.85}
          flickerChance={0.24}
          squareSize={4}
          gridGap={3}
        />
      </div>

      {/* LEFT G (orange) */}
      <div className="absolute inset-0 opacity-90" style={{ ...LOGO_MASK_STYLE, ...LEFT_G_CLIP }}>
        <FlickeringGrid
          color="rgb(251,146,80)"
          maxOpacity={0.75}
          flickerChance={0.2}
          squareSize={4}
          gridGap={3}
        />
      </div>
    </main>
  );
}
