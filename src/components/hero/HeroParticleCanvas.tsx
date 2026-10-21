import { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
}

export function HeroParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates in normalized [-1, 1] range
    let mouseX = 0;
    let mouseY = 0;
    let targetRotateY = 0;
    let targetRotateX = 0;
    let currentRotateY = 0;
    let currentRotateX = 0;

    const count = Math.min(width < 768 ? 28 : 55, 60);
    const particles: Particle[] = [];
    const spread = Math.min(width, height) * 0.75;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread * 2;
      const y = (Math.random() - 0.5) * spread * 1.5;
      const z = (Math.random() - 0.5) * spread;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / rect.width) * 2 - 1;
      mouseY = (clientY / rect.height) * 2 - 1;
      targetRotateY = mouseX * 0.25;
      targetRotateX = -mouseY * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Pause when hero is offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const fov = 400;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth inertia rotation towards mouse
      currentRotateY += (targetRotateY - currentRotateY) * 0.04;
      currentRotateX += (targetRotateX - currentRotateX) * 0.04;

      const cosY = Math.cos(currentRotateY);
      const sinY = Math.sin(currentRotateY);
      const cosX = Math.cos(currentRotateX);
      const sinX = Math.sin(currentRotateX);

      const isDark = theme === 'dark';
      const nodeColor = isDark ? 'rgba(90, 185, 232, ' : 'rgba(30, 124, 184, ';
      const lineColor = isDark ? 'rgba(148, 187, 224, ' : 'rgba(30, 58, 95, ';

      // Project 3D to 2D
      const projected = particles.map((p) => {
        // Continuous slow ambient drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (Math.abs(p.x - p.baseX) > 40) p.vx *= -1;
        if (Math.abs(p.y - p.baseY) > 40) p.vy *= -1;
        if (Math.abs(p.z - p.baseZ) > 40) p.vz *= -1;

        // Rotate Y
        let x1 = p.x * cosY + p.z * sinY;
        let z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        const distance = fov / (fov + z2 + 300);
        const screenX = width / 2 + x1 * distance;
        const screenY = height / 2 + y1 * distance;
        const alpha = Math.max(0.12, Math.min(0.7, (z2 + 250) / 450));

        return { screenX, screenY, distance, alpha, size: p.size * distance };
      });

      // Draw connection lines
      const maxDist = width < 768 ? 85 : 120;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].screenX - projected[j].screenX;
          const dy = projected[i].screenY - projected[j].screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(projected[i].screenX, projected[i].screenY);
            ctx.lineTo(projected[j].screenX, projected[j].screenY);
            ctx.strokeStyle = `${lineColor}${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw particles / blueprint nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
