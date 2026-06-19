import React from 'react';
import Experience from './components/Experience';
import LoadBalancer from './components/LoadBalancer'; // 1. Import it
import portfolioData from './data/data.json';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <header className="p-8 border-b border-[#E8E5D9] text-center">
        <h1 className="text-5xl font-bold text-[#2D4A22] tracking-tight">
          {portfolioData.hero.headline}
        </h1>
        <p className="text-xl text-[#6B705C] mt-4 font-medium">
          {portfolioData.hero.sub_headline}
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-6 px-4">
        {/* 2. Render the Load Balancer */}
        <LoadBalancer />

        <div className="mt-12">
          <Experience />
        </div>
      </main>
    </div>
  );
}

export default App;