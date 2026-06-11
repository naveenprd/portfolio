import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer id="contact" className="bg-dark text-light pt-32 pb-12 relative overflow-hidden">
        {/* Giant Background Text */}
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
            <h1 className="text-[20vw] font-bold font-display leading-none whitespace-nowrap text-white">
                SAY HELLO
            </h1>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          
          <div className="w-full">
            <p className="text-accent text-xs font-mono uppercase tracking-widest mb-8">Initiate Protocol</p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="block text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-bold hover:text-accent transition-colors duration-300 leading-[0.9] tracking-tighter cursor-hover break-words"
            >
              LET'S TALK
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
             <div className="md:col-span-2">
                <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-4">Status</h4>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <p className="text-sm font-medium text-light">Available for new opportunities</p>
                </div>
             </div>
             <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-4">Connect</h4>
                <div className="flex flex-col gap-2">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-accent transition-colors cursor-hover">{CONTACT_INFO.email}</a>
                    <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors cursor-hover">LinkedIn</a>
                    <button onClick={handleCopyUrl} className="text-sm text-left hover:text-accent transition-colors cursor-hover">
                      {copied ? <span className="text-accent">URL copied!</span> : 'Website'}
                    </button>
                </div>
             </div>
             <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-4">Coordinates</h4>
                <p className="text-sm text-gray-400">{CONTACT_INFO.location}</p>
             </div>
        </div>

        <div className="flex justify-between items-center pt-24 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
          <p>Naveen Manickam &copy; {new Date().getFullYear()}</p>
          <p>System Online</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;