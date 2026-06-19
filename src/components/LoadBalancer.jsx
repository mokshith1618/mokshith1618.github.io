import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/data.json';

export default function LoadBalancer() {
  // These are the target destinations for our traffic
  const routes = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section className="py-12 flex flex-col items-center">
      
      {/* System Status Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="inline-block px-4 py-2 bg-[#E8E5D9] rounded-full mb-4 shadow-sm">
          <span className="text-sm font-mono text-[#4A5D23] font-semibold">
            [ 🟢 TARGET GROUP: HEALTHY ]
          </span>
        </div>
        <p className="text-lg text-[#6B705C] font-mono tracking-tight">
           {portfolioData.infrastructure_copy.load_balancer_prompt}
        </p>
      </motion.div>

      {/* Traffic Routing Nodes (Buttons) */}
      <div className="flex flex-wrap justify-center gap-6">
        {routes.map((route, index) => (
          <motion.button
            key={route.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            // Stagger the animation so they pop in one after another
            transition={{ duration: 0.4, delay: index * 0.15 }}
            // Interactive hover states
            whileHover={{ scale: 1.05, backgroundColor: "#2D4A22", color: "#FDFBF7" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border-2 border-[#2D4A22] text-[#2D4A22] font-semibold rounded-lg shadow-sm transition-colors duration-200"
          >
            {route.label}
          </motion.button>
        ))}
      </div>

    </section>
  );
}