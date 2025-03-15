import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold">University of Maryland - College Park</h3>
          <p className="text-gray-600 mt-2">B.S. Computer Science</p>
          <p className="text-gray-600">Aug 2020 – May 2024</p>
          <p className="text-gray-600 mt-2">GPA: 3.71/4.00</p>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Relevant Coursework:</h4>
            <p className="text-gray-600">
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
