/**
 * Local duotone icon library with a Phosphor-compatible API.
 * weight="duotone" renders a secondary filled layer at 20% opacity.
 */
import React from 'react';

export interface IconProps {
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  color?: string;
  className?: string;
}

type IconFC = React.FC<IconProps>;

// ── Factory ────────────────────────────────────────────────────────────────
interface Layer {
  type: 'path' | 'circle' | 'rect';
  d?: string;           // for path
  cx?: number; cy?: number; r?: number;   // for circle
  x?: number; y?: number; w?: number; h?: number; rx?: number; // for rect
  filled?: boolean;     // true = fill, false = stroke (default)
  strokeWidth?: number;
  secondary?: boolean;  // shown only in duotone weight at 20% opacity
}

function makeDuotone(layers: Layer[]): IconFC {
  return function Icon({
    size = 24,
    color = 'currentColor',
    weight = 'regular',
    className,
  }: IconProps) {
    const sw = weight === 'bold' ? 2.5 : weight === 'thin' ? 1 : 1.75;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="none"
        className={className}
        aria-hidden="true"
      >
        {layers.map((l, i) => {
          const isSecondary = l.secondary;
          if (isSecondary && weight !== 'duotone') return null;
          const opacity = isSecondary ? 0.2 : 1;
          if (l.type === 'path') {
            if (l.filled) {
              return <path key={i} d={l.d} fill={color} fillOpacity={opacity} />;
            }
            return (
              <path
                key={i}
                d={l.d}
                stroke={color}
                strokeOpacity={opacity}
                strokeWidth={l.strokeWidth ?? sw}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          }
          if (l.type === 'circle') {
            if (l.filled) {
              return <circle key={i} cx={l.cx} cy={l.cy} r={l.r} fill={color} fillOpacity={opacity} />;
            }
            return (
              <circle
                key={i}
                cx={l.cx} cy={l.cy} r={l.r}
                stroke={color}
                strokeOpacity={opacity}
                strokeWidth={l.strokeWidth ?? sw}
              />
            );
          }
          if (l.type === 'rect') {
            if (l.filled) {
              return <rect key={i} x={l.x} y={l.y} width={l.w} height={l.h} rx={l.rx ?? 0} fill={color} fillOpacity={opacity} />;
            }
            return (
              <rect
                key={i}
                x={l.x} y={l.y} width={l.w} height={l.h} rx={l.rx ?? 0}
                stroke={color}
                strokeOpacity={opacity}
                strokeWidth={l.strokeWidth ?? sw}
              />
            );
          }
          return null;
        })}
      </svg>
    );
  };
}

// ── FAB Icons ──────────────────────────────────────────────────────────────

export const ArrowUp: IconFC = makeDuotone([
  { type: 'circle', cx: 12, cy: 12, r: 9, filled: true, secondary: true },
  { type: 'path', d: 'M12 19V6' },
  { type: 'path', d: 'M6 11l6-6 6 6' },
]);

export const Sun: IconFC = makeDuotone([
  { type: 'circle', cx: 12, cy: 12, r: 5, filled: true, secondary: true },
  { type: 'circle', cx: 12, cy: 12, r: 5 },
  { type: 'path', d: 'M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' },
]);

