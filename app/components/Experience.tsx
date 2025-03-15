import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Yext',
    title: 'Software Engineer Intern',
    date: 'May 2023 – Aug 2023',
    points: [
      'Worked with Listings, the premier product of the Yext platform that is responsible for synchronizing customer data across a vast network of publishers such as Google and Facebook.',
      'Configured a caching proxy and used it to tunnel FTP/SFTP requests to improve file exporting and receipt processing speeds by 30% and expanded publisher network for customers choosing to host their data in Europe.',
      'Created a new flow that allows small businesses to automatically match and verify their Yext entities to existing listings on Google and Facebook, simplifying and shortening the onboarding process for new customers.',
      'Utilized Apache Airflow to create DAGs that periodically delete stale logs and upsert new logs to Snowflake.'
    ]
  },
  {
    company: 'Appian',
    title: 'Software Engineer Intern',
    date: 'Jun 2022 – Aug 2022',
    points: [
      'On the cloud infrastructure team, I helped build and maintain the base layer of the Appian cloud platform.',
      'Developed an API that allows other teams to easily create new private servers, as well as control and isolate their connections to other private servers with a high level of granularity.',
      'Improved logging by using Ansible and Vector to aggregate and route GitLab runner logs to Grafana Loki, where it is more accessible, easily queried, and graphically represented.',
      'Implemented a tool to detect spending anomalies across the cloud platform using AWS CloudFormation, which helps Appian identify high costs and save money.'
    ]
  },
  {
    company: 'University of Maryland Fellows',
    title: 'Full Stack Developer',
    date: 'May 2021 – May 2024',
    points: [
      'Developed a new administrative portal using React.js, enabling program managers to manage student applications and profiles more efficiently.',
      'Implemented Docker to streamline the development environment, reducing setup time for new employees by eliminating the need for manual installation of PHP, XAMPP, databases, Node.js, and npm packages.',
      'Standardized team databases using Prisma, ensuring consistency and synchronization across development environments through schema definition, automated migrations, and database seeding.',
      'Migrated the project to Next.js and automated deployments with Vercel, improving performance, simplifying deployment, and enabling continuous integration.',
      'Performed routine website maintenance, including publishing new content and adding functionality to meet evolving needs.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-lg text-gray-800 mt-1">{exp.company}</p>
              <p className="text-gray-600 mt-1">{exp.date}</p>
              <ul className="mt-4 space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
