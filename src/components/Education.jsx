import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import portfolioData from '../data/data.json';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section className="p-2 bg-ivory">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-leaf" strokeWidth={2} />
        <h2 className="text-3xl font-bold text-leaf">
          Knowledge Base (Education)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* University Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 border-2 border-leaf bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4 text-leaf-light">
            <span className="font-mono font-bold text-sm tracking-wider">PRIMARY DATACENTER</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{education.university}</h3>
          <p className="text-lg font-medium text-leaf-light mt-2">{education.degree}</p>
          <div className="mt-4 flex gap-4 text-sm font-mono text-gray-500">
            <span>GRADUATION: {education.grad_year}</span>
            <span>|</span>
            <span>GPA: {education.gpa}</span>
          </div>
        </motion.div>

        {/* Certifications Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-sand bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4 text-leaf-light">
            <span className="font-mono font-bold text-sm tracking-wider">VERIFIED CREDENTIALS</span>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3">
                <Award className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}