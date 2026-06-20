import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Settings, Rocket, ArrowRight, Code } from 'lucide-react';
import portfolioData from '../data/data.json';

export default function Projects() {
  const { projects } = portfolioData;

  // Animation variants for the pipeline steps
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="p-2 bg-ivory">
      <div className="flex items-center gap-3 mb-10">
        <GitCommit className="w-8 h-8 text-leaf" strokeWidth={2} />
        <h2 className="text-3xl font-bold text-leaf">
          Production Deployments (Projects)
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            
            {/* Project Header */}
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              {project.github_link && (
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-leaf-light hover:text-leaf transition-colors"
                >
                  <Code className="w-4 h-4" /> View Source
                </a>
              )}
            </div>

            {/* CI/CD Pipeline Visual */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* Stage 1: Commit */}
              <motion.div variants={stepVariants} className="p-5 border border-sand bg-white rounded-lg shadow-sm relative">
                <div className="flex items-center gap-2 mb-3 text-leaf">
                  <GitCommit className="w-5 h-5" />
                  <span className="font-mono font-semibold text-sm">STAGE: COMMIT</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.concept}</p>
                {/* Connecting Arrow for Desktop */}
                <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-sand w-6 h-6" />
              </motion.div>

              {/* Stage 2: Build */}
              <motion.div variants={stepVariants} className="p-5 border border-sand bg-white rounded-lg shadow-sm relative">
                <div className="flex items-center gap-2 mb-3 text-yellow-600">
                  <Settings className="w-5 h-5" />
                  <span className="font-mono font-semibold text-sm">STAGE: BUILD</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.architecture}</p>
                <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-sand w-6 h-6" />
              </motion.div>

              {/* Stage 3: Deploy */}
              <motion.div variants={stepVariants} className="p-5 border-2 border-leaf bg-beige rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3 text-leaf">
                  <Rocket className="w-5 h-5" />
                  <span className="font-mono font-semibold text-sm">STAGE: DEPLOYED</span>
                </div>
                <p className="text-leaf-light font-medium text-sm leading-relaxed">{project.impact}</p>
              </motion.div>
            </motion.div>

            {/* Visual separator line between projects */}
            <div className="w-full h-[1px] bg-sand mt-12"></div>
          </div>
        ))}
      </div>
    </section>
  );
}