'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      'Java', 'C', 'Python', 'JavaScript', 'TypeScript', 'Ruby',
      'Rust', 'OCaml', 'SQL', 'PHP', 'HTML', 'CSS', 'MATLAB',
      'Terraform'
    ]
  },
  {
    title: 'Technologies',
    skills: [
      'Git', 'MS Office', 'LaTeX', 'Jupyter Notebook',
      'Pandas', 'NumPy', 'SciPy', 'React.js', 'AWS VPCs', 'AWS'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Technical Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-200 border border-gray-600"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
