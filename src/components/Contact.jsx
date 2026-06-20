import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code,Mail, Briefcase, ExternalLink } from 'lucide-react';
import portfolioData from '../data/data.json';

export default function Contact() {
  const { site_metadata } = portfolioData;

  return (
    <section className="p-8 bg-ivory">
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="w-8 h-8 text-leaf" strokeWidth={2} />
        <h2 className="text-3xl font-bold text-leaf">
          Direct Connect (Contact)
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto border-2 border-leaf bg-white rounded-lg overflow-hidden shadow-md"
      >
        {/* Fake Terminal Header */}
        <div className="bg-sand px-4 py-2 border-b border-leaf flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-leaf-light">WAF VERIFICATION</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="p-8 text-center">
          <p className="font-mono text-leaf mb-6">
             Analyzing request origin... <br/>
             Human verified. Access granted.
          </p>

          <a 
            href="mailto:mokshithsaigadela@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-leaf text-ivory font-bold rounded-lg hover:bg-leaf-light transition-colors mb-8"
          >
            <Mail className="w-5 h-5" /> Initialize Handshake (Email Me)
          </a>

          <div className="flex justify-center gap-6 pt-6 border-t border-sand">
            <a href={`https://${site_metadata.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-leaf font-medium transition-colors">
            <Code className="w-5 h-5" /> GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a href={`https://${site_metadata.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-leaf font-medium transition-colors">
            <Briefcase className="w-5 h-5" /> LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}