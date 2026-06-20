import React from 'react';
import portfolioData from '../data/data.json'; 
import { Server } from 'lucide-react'; // Industry-standard icon library

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="p-8 bg-ivory"> 
      <div className="flex items-center gap-3 mb-6">
        <Server className="w-8 h-8 text-leaf" strokeWidth={1.5} />
        <h2 className="text-3xl font-bold text-leaf">
          Experience Pipeline
        </h2>
      </div>
      
      <div className="space-y-6">
        {experience.map((job) => (
          <div 
            key={job.id} 
            className="p-6 border border-sand bg-white rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
            <p className="text-md text-leaf-light font-medium">{job.company} | {job.duration}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{job.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech_stack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-beige text-leaf-light text-sm rounded-full" 
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}