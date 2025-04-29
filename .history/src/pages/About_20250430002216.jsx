import React, { useState } from 'react';
im
import { Linkedin as  FaLinkedin } from 'lucide-react';
const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Nicolás Martínez',
      position: 'CEO, Amazing Company',
      image: '/team-member-1.jpg',
    },
    {
      id: 2,
      name: 'Nicolás Martínez',
      position: 'CEO, Amazing Company',
      image: '/team-member-2.jpg',
    },
    {
      id: 3,
      name: 'Nicolás Martínez',
      position: 'CEO, Amazing Company',
      image: '/team-member-3.jpg',
    },
    {
      id: 4,
      name: 'Nicolás Martínez',
      position: 'CEO, Amazing Company',
      image: '/team-member-1.jpg',
    },
    {
      id: 5,
      name: 'Nicolás Martínez',
      position: 'CEO, Amazing Company',
      image: '/team-member-2.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 3 : prev - 1));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Developers with Easy Communication
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                At NotifyHub, we simplify team communication through flexible multi-channel notifications. We empower developers with tools to automate workflows, integrate with your existing systems, and ensure your team stays in sync.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-xl max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    <h3 className="font-medium">NotifyHub</h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800">
                    <span className="text-gray-300">✉</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-400">Notification settings</p>
                </div>
                <div className="bg-gray-800 rounded p-3 mb-3">
                  <div className="flex justify-between items-center">
                    <p>Comment mentions</p>
                    <span>▼</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">In-App, Email, SMS, Push, Chat</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">Wayne Bradshaw</span> 
                      <span className="text-gray-500"> mentioned you in slack</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">Dan Norman</span> 
                      <span className="text-gray-500"> mentioned you in notion</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">Wayne Wayne</span> 
                      <span className="text-gray-500"> mentioned you in jira</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background dots/particles effect */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose NotifyHub?</h2>
          <p className="text-gray-300 text-lg">
            Unlock effortless, reliable communication for your team with NotifyHub, designed to streamline your notifications and enhance real-time collaboration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Built for Developers</h3>
              <p className="text-gray-400">
                Custom-built for developers, enabling easy integration and flexibility.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customizable Workflows</h3>
              <p className="text-gray-400">
                Flexibly adapt workflows to meet your team's unique needs, ensuring efficient task management.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integrations</h3>
              <p className="text-gray-400">
                Effortlessly connect with over 200 platforms to enhance functionality and streamline processes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Updates</h3>
              <p className="text-gray-400">
                Keep your team informed with real-time notifications and alerts, ensuring nothing is missed.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Communication</h3>
              <p className="text-gray-400">
                Automate notifications across various channels, saving time and reducing manual effort.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 border-t border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable and Reliable</h3>
              <p className="text-gray-400">
                A platform designed to scale with your team, ensuring consistent performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Team</h2>
          
          <div className="relative">
            {/* Team Carousel */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" 
                   style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
                {teamMembers.map((member) => (
                  <div key={member.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <div className="aspect-w-1 aspect-h-1 relative">
                        <div className="w-full h-80 bg-gray-800 relative overflow-hidden">
                          {/* Placeholder for team member image */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                              src={member.image || "/placeholder.svg"} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Background dots effect */}
                          <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 50 }).map((_, i) => (
                              <div 
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                  top: `${Math.random() * 100}%`,
                                  left: `${Math.random() * 100}%`,
                                  opacity: Math.random() * 0.3 + 0.1,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-400 text-sm">{member.position}</p>
                        </div>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors">
                          <FaLinkedin className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;