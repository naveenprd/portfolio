export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Persona {
  name: string;
  role: string;
  bio: string;
  image?: string;
  goals: string[];
  painPoints: string[];
}

export interface EisenMatrix {
  urgentImportant: string[];
  notUrgentImportant: string[];
  urgentNotImportant: string[];
  notUrgentNotImportant: string[];
}

export interface SitemapSection {
  title: string;
  items: string[];
}

export interface TypeScale {
  label: string;
  size: string;
  lineHeight: string;
  weight: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
  textColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  imageUrl: string;
  detailedContent?: {
    problem: string;
    solution: string;
    outcome: string;
    images: string[];
    
    // Extended Case Study Fields
    role?: string;
    timeline?: string;
    tools?: string[];
    goals?: string[];
    
    targetAudience?: {
      primary: string;
      secondary: string;
    };
    
    challenges?: string[] | { title: string; description: string }[];
    
    research?: {
       stats?: { value: string; label: string }[];
       insights?: string[];
    };
    
    userNeeds?: string[];
    
    // Rich Visual Data
    personas?: Persona[];
    eisenMatrix?: EisenMatrix;
    sitemap?: SitemapSection[];
    userJourney?: { stage: string; actions: string[]; painPoints: string[]; opportunities: string[] }[];
    
    designSystem?: {
      summary: string;
      typography?: {
        fontFamily: string;
        usage: string;
        scale: TypeScale[];
      };
      colors?: ColorSwatch[];
    };

    // PDF Guidelines Fields
    measurableDelta?: {
      before: string;
      after: string;
      whyItMoved: string;
      metrics: { value: string; label: string }[];
    };
    operatingRange?: {
      scope: string;
      ambiguity: string;
      dependencies: string[];
    };
    decisionPoints?: {
      context: string;
      decision: string;
      tradeOff: string;
      outcome: string;
    }[];
    engineeringCollab?: {
      edgeCases: string[];
      techConstraints: string[];
      tradeOffs: string[];
    };
    systemThinking?: {
      summary: string;
      evolution: string;
      reuse: string;
    };

    solutionImages?: string[];
    processSteps?: { title: string; description: string }[];
    features?: { title: string; description: string }[];
    learnings?: string[];
    nextSteps?: string[];
    accessibility?: string[];
  };
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}
