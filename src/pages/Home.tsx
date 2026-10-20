import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Skills } from '../components/skills/Skills';
import { Journey } from '../components/journey/Journey';
import { Projects } from '../components/projects/Projects';
import { Learning } from '../components/learning/Learning';
import { Contact } from '../components/contact/Contact';

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
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Learning />
      <Contact />
    </>
  );
}
