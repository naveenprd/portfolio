import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import ClosedCaseStudy, { isProjectUnlocked, clearProjectUnlock, unlockStorageKey } from './components/ClosedCaseStudy';
import CXOCaseStudy from './components/CXOCaseStudy';
import CatalogixCaseStudy from './components/CatalogixCaseStudy';
import ShowcaseDeck from './components/ShowcaseDeck';
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
  // Blueprint case studies (CXO, Catalogix) carry their own visual system — portfolio chrome stays out.
  const isBlueprint = !!project.locked || project.id === 'catalogix';

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
      {!isBlueprint && (
        <div className="hidden md:block">
          <CustomCursor />
        </div>
      )}
      {!isBlueprint && <FloatingLinkedIn />}
      {needsGate ? (
        <ClosedCaseStudy
          project={project}
          onUnlock={() => setUnlockedId(project.id)}
          onClose={() => navigate('/')}
        />
      ) : project.locked ? (
        <CXOCaseStudy project={project} onClose={closeAndRelock} />
      ) : project.id === 'catalogix' ? (
        <CatalogixCaseStudy project={project} onClose={closeAndRelock} />
      ) : (
        <ProjectModal project={project} onClose={closeAndRelock} />
      )}
    </div>
  );
}

/* The interview deck shares CXO's password; unlocking it also pre-unlocks the
 * CXO case study so the deck's hand-off slide opens it without a second gate. */
const SHOWCASE_GATE: ProjectItem = {
  id: 'showcase',
  title: 'Showcase',
  subtitle: 'Interview presentation',
  tags: [],
  description: '',
  imageUrl: '',
  locked: true,
  passwordHash: PROJECTS_DATA.find(p => p.id === 'cxo')?.passwordHash,
};

function ShowcasePage() {
  const navigate = useNavigate();
  const [unlockedNow, setUnlockedNow] = useState(false);
  const unlocked = unlockedNow || isProjectUnlocked('showcase');

  const handleUnlock = () => {
    try {
      sessionStorage.setItem(unlockStorageKey('cxo'), '1');
    } catch {
      // CXO will simply ask for the password again.
    }
    setUnlockedNow(true);
  };

  const closeAndRelock = () => {
    clearProjectUnlock('showcase');
    setUnlockedNow(false);
    navigate('/');
  };

  return (
    <div className="bg-dark min-h-screen text-light selection:bg-accent selection:text-black">
      {unlocked ? (
        <ShowcaseDeck onClose={closeAndRelock} />
      ) : (
        <ClosedCaseStudy
          project={SHOWCASE_GATE}
          kindLabel="Private Presentation"
          onUnlock={handleUnlock}
          onClose={() => navigate('/')}
        />
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
      <Route path="/showcase" element={<ShowcasePage />} />
      <Route path="/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
