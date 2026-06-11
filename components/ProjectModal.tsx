import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ArrowLeft, Target, AlertCircle, Layout, Type } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Anchor keyboard/screen-reader position at the top of the case study
    // (matters when this mounts in place of the password gate).
    containerRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project.detailedContent) return null;
  const { detailedContent } = project;

  return (
    <div ref={containerRef} tabIndex={-1} className="fixed inset-0 z-[110] bg-dark/95 backdrop-blur-md overflow-y-auto cursor-auto outline-none">
        <div className="min-h-full w-full bg-dark text-light selection:bg-accent selection:text-black pb-20">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-dark/90 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={onClose}
                    className="group flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-xs uppercase tracking-widest font-mono font-bold cursor-hover"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Index</span>
                </button>
                <div className="hidden md:block font-display font-bold text-lg tracking-tight">{project.title}</div>
                <button 
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white cursor-hover"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
                
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {project.tags.map((tag, idx) => (
                             <span key={idx} className="text-[10px] font-bold uppercase tracking-[0.2em] text-black bg-accent rounded-full px-3 py-1">
                                {tag}
                             </span>
                        ))}
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter"
                    >
                        {project.title.toUpperCase()}
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-12">
                        {project.subtitle}
                    </p>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl bg-white/5 mb-20 border border-white/10">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 mb-24">
                    <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-widest font-mono mb-3">Role</h3>
                        <p className="text-lg text-white font-medium">{detailedContent.role || 'Product Designer'}</p>
                    </div>
                    <div className="col-span-2 md:col-span-3">
                        <h3 className="text-xs font-bold text-accent uppercase tracking-widest font-mono mb-3">Target Audience</h3>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-300 font-light">
                                <span className="text-accent font-medium">Primary:</span> {detailedContent.targetAudience?.primary || 'N/A'}
                            </p>
                            {detailedContent.targetAudience?.secondary && (
                                <p className="text-sm text-gray-300 font-light">
                                    <span className="text-accent font-medium">Secondary:</span> {detailedContent.targetAudience.secondary}
                                </p>
                            )}
                        </div>
                    </div>
                    {detailedContent.tools && detailedContent.tools.length > 0 && (
                        <div className="col-span-2 md:col-span-4 border-t border-white/10 pt-8 mt-4">
                            <h3 className="text-xs font-bold text-accent uppercase tracking-widest font-mono mb-4">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {detailedContent.tools.map((tool, idx) => (
                                    <span key={idx} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-32">
                    
                    {/* 1. Problem & Stats */}
                    <section className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-display font-bold text-white">The Challenge</h2>
                            
                            {/* Problem-framing stats (impact metrics render in Solution & Impact) */}
                            {detailedContent.research?.stats && (
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {detailedContent.research.stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8">
                                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{stat.value}</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className="text-gray-400 leading-relaxed font-light text-lg max-w-4xl">
                                {detailedContent.problem}
                            </p>

                            {detailedContent.challenges && detailedContent.challenges.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono mb-4">Key Challenges</h3>
                                    <ul className="space-y-3">
                                        {detailedContent.challenges.map((challenge, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-red-500 mt-1">×</span>
                                                <span className="leading-relaxed">
                                                    {typeof challenge === 'string' ? (
                                                        challenge
                                                    ) : (
                                                        <>
                                                            <strong className="text-white">{challenge.title}:</strong> {challenge.description}
                                                        </>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {detailedContent.goals && detailedContent.goals.length > 0 && (
                                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-8">
                                    <h3 className="text-sm font-bold text-accent uppercase tracking-widest font-mono mb-6">Project Goals</h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {detailedContent.goals.map((goal, idx) => (
                                            <div key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-accent mt-1">▹</span>
                                                <span className="leading-relaxed">{goal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* All other things at the bottom */}
                        <div className="grid md:grid-cols-12 gap-12">
                            {detailedContent.operatingRange && (
                                <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                                    <h3 className="text-xs font-bold text-accent uppercase tracking-widest font-mono border-b border-white/10 pb-3">Operating Range</h3>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-2">Scope</h4>
                                        <p className="text-sm text-gray-300">{detailedContent.operatingRange.scope}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-2">Ambiguity</h4>
                                        <p className="text-sm text-gray-300">{detailedContent.operatingRange.ambiguity}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-2">Dependencies</h4>
                                        <ul className="space-y-1">
                                            {detailedContent.operatingRange.dependencies.map((dep, i) => (
                                                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                                    <span className="text-accent mt-1">▹</span> {dep}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {detailedContent.measurableDelta && (
                                <div className={`space-y-8 ${detailedContent.operatingRange ? 'md:col-span-7' : 'md:col-span-12'}`}>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-l-red-500/50">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Before</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.measurableDelta.before}</p>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-l-emerald-500/50">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">After</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.measurableDelta.after}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Why it moved</h4>
                                        <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.measurableDelta.whyItMoved}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Key Decisions & Engineering Collaboration */}
                    {(detailedContent.decisionPoints || detailedContent.engineeringCollab) && (
                        <section className="space-y-12">
                            <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-6">
                                <span className="text-accent"><AlertCircle size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">Key Decisions & Engineering</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-12">
                                {detailedContent.decisionPoints && (
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold text-white font-display mb-6">Strategic Decisions</h3>
                                        {detailedContent.decisionPoints.map((decision, idx) => (
                                            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors duration-500">
                                                <div className="mb-4">
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-2">Context</h4>
                                                    <p className="text-sm text-gray-300">{decision.context}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-accent mb-2">Decision</h4>
                                                    <p className="text-sm text-white font-medium">{decision.decision}</p>
                                                </div>
                                                <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                                                    <div>
                                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-2">Trade-off</h4>
                                                        <p className="text-xs text-gray-400">{decision.tradeOff}</p>
                                                    </div>
                                                    <div className="bg-accent/5 border-l-2 border-accent rounded-r-xl rounded-l-md p-4">
                                                        <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-accent mb-2">Outcome</h4>
                                                        <p className="text-sm text-gray-100 leading-relaxed">{decision.outcome}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {detailedContent.engineeringCollab && (
                                    <div className="space-y-8">
                                        <h3 className="text-xl font-bold text-white font-display mb-6">Engineering Collaboration</h3>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-8">
                                            {detailedContent.engineeringCollab.techConstraints && (
                                                <div>
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-accent mb-3">Technical Constraints</h4>
                                                    <ul className="space-y-2">
                                                        {detailedContent.engineeringCollab.techConstraints.map((constraint, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                                <span className="text-accent mt-1">▹</span> {constraint}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {detailedContent.engineeringCollab.edgeCases && (
                                                <div>
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Edge Cases Handled</h4>
                                                    <ul className="space-y-2">
                                                        {detailedContent.engineeringCollab.edgeCases.map((edgeCase, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                                <span className="text-gray-500 mt-1">▹</span> {edgeCase}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {detailedContent.engineeringCollab.tradeOffs && (
                                                <div>
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Implementation Trade-offs</h4>
                                                    <ul className="space-y-2">
                                                        {detailedContent.engineeringCollab.tradeOffs.map((tradeOff, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                                <span className="text-gray-500 mt-1">▹</span> {tradeOff}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                
                                {detailedContent.systemThinking && (
                                    <div className="space-y-8 md:col-span-2">
                                        <h3 className="text-xl font-bold text-white font-display mb-6">System Thinking</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-accent mb-3">Architecture Summary</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.systemThinking.summary}</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Evolution</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.systemThinking.evolution}</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Reuse & Scale</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{detailedContent.systemThinking.reuse}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* 1.5 Research & Insights */}
                    {detailedContent.research?.insights && detailedContent.research.insights.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><Target size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">Research & Insights</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {detailedContent.research.insights.map((insight, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-accent font-bold">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">{insight}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 2. User Personas */}
                    {detailedContent.personas && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><Target size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">User Personas</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {detailedContent.personas.map((persona, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors duration-500 group">
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white font-display">{persona.name}</h3>
                                            <p className="text-accent font-mono text-xs uppercase tracking-wider">{persona.role}</p>
                                        </div>
                                        <p className="text-gray-400 italic mb-8 border-l-2 border-accent pl-4 font-light">"{persona.bio}"</p>
                                        
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-4">Goals</h4>
                                                <ul className="space-y-2">
                                                    {persona.goals.map((goal, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                            <span className="text-accent mt-1">▹</span> {goal}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-4">Pain Points</h4>
                                                <ul className="space-y-2">
                                                    {persona.painPoints.map((pain, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                            <span className="text-red-500 mt-1">×</span> {pain}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 2.5 User Journey */}
                    {detailedContent.userJourney && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><Layout size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">User Journey</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {detailedContent.userJourney.map((journey, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors duration-500">
                                        <h3 className="text-xl font-bold text-white font-display mb-6">{journey.stage}</h3>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Actions</h4>
                                            <ul className="space-y-2">
                                                {journey.actions.map((action, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <span className="text-accent mt-1">▹</span> {action}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Pain Points</h4>
                                            <ul className="space-y-2">
                                                {journey.painPoints.map((pain, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <span className="text-red-500 mt-1">×</span> {pain}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 mb-3">Opportunities</h4>
                                            <ul className="space-y-2">
                                                {journey.opportunities.map((opp, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <span className="text-green-500 mt-1">✓</span> {opp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 3. Eisen Hover Matrix */}
                    {detailedContent.eisenMatrix && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><AlertCircle size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">Prioritization Matrix</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 h-full">
                                {/* Quadrant 1 */}
                                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8 relative hover:bg-red-900/20 transition-colors">
                                    <span className="absolute top-4 right-4 text-[10px] font-bold text-red-500 uppercase tracking-widest font-mono">Urgent & Important</span>
                                    <h3 className="text-xl font-bold text-red-400 mb-6 font-display pt-6 sm:pt-0">Do First</h3>
                                    <ul className="space-y-3">
                                        {detailedContent.eisenMatrix.urgentImportant.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-red-200 font-light text-sm">
                                                <div className="w-1 h-1 bg-red-500"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quadrant 2 */}
                                <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8 relative hover:bg-blue-900/20 transition-colors">
                                    <span className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">Not Urgent & Important</span>
                                    <h3 className="text-xl font-bold text-blue-400 mb-6 font-display pt-6 sm:pt-0">Schedule</h3>
                                    <ul className="space-y-3">
                                        {detailedContent.eisenMatrix.notUrgentImportant.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-blue-200 font-light text-sm">
                                                <div className="w-1 h-1 bg-blue-500"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quadrant 3 */}
                                <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-8 relative hover:bg-orange-900/20 transition-colors">
                                    <span className="absolute top-4 right-4 text-[10px] font-bold text-orange-500 uppercase tracking-widest font-mono">Urgent & Not Important</span>
                                    <h3 className="text-xl font-bold text-orange-400 mb-6 font-display pt-6 sm:pt-0">Delegate</h3>
                                    <ul className="space-y-3">
                                        {detailedContent.eisenMatrix.urgentNotImportant.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-orange-200 font-light text-sm">
                                                <div className="w-1 h-1 bg-orange-500"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quadrant 4 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl rounded-xl p-8 relative hover:bg-white/10 transition-colors">
                                    <span className="absolute top-4 right-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Not Urgent & Not Important</span>
                                    <h3 className="text-xl font-bold text-gray-400 mb-6 font-display pt-6 sm:pt-0">Eliminate</h3>
                                    <ul className="space-y-3">
                                        {detailedContent.eisenMatrix.notUrgentNotImportant.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-500 font-light text-sm">
                                                <div className="w-1 h-1 bg-gray-500"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 4. Sitemap */}
                    {detailedContent.sitemap && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><Layout size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">Information Architecture</h2>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 overflow-x-auto">
                                <div className="flex flex-nowrap gap-8 min-w-max justify-center mx-auto">
                                    {detailedContent.sitemap.map((section, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-4 group">
                                            {/* Node */}
                                            <div className="w-40 h-16 flex items-center justify-center bg-dark border border-white/20 rounded-lg shadow-sm font-bold text-white z-10 group-hover:border-accent transition-colors font-display tracking-tight text-center px-2">
                                                {section.title}
                                            </div>
                                            {/* Connector */}
                                            <div className="w-px h-8 bg-white/10 group-hover:bg-accent/50 transition-colors"></div>
                                            {/* Children */}
                                            <div className="flex flex-col gap-2">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="px-4 py-2 bg-white/5 border border-white/5 rounded-md text-[10px] text-gray-400 text-center w-40 font-mono">
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 5. Design System */}
                    {detailedContent.designSystem && (
                        <section>
                             <div className="flex items-center gap-3 mb-12">
                                <span className="text-accent"><Type size={24}/></span>
                                <h2 className="text-3xl font-display font-bold text-white">Design System</h2>
                            </div>
                            
                            {/* Typography Scale */}
                            {detailedContent.designSystem.typography && (
                                <div className="mb-16">
                                    <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
                                        <div className="md:w-1/3">
                                            <h3 className="text-lg font-bold text-white mb-4">Typography</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {detailedContent.designSystem.typography.usage}
                                            </p>
                                            <div className="text-9xl font-display font-bold text-white/5 select-none">Aa</div>
                                        </div>
                                        <div className="md:w-2/3 w-full space-y-6">
                                            {detailedContent.designSystem.typography.scale.map((type, idx) => (
                                                <div key={idx} className="flex items-baseline border-b border-white/10 pb-4">
                                                    <div className="w-24 text-[10px] text-accent font-mono uppercase">{type.label}</div>
                                                    <div className="flex-1">
                                                        <div style={{ fontFamily: `'${detailedContent.designSystem.fontFamily}', sans-serif`, fontSize: type.size, lineHeight: type.lineHeight, fontWeight: type.weight, color: 'white' }}>
                                                            {project.title} - Typography scale demonstration
                                                        </div>
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 hidden sm:block font-mono">{type.size} / {type.weight}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Color Palette */}
                            {detailedContent.designSystem.colors && (
                                <div className="mb-16">
                                    <h3 className="text-lg font-bold text-white mb-8">Color</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {detailedContent.designSystem.colors.map((color, idx) => (
                                            <div key={idx} className="space-y-3 group">
                                                <div 
                                                    className="w-full aspect-square rounded-xl shadow-sm flex items-end p-4 transition-transform group-hover:scale-105 duration-300 relative overflow-hidden"
                                                    style={{ backgroundColor: color.hex }}
                                                >
                                                    {/* Darken text if color is light, lighten if dark */}
                                                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono opacity-100 z-10" 
                                                          style={{ color: color.textColor }}>
                                                        {color.hex}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white text-sm">{color.name}</div>
                                                    <div className="text-xs text-gray-500">{color.usage}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* 5.5 Process Steps & Features */}
                    {(detailedContent.processSteps || detailedContent.features) && (
                        <section className="space-y-12">
                            {(() => {
                                const hasProcess = !!detailedContent.processSteps;
                                const hasFeatures = !!detailedContent.features;
                                const hasBoth = hasProcess && hasFeatures;
                                return (
                                    <div className={hasBoth ? 'grid md:grid-cols-2 gap-12' : ''}>
                                        {hasProcess && (
                                            <div className="space-y-8">
                                                <div className="flex items-center gap-3 mb-8">
                                                    <span className="text-accent"><Layout size={24}/></span>
                                                    <h2 className="text-3xl font-display font-bold text-white">Process</h2>
                                                </div>
                                                <div className="space-y-6">
                                                    {detailedContent.processSteps!.map((step, idx) => (
                                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4">
                                                            <div className="text-accent font-display text-2xl font-bold opacity-50">0{idx + 1}</div>
                                                            <div>
                                                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                                                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {hasFeatures && (
                                            <div className="space-y-8">
                                                <div className="flex items-center gap-3 mb-8">
                                                    <span className="text-accent"><Type size={24}/></span>
                                                    <h2 className="text-3xl font-display font-bold text-white">Key Features</h2>
                                                </div>
                                                <div className={hasBoth ? 'space-y-6' : 'grid md:grid-cols-2 gap-6'}>
                                                    {detailedContent.features!.map((feature, idx) => (
                                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                                                <span className="text-accent">▹</span> {feature.title}
                                                            </h3>
                                                            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </section>
                    )}

                    {/* 6. Solution & Outcome */}
                    <section>
                        <h2 className="text-3xl font-display font-bold text-white mb-8">Solution & Impact</h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
                            {detailedContent.solution}
                        </p>

                        <div className="border-l-2 border-accent pl-6 md:pl-10 py-2 mb-12">
                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl">
                                {detailedContent.outcome}
                            </p>
                        </div>

                        {detailedContent.measurableDelta && (
                            <div className="mb-10">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono mb-4">Platform Outcomes</h3>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {detailedContent.measurableDelta.metrics.map((stat, idx) => (
                                        <div key={idx} className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-display">{stat.value}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {detailedContent.proofPoints && detailedContent.proofPoints.length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono mb-4">Customer Results</h3>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {detailedContent.proofPoints.map((stat, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">{stat.value}</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {detailedContent.outcomeNote && (
                            <p className="text-xs text-gray-500 italic">{detailedContent.outcomeNote}</p>
                        )}
                    </section>

                    {/* 6.5 Learnings & Next Steps */}
                    {(detailedContent.learnings || detailedContent.nextSteps || detailedContent.accessibility) && (
                        (() => {
                            const colCount = [detailedContent.learnings, detailedContent.nextSteps, detailedContent.accessibility].filter(Boolean).length;
                            const gridClass = colCount === 3 ? 'grid md:grid-cols-3 gap-8' : colCount === 2 ? 'grid md:grid-cols-2 gap-8' : 'max-w-2xl';
                            return (
                                <section className={gridClass}>
                                    {detailedContent.learnings && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 font-display">Key Learnings</h3>
                                            <ul className="space-y-4">
                                                {detailedContent.learnings.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                                        <span className="text-accent mt-1">▹</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {detailedContent.nextSteps && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 font-display">Next Steps</h3>
                                            <ul className="space-y-4">
                                                {detailedContent.nextSteps.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                                        <span className="text-accent mt-1">▹</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {detailedContent.accessibility && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 font-display">Accessibility</h3>
                                            <ul className="space-y-4">
                                                {detailedContent.accessibility.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                                        <span className="text-accent mt-1">▹</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            );
                        })()
                    )}

                    {/* 7. Gallery */}
                    {detailedContent.images && detailedContent.images.length > 0 && (
                     <section>
                        <div className="space-y-24">
                            {detailedContent.images.map((img, idx) => (
                                 <div key={idx} className="group relative">
                                    <div className="overflow-hidden rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-500 p-6">
                                        <img src={img} alt={`${project.title} - Figure ${idx + 1}`} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-mono text-accent uppercase">Figure {idx + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    )}

                    {/* 8. Product Screens */}
                    {detailedContent.solutionImages && detailedContent.solutionImages.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-display font-bold text-white mb-8">Product Screens</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {detailedContent.solutionImages.map((img, idx) => (
                                    <div key={idx} className="overflow-hidden rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-500 group">
                                        <img
                                            src={img}
                                            alt={`Product screen ${idx + 1}`}
                                            className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </div>

                <div className="mt-32 pt-16 border-t border-white/10 text-center">
                    <button 
                        onClick={onClose}
                        className="px-12 py-4 border border-white rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                    >
                        Close Protocol
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectModal;