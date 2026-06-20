import React, { useState } from 'react'; 
import Experience from './components/Experience';
import LoadBalancer from './components/LoadBalancer';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import portfolioData from './data/data.json';
import { FileText } from 'lucide-react'; // 1. Import the icon

function App() {
  const [activeRoute, setActiveRoute] = useState(null);

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <header className="p-8 border-b border-sand text-center relative">
        <h1 className="text-5xl font-bold text-leaf tracking-tight">
          {portfolioData.hero.headline}
        </h1>
        <p className="text-xl text-leaf-light mt-4 font-medium mb-6">
          {portfolioData.hero.sub_headline}
        </p>
        
        {/* 2. THE ESCAPE HATCH: Resume Download Button */}
        <a 
          href="/resume.pdf" 
          download="Mokshith_Sai_Gadela_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-2 bg-sand text-leaf-light font-semibold rounded-full hover:bg-leaf hover:text-ivory transition-colors duration-300 text-sm"
        >
          <FileText className="w-4 h-4" /> Download Standard Resume
        </a>
      </header>

      <main className="max-w-5xl mx-auto py-6 px-4">
        <LoadBalancer setActiveRoute={setActiveRoute} activeRoute={activeRoute} />

        <div className="mt-12">
          {activeRoute === 'experience' && <Experience />}
          {activeRoute === 'projects' && <Projects />}
          {activeRoute === 'education' && <Education />}
          {activeRoute === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App;