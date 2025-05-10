import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import WriteupsSection from './components/sections/WriteupsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  useEffect(() => {
    document.title = 'Junaid | Cybersecurity Specialist';
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <WriteupsSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;