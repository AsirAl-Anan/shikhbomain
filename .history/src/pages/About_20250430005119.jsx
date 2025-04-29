import React, { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  useEffect(()=>{
    scrollTo(0,0)
  })
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Syed Asir Al Anan Bin Akber',
      position: 'Ceo and Founder, Shikhbo',
      image: '/team-member-1.jpg',
    },
    {
      id: 2,
      name: 'Tanzir Imam',
      position: 'Cto and Co-Founder, BanglaLearn',
      image: '/team-member-2.jpg',
    },
    {
      id: 3,
      name: 'Shanjid Anime',
      position: 'Cpo and Co-Founder, Shikhbo',
      image: '/team-member-3.jpg',
    },
    {
      id: 4,
      name: 'Farhan Rahman',
      position: 'Language Education Expert, BanglaLearn',
      image: '/team-member-1.jpg',
    },
    {
      id: 5,
      name: 'Tanisha Islam',
      position: 'Technology Integration Specialist, BanglaLearn',
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
              <h1 
                id="hero-title" 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-element transition-all duration-1000 ${isVisible['hero-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                Empowering Bangladeshi Students Through AI-Powered Learning
              </h1>
              <p 
                id="hero-desc" 
                className={`text-gray-300 text-lg mb-8 reveal-element transition-all duration-1000 delay-300 ${isVisible['hero-desc'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                At BanglaLearn AI, we're revolutionizing education for students across Bangladesh with personalized AI tutoring that adapts to individual learning styles. Our platform bridges educational gaps by providing accessible, high-quality guidance in Bengali and English.
              </p>
            </div>
            <div 
              id="hero-image" 
              className={`relative reveal-element transition-all duration-1000 delay-500 ${isVisible['hero-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-xl max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    <h3 className="font-medium">BanglaLearn AI</h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800">
                    <span className="text-gray-300">✓</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-400">Learning Dashboard</p>
                </div>
                <div className="bg-gray-800 rounded p-3 mb-3">
                  <div className="flex justify-between items-center">
                    <p>Today's Lessons</p>
                    <span>▼</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Mathematics, Science, English, Bengali</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">AI Tutor</span> 
                      <span className="text-gray-500"> solved your math problem</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">Homework Assistant</span> 
                      <span className="text-gray-500"> reviewed your essay</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <p className="text-sm">
                      <span className="text-gray-300">Practice Quiz</span> 
                      <span className="text-gray-500"> is ready for you</span>
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
              className="absolute w-1 h-1 bg-green-500 rounded-full"
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
          <h2 
            id="why-choose-title" 
            className={`text-4xl md:text-5xl font-bold mb-6 reveal-element transition-all duration-1000 ${isVisible['why-choose-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Why Choose Shikhbo AI?
          </h2>
          <p 
            id="why-choose-desc" 
            className={`text-gray-300 text-lg reveal-element transition-all duration-1000 delay-300 ${isVisible['why-choose-desc'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Unlock your full academic potential with our AI tutoring platform designed specifically for Bangladeshi students, addressing local curriculum needs and learning challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              id="feature-1" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 ${isVisible['feature-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bilingual Support</h3>
              <p className="text-gray-400">
                Full tutoring in both Bengali and English, ensuring students can learn in their preferred language.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              id="feature-2" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 delay-150 ${isVisible['feature-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bangladesh Curriculum Aligned</h3>
              <p className="text-gray-400">
                Content specifically designed to match Bangladesh's national curriculum requirements for all grade levels.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              id="feature-3" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 delay-300 ${isVisible['feature-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Offline Capabilities</h3>
              <p className="text-gray-400">
                Access learning materials offline, ideal for students in areas with limited internet connectivity.
              </p>
            </div>

            {/* Feature 4 */}
            <div 
              id="feature-4" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 delay-150 ${isVisible['feature-4'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptive Learning</h3>
              <p className="text-gray-400">
                Our AI adjusts to each student's pace and learning style, creating a personalized educational journey.
              </p>
            </div>

            {/* Feature 5 */}
            <div 
              id="feature-5" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 delay-300 ${isVisible['feature-5'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Learning Support</h3>
              <p className="text-gray-400">
                Get answers to your questions any time of day, making it easier to study on your own schedule.
              </p>
            </div>

            {/* Feature 6 */}
            <div 
              id="feature-6" 
              className={`p-6 border-t border-gray-800 reveal-element transition-all duration-700 delay-450 ${isVisible['feature-6'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Exam Preparation</h3>
              <p className="text-gray-400">
                Specialized modules for SSC, HSC, and university entrance exams to help students achieve their best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <h2 
            id="team-title" 
            className={`text-4xl md:text-5xl font-bold mb-16 text-center reveal-element transition-all duration-1000 ${isVisible['team-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Our Team
          </h2>
          
          <div 
            id="team-carousel" 
            className={`relative reveal-element transition-all duration-1000 delay-300 ${isVisible['team-carousel'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
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
                              src={member.image || "/api/placeholder/400/320"} 
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
                          <Linkedin className="text-white" size={20} />
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