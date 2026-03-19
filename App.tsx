import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import FloatingLinkedIn from './components/FloatingLinkedIn';
import { ProjectItem } from './types';
import { PROJECTS_DATA } from './data';

function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="bg-dark min-h-screen text-light selection:bg-accent selection:text-black">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <FloatingLinkedIn />
      <ProjectModal project={project} onClose={() => navigate('/')} />
    </div>
  );
}

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleProjectClick = (project: ProjectItem) => {
    navigate(`/${project.id}`);
  };

  return (
    <div className="bg-dark min-h-screen text-light selection:bg-accent selection:text-black">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
      <main>
        <Hero onExplore={() => scrollToSection('work')} />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <Experience />
      </main>
      <Contact />
      <FloatingLinkedIn />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
