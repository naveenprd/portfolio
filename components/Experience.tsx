import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky top-32 h-fit z-10">
            <h2 className="text-6xl font-display font-bold text-light mb-8">Career<br/>History</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-12">
              Eight years from agency craft to enterprise AI platforms — agencies, a SaaS
              product company, and an AI fashion OS.
            </p>
            <a href="/Naveen Manickam Resume.pdf" download className="inline-block px-8 py-3 border border-white/20 rounded-full text-light text-xs font-bold uppercase tracking-widest hover:bg-light hover:text-dark transition-all cursor-hover">
              Download Resume
            </a>
          </div>

          {/* List */}
          <div className="lg:col-span-8 space-y-0">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-l border-white/10 rounded-r-xl pl-8 md:pl-16 pr-8 md:pr-16 py-16 relative hover:bg-white/5 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-20 w-2.5 h-2.5 bg-dark border border-white/30 rounded-full group-hover:bg-accent group-hover:border-accent transition-colors"></div>

                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-bold text-light mb-1">{exp.role}</h3>
                    <div className="text-base text-gray-400 mb-6 font-light">{exp.company} — {exp.location}</div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed font-light">{exp.description}</p>
                    
                    <ul className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-accent flex-shrink-0 mt-0.5">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

             <div className="pt-20 border-t border-white/10 mt-12">
                <h3 className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-12">Education</h3>
                <div className="grid md:grid-cols-2 gap-12">
                     {EDUCATION_DATA.map((edu, idx) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/5">
                             <div className="text-xs text-gray-500 mb-4">{edu.period}</div>
                             <h4 className="text-xl font-bold text-light mb-2">{edu.degree}</h4>
                             <p className="text-gray-400 font-light">{edu.institution}</p>
                        </div>
                     ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;