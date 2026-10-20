import { motion } from 'framer-motion';
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

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--bp-good)]" />
        {t.hero.diagramLabel}
      </div>
      <div className="bp-corners rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-raised)]/60 p-4">
        <svg viewBox="0 0 580 210" className="h-auto w-full" role="img" aria-label={t.hero.diagramLabel}>
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
                  r={2.5}
                  fill="var(--bp-cyan-bright)"
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{
                    duration: 2.4,
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
              transition={{ duration: 0.5, delay: 0.15 * i }}
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
      </div>
    </div>
  );
}
