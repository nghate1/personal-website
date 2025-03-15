'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
              Education
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
