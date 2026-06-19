import React from 'react';
// 1. Import the JSON data
import portfolioData from '../data/data.json'; 

export default function Experience() {
  // 2. Extract the experience array from the data
  const { experience } = portfolioData;

  return (
    <section className="p-8 bg-[#FDFBF7]"> {/* Ivory background */}
      <h2 className="text-3xl font-bold text-[#2D4A22] mb-6"> {/* Leaf green text */}
        Experience Pipeline
      </h2>
      
      <div className="space-y-6">
        {/* 3. Map over the data to create cards */}
        {experience.map((job) => (
          <div 
            key={job.id} 
            className="p-6 border border-[#E8E5D9] bg-white rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
            <p className="text-md text-[#6B705C] font-medium">{job.company} | {job.duration}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{job.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech_stack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#F5F5DC] text-[#4A5D23] text-sm rounded-full" /* Beige pill, green text */
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