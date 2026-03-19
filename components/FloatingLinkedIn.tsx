import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../data';

const FloatingLinkedIn = () => {
  // Ensure the URL has https:// prefix for external linking
  const linkedinUrl = CONTACT_INFO.linkedin.startsWith('http') 
    ? CONTACT_INFO.linkedin 
    : `https://${CONTACT_INFO.linkedin}`;

  return (
    <motion.a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-accent text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-shadow cursor-hover"
      aria-label="LinkedIn Profile"
    >
      <svg width="24" height="24" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M10.3725 46.285H0.762133V15.368H10.3725V46.285Z" />
        <path d="M34.8422 14.5985C44.5721 14.5985 46.3656 20.9991 46.3656 29.325L46.3617 46.285H36.7621V31.2508C36.7621 27.6658 36.698 23.0506 31.769 23.0506C26.7691 23.0507 26.0043 26.9571 26.0043 30.9901V46.284H16.4037V15.368H25.6205V19.5926H25.7494C26.6717 18.0158 28.0047 16.7181 29.6059 15.8387C31.207 14.9595 33.0168 14.5307 34.8422 14.5985Z" />
        <path d="M4.48284 0.107253C5.56347 -0.1079 6.68452 0.00218588 7.70256 0.423659C8.72029 0.845115 9.59036 1.55869 10.2026 2.47444C10.8149 3.39048 11.1418 4.4683 11.142 5.57014C11.1421 6.30159 10.998 7.02616 10.7182 7.70198C10.4383 8.37782 10.0283 8.99226 9.51116 9.5096C8.99396 10.0269 8.37934 10.4375 7.70354 10.7176C7.02781 10.9976 6.30314 11.1413 5.5717 11.1414C4.47 11.1416 3.39313 10.8149 2.47698 10.203C1.56082 9.59101 0.846078 8.72171 0.424242 7.70393C0.00244719 6.68615 -0.107815 5.56578 0.106859 4.48518C0.321623 3.40448 0.852295 2.41092 1.63127 1.63167C2.41009 0.852698 3.40254 0.322438 4.48284 0.107253Z" />
      </svg>
    </motion.a>
  );
};

export default FloatingLinkedIn;
