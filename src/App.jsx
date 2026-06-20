import React, { useState } from 'react'; 
import Experience from './components/Experience';
import LoadBalancer from './components/LoadBalancer';
import portfolioData from './data/data.json';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeRoute, setActiveRoute] = useState(null);

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <header className="p-8 border-b border-sand text-center">
        <h1 className="text-5xl font-bold text-leaf tracking-tight">
          {portfolioData.hero.headline}
        </h1>
        <p className="text-xl text-leaf-light mt-4 font-medium">
          {portfolioData.hero.sub_headline}
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-6 px-4">
        <LoadBalancer setActiveRoute={setActiveRoute} />

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