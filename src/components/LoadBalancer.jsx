import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/data.json';

export default function LoadBalancer({ setActiveRoute }) {
  const routes = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section className="py-12 flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="inline-block px-4 py-2 bg-sand rounded-full mb-4 shadow-sm">
          <span className="text-sm font-mono text-leaf-light font-semibold">
            [ 🟢 TARGET GROUP: HEALTHY ]
          </span>
        </div>
        <p className="text-lg text-leaf-light font-mono tracking-tight">
           {portfolioData.infrastructure_copy.load_balancer_prompt}
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {routes.map((route, index) => (
          <motion.button
            key={route.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            // Utilizing CSS Variables so Framer Motion respects your theme
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-leaf)", color: "var(--color-ivory)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveRoute(route.id)}
            className="px-8 py-4 bg-white border-2 border-leaf text-leaf font-semibold rounded-lg shadow-sm cursor-pointer transition-colors duration-200"
          >
            {route.label}
          </motion.button>
        ))}
      </div>

    </section>
  );
}