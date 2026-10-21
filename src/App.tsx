import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/nav/Navbar';
import { Footer } from './components/footer/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Code-split heavy pages — only load when navigated to
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const ProjectDetail = lazy(() =>
  import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail }))
);
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

/** Minimal full-screen skeleton shown while a lazy chunk is fetching */
function PageShell() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-[color:var(--bp-cyan)] border-t-transparent" />
    </div>
  );
}

export default function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <I18nProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[color:var(--bp-bg)] font-body text-[color:var(--bp-ink)]">
            <Navbar />
            <Suspense fallback={<PageShell />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}
