import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import ClosedCaseStudy, { isProjectUnlocked, clearProjectUnlock } from './components/ClosedCaseStudy';
import CXOCaseStudy from './components/CXOCaseStudy';
import CustomCursor from './components/CustomCursor';
import FloatingLinkedIn from './components/FloatingLinkedIn';
import { ProjectItem } from './types';
import { PROJECTS_DATA } from './data';

function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  const [unlockedId, setUnlockedId] = useState<string | null>(null);

  useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  const unlocked = unlockedId === project.id || isProjectUnlocked(project.id);
  const needsGate = !!project.locked && !unlocked;

  // Closing a locked case study re-locks it: next visit asks for the password again.
  const closeAndRelock = () => {
    if (project.locked) {
      clearProjectUnlock(project.id);
      setUnlockedId(null);
    }
    navigate('/');
  };

  return (
    <div className="bg-dark min-h-screen text-light selection:bg-accent selection:text-black">
      {/* The CXO experience (gate + case study) has its own visual system — keep portfolio chrome out */}
      {!project.locked && (
        <div className="hidden md:block">
          <CustomCursor />
        </div>
      )}
      {!project.locked && <FloatingLinkedIn />}
      {needsGate ? (
        <ClosedCaseStudy
          project={project}
          onUnlock={() => setUnlockedId(project.id)}
          onClose={() => navigate('/')}
        />
      ) : project.locked ? (
        <CXOCaseStudy project={project} onClose={closeAndRelock} />
      ) : (
        <ProjectModal project={project} onClose={closeAndRelock} />
      )}
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
