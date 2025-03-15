'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Education = () => {
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
          className="max-w-2xl mx-auto bg-gray-800/50 rounded-lg p-8 border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
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
            <h3 className="text-xl font-semibold text-white">University of Maryland - College Park</h3>
          </div>
          <p className="text-gray-300 mt-2">B.S. Computer Science</p>
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
      </div>
    </section>
  );
};

export default Education;
