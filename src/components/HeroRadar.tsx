"use client";

import { useEffect, useRef } from "react";

interface Blip {
  x: number;
  y: number;
  angle: number;
  lastHit: number;
  size: number;
}

const ACCENT = "0, 255, 136";
const SPEED = 0.006;
const TWO_PI = Math.PI * 2;

export default function HeroRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let angle = 0;
    let blips: Blip[] = [];

    const getMetrics = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w * 0.68;
      const cy = h * 0.5;
      const radius = Math.min(w * 0.32, h * 0.42, 300);
      return { w, h, cx, cy, radius };
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const { cx, cy, radius } = getMetrics();
      blips = Array.from({ length: 10 }, () => {
        const r = (0.25 + Math.random() * 0.75) * radius;
        const a = Math.random() * TWO_PI;
        return {
          x: cx + Math.cos(a) * r,
          y: cy + Math.sin(a) * r,
          angle: a,
          lastHit: -99999,
          size: Math.random() * 1.5 + 1.5,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (timestamp: number) => {
      const { w, h, cx, cy, radius } = getMetrics();
      ctx.clearRect(0, 0, w, h);

      // Rings
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (radius / 3) * i, 0, TWO_PI);
        ctx.strokeStyle = `rgba(${ACCENT}, 0.07)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Crosshairs
      ctx.strokeStyle = `rgba(${ACCENT}, 0.05)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();

      // Sweep trail — arc segments fading behind sweep
      const trailLength = Math.PI * 0.55;
      const steps = 24;
      for (let i = 0; i < steps; i++) {
        const a0 = angle - (trailLength / steps) * i;
        const a1 = angle - (trailLength / steps) * (i + 1);
        const opacity = (1 - i / steps) * 0.12;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, a0, a1, true);
        ctx.closePath();
        ctx.fillStyle = `rgba(${ACCENT}, ${opacity})`;
        ctx.fill();
      }

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.strokeStyle = `rgba(${ACCENT}, 0.55)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Blips
      const sweepNorm = ((angle % TWO_PI) + TWO_PI) % TWO_PI;
      blips.forEach((blip) => {
        const blipNorm = ((blip.angle % TWO_PI) + TWO_PI) % TWO_PI;
        const diff = Math.abs(sweepNorm - blipNorm);
        if (diff < 0.06 || diff > TWO_PI - 0.06) {
          blip.lastHit = timestamp;
        }

        const age = timestamp - blip.lastHit;
        const fadeTime = 2800;
        if (age < fadeTime) {
          const opacity = (1 - age / fadeTime) * 0.95;
          // Glow
          ctx.beginPath();
          ctx.arc(blip.x, blip.y, blip.size * 4, 0, TWO_PI);
          ctx.fillStyle = `rgba(${ACCENT}, ${opacity * 0.15})`;
          ctx.fill();
          // Core dot
          ctx.beginPath();
          ctx.arc(blip.x, blip.y, blip.size, 0, TWO_PI);
          ctx.fillStyle = `rgba(${ACCENT}, ${opacity})`;
          ctx.fill();
        }
      });

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, TWO_PI);
      ctx.fillStyle = `rgba(${ACCENT}, 0.6)`;
      ctx.fill();

      angle += SPEED;
      animFrame = requestAnimationFrame(draw);
    };

    animFrame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full opacity-80"
    />
  );
}