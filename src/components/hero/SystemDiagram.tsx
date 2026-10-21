import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useI18n } from '../../i18n';

interface SystemNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  tag: string;
  tagColor?: string;
}

const nodes: SystemNode[] = [
  { id: 'client', x: 22, y: 110, w: 115, h: 48, label: 'Angular', sub: 'Client UI', tag: 'UI', tagColor: 'var(--bp-cyan)' },
  { id: 'auth', x: 185, y: 22, w: 120, h: 48, label: 'Keycloak', sub: 'Identity & Auth', tag: 'IAM', tagColor: 'var(--bp-amber)' },
  { id: 'api', x: 185, y: 110, w: 120, h: 48, label: 'Spring Boot', sub: 'Core REST API', tag: 'API', tagColor: 'var(--bp-cyan-bright)' },
  { id: 'devops', x: 185, y: 198, w: 120, h: 48, label: 'Docker', sub: 'Containers / DevOps', tag: 'OPS', tagColor: 'var(--bp-cyan)' },
  { id: 'kafka', x: 360, y: 35, w: 120, h: 48, label: 'Apache Kafka', sub: 'Event Streaming', tag: 'EVENT', tagColor: 'var(--bp-amber-bright)' },
  { id: 'db', x: 360, y: 155, w: 120, h: 48, label: 'PostgreSQL', sub: 'Data Storage', tag: 'DB', tagColor: 'var(--bp-cyan-bright)' },
  { id: 'ci', x: 530, y: 95, w: 122, h: 48, label: 'GitHub Actions', sub: 'CI/CD Pipeline', tag: 'CI/CD', tagColor: 'var(--bp-good)' },
];

const edges = [
  // Angular -> Keycloak (OIDC auth flow)
  { from: 'client', to: 'auth', x1: 137, y1: 124, x2: 185, y2: 55 },
  // Angular -> Spring Boot (REST API)
  { from: 'client', to: 'api', x1: 137, y1: 134, x2: 185, y2: 134 },
  // Keycloak -> Spring Boot (JWT verification)
  { from: 'auth', to: 'api', x1: 245, y1: 70, x2: 245, y2: 110 },
  // Spring Boot -> Docker (Container runtime)
  { from: 'api', to: 'devops', x1: 245, y1: 158, x2: 245, y2: 198 },
  // Spring Boot -> Kafka (Event pub/sub)
  { from: 'api', to: 'kafka', x1: 305, y1: 122, x2: 360, y2: 68 },
  // Spring Boot -> PostgreSQL (Data storage)
  { from: 'api', to: 'db', x1: 305, y1: 142, x2: 360, y2: 170 },
  // Kafka -> CI/CD Pipeline
  { from: 'kafka', to: 'ci', x1: 480, y1: 65, x2: 530, y2: 108 },
  // GitHub Actions -> Docker (Automated build & deploy)
  { from: 'ci', to: 'devops', x1: 530, y1: 130, x2: 305, y2: 215 },
];

export function SystemDiagram() {
  const { t } = useI18n();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-5deg', '5deg']);

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
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--bp-good)] animate-pulse" />
          <span>{t.hero.diagramLabel}</span>
        </div>
        <span className="text-[10px] text-[color:var(--bp-cyan-bright)]">End-to-End Stack</span>
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="bp-corners relative rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-raised)]/70 p-3 sm:p-4 shadow-xl transition-shadow duration-300 hover:border-[color:var(--bp-line-strong)] hover:shadow-2xl"
      >
        <svg
          viewBox="0 0 675 270"
          className="h-auto w-full select-none"
          role="img"
          aria-label={t.hero.diagramLabel}
        >
          <defs>
            <filter id="packet-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Connecting Edges */}
          {edges.map((e, i) => (
            <g key={`${e.from}-${e.to}`}>
              <line
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                stroke="var(--bp-line-strong)"
                strokeWidth={1.2}
                strokeDasharray="4 4"
              />
              <motion.circle
                r={2.8}
                fill={i % 2 === 0 ? 'var(--bp-cyan-bright)' : 'var(--bp-amber)'}
                filter="url(#packet-glow)"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                  duration: 2.2 + (i % 3) * 0.4,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.35,
                }}
                style={{
                  offsetPath: `path("M ${e.x1} ${e.y1} L ${e.x2} ${e.y2}")`,
                }}
              />
            </g>
          ))}

          {/* Architecture Nodes */}
          {nodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35, delay: 0.08 * i }}
              className="cursor-default"
            >
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                rx={5}
                fill="var(--bp-bg-card)"
                stroke="var(--bp-line-strong)"
                strokeWidth={1}
                className="transition-colors hover:stroke-[color:var(--bp-cyan)]"
              />

              {/* Tag pill */}
              <rect
                x={n.x + n.w - 38}
                y={n.y + 6}
                width="31"
                height="13"
                rx={3}
                fill="var(--bp-bg-raised)"
                stroke="var(--bp-line)"
                strokeWidth={0.8}
              />
              <text
                x={n.x + n.w - 22.5}
                y={n.y + 15.5}
                textAnchor="middle"
                fontSize="7.5"
                fontWeight={600}
                fill={n.tagColor || 'var(--bp-cyan)'}
                fontFamily="var(--font-mono)"
              >
                {n.tag}
              </text>

              {/* Main title */}
              <text
                x={n.x + 9}
                y={n.y + 20}
                fill="var(--bp-ink)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fontWeight={600}
              >
                {n.label}
              </text>

              {/* Subtitle */}
              <text
                x={n.x + 9}
                y={n.y + 36}
                fill="var(--bp-ink-dim)"
                fontFamily="var(--font-mono)"
                fontSize="8.5"
                letterSpacing="0.04em"
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
