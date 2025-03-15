'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nikhil Ghate
          </motion.h1>
          <motion.div
            className="mb-8 text-gray-300 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>nghate@umd.edu</p>
            <p>(732) 823-2950</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/nghate1" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/nghate1" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-8 h-8 text-gray-300"
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5, 
              ease: "easeInOut"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
