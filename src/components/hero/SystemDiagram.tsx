import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useI18n } from '../../i18n';

const nodes = [
  { id: 'client', x: 40, y: 40, label: 'Angular', sub: 'Client' },
  { id: 'auth', x: 260, y: 20, label: 'Keycloak', sub: 'Identity' },
  { id: 'api', x: 260, y: 130, label: 'Spring Boot', sub: 'API' },
  { id: 'db', x: 480, y: 130, label: 'PostgreSQL', sub: 'Data' },
  { id: 'ci', x: 480, y: 20, label: 'GitHub Actions', sub: 'CI/CD' },
];

const edges: [string, string][] = [
  ['client', 'auth'],
  ['client', 'api'],
  ['auth', 'api'],
  ['api', 'db'],
  ['api', 'ci'],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function SystemDiagram() {
  const { t } = useI18n();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full [perspective:1000px]">
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--bp-good)] animate-pulse" />
        {t.hero.diagramLabel}
      </div>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="bp-corners relative rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-raised)]/70 p-4 shadow-xl transition-shadow duration-300 hover:border-[color:var(--bp-line-strong)] hover:shadow-2xl"
      >
        <svg viewBox="0 0 580 210" className="h-auto w-full select-none" role="img" aria-label={t.hero.diagramLabel}>
          <defs>
            <filter id="packet-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {edges.map(([from, to], i) => {
            const a = findNode(from);
            const b = findNode(to);
            const x1 = a.x + 55;
            const y1 = a.y + 25;
            const x2 = b.x;
            const y2 = b.y + 25;
            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--bp-line-strong)"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <motion.circle
                  r={3}
                  fill="var(--bp-cyan-bright)"
                  filter="url(#packet-glow)"
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.4,
                  }}
                  style={{
                    offsetPath: `path("M ${x1} ${y1} L ${x2} ${y2}")`,
                  }}
                />
              </g>
            );
          })}

          {nodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, delay: 0.12 * i }}
              className="cursor-default"
            >
              <rect
                x={n.x}
                y={n.y}
                width={110}
                height={50}
                rx={4}
                fill="var(--bp-bg-card)"
                stroke="var(--bp-line-strong)"
                strokeWidth={1}
                className="transition-colors hover:stroke-[color:var(--bp-cyan)]"
              />
              <text
                x={n.x + 12}
                y={n.y + 21}
                fill="var(--bp-ink)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fontWeight={600}
              >
                {n.label}
              </text>
              <text
                x={n.x + 12}
                y={n.y + 37}
                fill="var(--bp-ink-faint)"
                fontFamily="var(--font-mono)"
                fontSize="9"
                letterSpacing="0.06em"
              >
                {n.sub.toUpperCase()}
              </text>
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
