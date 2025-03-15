'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-24">
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
      </div>
    </section>
  );
};

export default Hero;
