import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <h1 className="text-6xl font-bold leading-tight">
              Let's get<br />in touch
            </h1>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">
                Don't be afraid to<br />say hello with us!
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>+(2) 578-385-379</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>hello@slabs.com</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Office</p>
                  <p>230 Norman Street New York,</p>
                  <p>QC (USA) H8R 1A1</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-1 hover:underline"
                  >
                    See on Google Map
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-[#111] p-8">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interested in"
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-gray-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 transition duration-300"
              >
                Send to us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;