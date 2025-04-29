import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Hero = ({ scrollY = 0 }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const form = formRef.current;

    if (title && subtitle && form) {
      // Parallax effect
      title.style.transform = `translateY(${scrollY * 0.2}px)`;
      subtitle.style.transform = `translateY(${scrollY * 0.1}px)`;

      // Fade effect
      const opacity = Math.max(1 - scrollY / 500, 0);
      title.style.opacity = opacity;
      subtitle.style.opacity = opacity;
      form.style.opacity = opacity;
    }
  }, [scrollY]);

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050E30] to-[#0D1743]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Device mockups - Shows first on small/medium screens */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative max-w-md mx-auto lg:max-w-full">
              {/* Desktop mockup */}
              <div className="relative z-20 bg-gray-800 rounded-xl shadow-xl p-2 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <div className="bg-black rounded-xl p-1">
                  <div className="flex items-center justify-start p-1 border-b border-gray-700 mb-1">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="rounded bg-gray-900 aspect-video overflow-hidden">
                    <img 
                      src="https://placehold.co/600x400" 
                      alt="Desktop Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile mockup - positioned to the right and behind */}
              <div className="absolute z-30 -bottom-4 md:-bottom-6 right-0 md:-right-4 lg:right-8 w-24 sm:w-28 md:w-32 lg:w-40 bg-gray-800 rounded-2xl shadow-xl p-1 h-auto">
                <div className="bg-black rounded-xl overflow-hidden">
                  <div className="w-full h-3 md:h-4 bg-black rounded-t-xl flex justify-center">
                    <div className="w-10 md:w-16 h-1 mt-1 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="aspect-[9/19] overflow-hidden bg-gray-900">
                    <img 
                      src="https://placehold.co/300x600" 
                      alt="Mobile App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Tablet mockup - positioned to the left and in front */}
              <div className="absolute z-30 -bottom-6 md:-bottom-10 left-0 md:-left-4 lg:left-8 w-28 sm:w-32 md:w-40 lg:w-48 bg-gray-800 rounded-2xl shadow-xl p-1 md:p-1.5">
                <div className="bg-black rounded-xl overflow-hidden">
                  <div className="w-full h-1.5 md:h-2 bg-black rounded-t-xl"></div>
                  <div className="aspect-[3/4] overflow-hidden bg-gray-900">
                    <img 
                      src="https://placehold.co/400x500" 
                      alt="Tablet App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content - Shows second on small/medium screens */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ease-out bg-gradient-to-b from-gray-100 to-gray-700 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 15px rgba(255,255,255,0.2)",
                transform: "translateY(0)",
              }}
            >
              Redefining academic and admission journey
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                shikhbo.ai platform
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 transition-all duration-300 ease-out"
              style={{ transform: "translateY(0)" }}
            >
              Join the world's most innovative AI-powered learning platform.
            </p>

            <div
              ref={formRef}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 max-w-2xl mx-auto lg:mx-0 transition-all duration-300 ease-out"
            >
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-white bg-opacity-10 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              /> */}

              <button onClick={handleOnclick} className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300">
                Sign up for shikhbo.ai
              </button>

              <button onClick={handleOnclick} className="w-full sm:w-auto bg-transparent border border-gray-300 hover:border-gray-500 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Try AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;