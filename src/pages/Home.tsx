import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Above-the-fold: load eagerly
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';

// Below-the-fold sections: split into their own async chunks
const Skills        = lazy(() => import('../components/skills/Skills').then((m) => ({ default: m.Skills })));
const Certifications = lazy(() => import('../components/certifications/Certifications').then((m) => ({ default: m.Certifications })));
const Journey       = lazy(() => import('../components/journey/Journey').then((m) => ({ default: m.Journey })));
const Projects      = lazy(() => import('../components/projects/Projects').then((m) => ({ default: m.Projects })));
const Learning      = lazy(() => import('../components/learning/Learning').then((m) => ({ default: m.Learning })));
const Contact       = lazy(() => import('../components/contact/Contact').then((m) => ({ default: m.Contact })));

/** Thin skeleton bar shown while a section chunk is loading */
function SectionSkeleton() {
  return (
    <div className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-4 animate-pulse">
        <div className="h-3 w-24 rounded bg-[color:var(--bp-line-strong)]" />
        <div className="h-6 w-56 rounded bg-[color:var(--bp-line-strong)]" />
        <div className="h-4 w-80 rounded bg-[color:var(--bp-line)]" />
      </div>
    </div>
  );
}

export function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
    }
  }, [location.hash]);

  return (
    <>
      {/* Always load Hero and About immediately (above the fold) */}
      <Hero />
      <About />

      {/* Lazy-loaded sections — each resolves independently */}
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Journey />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Learning />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
}

