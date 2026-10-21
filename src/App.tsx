import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/nav/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';

import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <I18nProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[color:var(--bp-bg)] font-body text-[color:var(--bp-ink)]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}
