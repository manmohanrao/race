import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="text-3xl font-bold text-purple-500">{'>'}</div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition">
            <span>What we do</span>
            <span className="text-xs">▼</span>
          </div>
          <div className="cursor-pointer hover:text-purple-400 transition">What we think</div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition">
            <span>Who we are</span>
            <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition">
            <span>Careers</span>
            <span className="text-xs">▼</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-purple-400 transition">🔍</button>
          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400 transition">
            <span>🌐</span>
            <span>India</span>
            <span className="text-xs">▼</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-8 md:px-16 py-20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex-1">
          {/* Main Heading */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              TOGETHER WE
            </h1>
            <h1 className="text-6xl md:text-8xl font-black leading-tight inline-block">
              <span>REIN</span>
              <span className="text-purple-500 inline-block mx-2">{'>'}</span>
              <span>ENTED</span>
            </h1>
          </div>

          {/* Decorative element */}
          <div className="text-6xl font-light opacity-40 mb-8">"</div>
        </div>

        {/* Right side content */}
        <div className="relative z-10 flex-1 md:pl-8">
          {/* Purple accent line */}
          <div className="w-12 h-1 bg-purple-500 mb-8"></div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Shaping tomorrow, today
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
            In a world of constant change, reinvention is a continuous strategy. That's why we work with organizations to rewrite the rules of growth, innovation and resilience.
          </p>

          <button className="flex items-center gap-3 text-white font-semibold hover:text-purple-400 transition group">
            <span>See what we do</span>
            <span className="bg-purple-500 p-2 group-hover:bg-purple-600 transition">{'>'}</span>
          </button>
        </div>

        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mobile menu toggle hint */}
      <div className="md:hidden fixed bottom-8 left-8 text-purple-500 text-2xl">≡</div>
    </div>
  );
}
