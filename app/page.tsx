import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section */}
      <section className="bg-white mx-4 md:mx-8 my-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">8+</h3>
            <p className="text-gray-600 text-center md:text-left font-semibold">Years in Tech Education</p>
          </div>
          
          <div className="hidden md:block border-l border-gray-300"></div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1000+</h3>
            <p className="text-gray-600 text-center md:text-left font-semibold">Mid and senior executives trained</p>
          </div>
          
          <div className="hidden md:block border-l border-gray-300"></div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">50+</h3>
            <p className="text-gray-600 text-center md:text-left font-semibold">Senior Leaders as Mentors</p>
          </div>
          
          <div className="hidden md:block border-l border-gray-300"></div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">100+</h3>
            <p className="text-gray-600 text-center md:text-left font-semibold">Partner Companies</p>
          </div>
          
          <div className="hidden md:block border-l border-gray-300"></div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1000+</h3>
            <p className="text-gray-600 text-center md:text-left font-semibold">Career Transitions</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About RACE</h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              REVA Academy for Corporate Excellence (RACE) aims to develop visionary enterprise leaders for corporates through progressive and integrated learning capabilities.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              RACE offers best in class, specialized, techno-functional and interdisciplinary programs designed to suit the needs of working professionals. The pedagogy of each program incorporates social and experiential learning to build transformative proficiencies in every participant.
            </p>

            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Each of the programs is planned, designed and delivered by renowned corporate leaders and trainers and combines latest tools, technologies and skill sets which are in sync with the futuristic demands of the industry.
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">👁️</span>
                  <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Become the Most Preferred Partner for Training for fast rising executives and organizations
                </p>
              </div>

              <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Developing Visionary Enterprise Leaders for Corporates through Progressive and Integrated Learning Capabilities
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Key Features Section */}
            <div className="border border-gray-300 rounded-2xl p-8 mb-8 h-fit">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Blended mode with lab-based training and 24/7 online support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Learning Management System with industry certifications</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Certifications from REVA University and industry partners</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Lateral placement support and mentoring by senior industry leaders</span>
                </li>
              </ul>
            </div>

            {/* Building Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1486718448742-163732cd3d3e?w=600&q=80"
                alt="RACE Building - Modern Architecture"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
