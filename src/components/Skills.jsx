import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Cloud, Database, Wrench, Cpu } from 'lucide-react';
import portfolioData from '../data/data.json';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Languages", icon: Terminal, data: skills.languages },
    { title: "Cloud & DevOps", icon: Cloud, data: skills.cloud_and_devops },
    { title: "Web & Backend", icon: Globe, data: skills.web_and_backend },
    { title: "Databases", icon: Database, data: skills.databases },
    { title: "Tools & OS", icon: Wrench, data: skills.tools }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="w-8 h-8 text-leaf" strokeWidth={2} />
        <h2 className="text-3xl font-bold text-leaf">
          System Dependencies (Tech Stack)
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`p-6 bg-white border-2 border-sand rounded-lg shadow-sm ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4 border-b border-sand pb-3">
              <category.icon className="w-5 h-5 text-leaf-light" />
              <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.data.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className="px-3 py-1 bg-sand/30 text-leaf font-medium text-sm rounded-md border border-sand"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}