export const Moon: IconFC = makeDuotone([
  { type: 'path', d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z', filled: true, secondary: true },
  { type: 'path', d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
]);

export const Sparkle: IconFC = makeDuotone([
  { type: 'path', d: 'M12 2l2.09 6.41L21 10l-6.91 1.59L12 18l-2.09-6.41L3 10l6.91-1.59z', filled: true, secondary: true },
  { type: 'path', d: 'M12 2l2.09 6.41L21 10l-6.91 1.59L12 18l-2.09-6.41L3 10l6.91-1.59z' },
  { type: 'path', d: 'M5 3l.6 1.8L7.4 5l-1.8.6L5 7.4l-.6-1.8L2.6 5l1.8-.6zM19 16l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6z', strokeWidth: 1 },
]);

// ── Skills Category Icons ──────────────────────────────────────────────────

export const PaintBrush: IconFC = makeDuotone([
  { type: 'path', d: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128z', filled: true, secondary: true },
  { type: 'path', d: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a16 16 0 003.39-1.62m-5.043-.025a16 16 0 011.622-3.395m3.42 3.42a16 16 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16 16 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
]);

export const Code: IconFC = makeDuotone([
  { type: 'path', d: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z', filled: true, secondary: true },
  { type: 'path', d: 'M8 9l-3 3 3 3m8-6l3 3-3 3M13 6l-2 12' },
]);

export const Blueprint: IconFC = makeDuotone([
  { type: 'path', d: 'M3 21h18M5 21V7l7-4 7 4v14', filled: true, secondary: true },
  { type: 'path', d: 'M3 21h18M5 21V7l7-4 7 4v14M10 21v-5h4v5' },
  { type: 'path', d: 'M10 9h.01M14 9h.01M10 13h.01M14 13h.01' },
]);

export const Brain: IconFC = makeDuotone([
  { type: 'path', d: 'M9.5 2a2.5 2.5 0 012.5 2.5V20a2.5 2.5 0 01-5 0V4.5A2.5 2.5 0 019.5 2zm5 0a2.5 2.5 0 012.5 2.5V20a2.5 2.5 0 01-5 0V4.5A2.5 2.5 0 0114.5 2z', filled: true, secondary: true },
  { type: 'path', d: 'M12 6a3 3 0 00-6 0v1a3 3 0 002 2.83V18a2 2 0 004 0v-8.17A3 3 0 0014 7V6a3 3 0 00-6 0' },
  { type: 'path', d: 'M12 6a3 3 0 016 0v1a3 3 0 01-2 2.83V18a2 2 0 01-4 0v-8.17A3 3 0 0110 7V6' },
]);

export const Palette: IconFC = makeDuotone([
  { type: 'path', d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10a2 2 0 002-2c0-.53-.2-1-.53-1.38a2 2 0 011.48-3.37A2 2 0 0022 13.5C22 7.25 17.53 2 12 2z', filled: true, secondary: true },
  { type: 'path', d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10a2 2 0 002-2c0-.53-.2-1-.53-1.38a2 2 0 011.48-3.37A2 2 0 0022 13.5C22 7.25 17.53 2 12 2z' },
  { type: 'circle', cx: 6.5, cy: 11.5, r: 1, filled: true },
  { type: 'circle', cx: 9.5, cy: 7.5, r: 1, filled: true },
  { type: 'circle', cx: 14.5, cy: 7.5, r: 1, filled: true },
  { type: 'circle', cx: 17.5, cy: 11.5, r: 1, filled: true },
]);

export const StackSimple: IconFC = makeDuotone([
  { type: 'path', d: 'M2 9l10 5 10-5M2 15l10 5 10-5', filled: true, secondary: true },
  { type: 'path', d: 'M2 9l10 5 10-5' },
  { type: 'path', d: 'M2 15l10 5 10-5' },
  { type: 'path', d: 'M12 4L2 9l10 5 10-5-10-5z' },
]);

export const Key: IconFC = makeDuotone([
  { type: 'circle', cx: 8, cy: 14, r: 5, filled: true, secondary: true },
  { type: 'circle', cx: 8, cy: 14, r: 5 },
  { type: 'path', d: 'M12.42 11.58L21 3M19 3l2 2-1 1-2-2zM15 7l2 2' },
]);

export const Wrench: IconFC = makeDuotone([
  { type: 'path', d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', filled: true, secondary: true },
  { type: 'path', d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z' },
]);

export const ShoppingCart: IconFC = makeDuotone([
  { type: 'path', d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z', filled: true, secondary: true },
  { type: 'path', d: 'M3 6h18M16 10a4 4 0 01-8 0' },
  { type: 'path', d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' },
]);

export const Flask: IconFC = makeDuotone([
  { type: 'path', d: 'M14.5 2v8l3.9 6.5A2 2 0 0116.5 20h-9a2 2 0 01-1.9-3.5L9.5 10V2', filled: true, secondary: true },
  { type: 'path', d: 'M14.5 2v8l3.9 6.5A2 2 0 0116.5 20h-9a2 2 0 01-1.9-3.5L9.5 10V2' },
  { type: 'path', d: 'M8.5 2h7M8 16h2m2 2h1' },
]);

export const Hammer: IconFC = makeDuotone([
  { type: 'path', d: 'M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9', filled: true, secondary: true },
  { type: 'path', d: 'M15 12l-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 010-3L12 9m3 3l2-2.5 3.5.5 1-4-4.5-.5L15 6l-3 3m3 3L12 9' },
]);

export const Cloud: IconFC = makeDuotone([
  { type: 'path', d: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z', filled: true, secondary: true },
  { type: 'path', d: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z' },
]);

export const ChartBar: IconFC = makeDuotone([
  { type: 'path', d: 'M18 20V10M12 20V4M6 20v-6', filled: false },
  { type: 'rect', x: 16, y: 10, w: 4, h: 10, rx: 1, filled: true, secondary: true },
  { type: 'rect', x: 10, y: 4, w: 4, h: 16, rx: 1, filled: true, secondary: true },
  { type: 'rect', x: 4, y: 14, w: 4, h: 6, rx: 1, filled: true, secondary: true },
  { type: 'path', d: 'M4 20h16' },
]);

export const ArrowsClockwise: IconFC = makeDuotone([
  { type: 'path', d: 'M23 4v6h-6M1 20v-6h6', filled: false },
  { type: 'path', d: 'M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15', filled: false },
  { type: 'path', d: 'M23 4v6h-6', filled: true, secondary: true },
  { type: 'path', d: 'M1 20v-6h6', filled: true, secondary: true },
]);
