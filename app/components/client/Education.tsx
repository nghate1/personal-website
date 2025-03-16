'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-2xl mx-auto bg-gray-800/50 rounded-lg p-8 border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-colors ${isMobile ? 'cursor-pointer' : ''}`}
        >
          <div 
            className="flex items-center gap-4 mb-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="relative w-12 h-12 flex-shrink-0 bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-gray-600/30 ring-1 ring-gray-700/50">
              <Image
                src="/images/companies/umd.png"
                alt="University of Maryland logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 96px"
                priority
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white">University of Maryland - College Park</h3>
              <p className="text-gray-300">B.S. Computer Science</p>
            </div>
            <motion.div 
              className="sm:hidden text-gray-400"
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded || !isMobile ? "auto" : 0,
              opacity: isExpanded || !isMobile ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300">Aug 2020 – May 2024</p>
            <p className="text-gray-300 mt-2">GPA: 3.71/4.00</p>
            <div className="mt-4">
              <h4 className="font-medium mb-2 text-gray-200">Relevant Coursework:</h4>
              <p className="text-gray-300">
                Compilers, Advanced Data Structures, Parallel Computing (Graduate), 
                Discrete Math, Linear Algebra, Algorithms, Advanced Functional Programming
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
