"use client"

import { useState, useEffect, useRef } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { ShikhboIcon, ChevronDownIcon } from "../Icons/Icons"
import { LogIn } from "lucide-react"
import StartLearningButton from "../ui/Buttons/StartLearningBtn"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)

  // Handle scroll event to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

/*************  ✨ Windsurf Command ⭐  *************/
/*******  fa6a3ed8-ca32-4fa5-a6fb-adcae7563b2d  *******/
  const handleSignIn = () => {
    navigate("/auth")
  }

  const navItems = [
    { name: "Chat", path: "/chat", hasDropdown: false },
    { name: "Question Bank", hasDropdown: true },
    { name: "Resource", path: "/resources", hasDropdown: false },
    { name: "Pricing", path: "/pricing", hasDropdown: false },
    { name: "About", path: "/about", hasDropdown: false },
    { name: "Contact", path: "/contact", hasDropdown: false },
  ]

  return (
    <>
    {/* Background cover for the area above navbar */}

      <header 
      className={`fixed left-0 right-0 z-50 rounded-md flex justify-center transition-all duration-300  ease-in-out ${
        isScrolled ? "top-0" : "top-6"
      }`}
      >
        <div 
  className={`w-[90%] max-w-6xl bg-black text-white rounded-xl    transition-all duration-300 ${
    isScrolled ? "py-2 rounded-full " : "py-3 shadow-[0px_48px_100px_0px_rgba(255,255,255,0.15)]"
  }`}
>
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/" className="text-white mr-2" aria-label="Home">
                <ShikhboIcon className="w-6 h-6" />
              </NavLink>
              <NavLink to={'/'} className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                shikhbo.com
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-2 py-1 text-sm font-medium  tracking-wide flex items-center ${
                        isActive ? "text-white" : "text-gray-300 hover:text-white"
                      }`
                    }
                    aria-expanded={item.hasDropdown ? "false" : undefined}
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDownIcon className="ml-1 w-4 h-4" />}
                  </NavLink>
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-1 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2 px-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <NavLink
                          to={`/Question-bank/ssc`}
                          className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                          }
                          role="menuitem"
                        >
                          SSC
                        </NavLink>
                        <NavLink
                          to={`/Question-bank/hsc`}
                          className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                          }
                          role="menuitem"
                        >
                          HSC
                        </NavLink>
                        <NavLink
                          to={`/Question-bank/admission`}
                          className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                          }
                          role="menuitem"
                        >
                          Subject Questions
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* User icon */}
              <NavLink
               to={'/auth?action=signin'}
                className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors"
                aria-label="User account"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </NavLink>

              
                <NavLink to={'/auth?action=signup'} className="text-sm "><StartLearningButton /></NavLink>
             

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-white hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0" : "top-3"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Side Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <ShikhboIcon className="w-6 h-6" />
              <span className="font-bold text-lg text-white  tracking-wide">SHIKHBO</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-white hover:bg-gray-800"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="p-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-800 pb-2 mb-2 last:border-b-0">
                  {!item.hasDropdown ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-3 px-3 rounded-md text-base font-medium  transition-colors ${
                          isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <MobileAccordion
                      title={item.name}
                      path={item.path}
                      isActive={location.pathname.includes(item.path)}
                      onLinkClick={() => setMobileMenuOpen(false)}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-gray-800">
            <span
              onClick={handleSignIn}
              className="w-full bg-white text-black py-2 rounded-md font-medium text-center "
            >
             <StartLearningButton />
            </span>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

// Mobile Accordion Component for dropdown menus
const MobileAccordion = ({ title, path, isActive, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className={`flex items-center justify-between w-full py-3 px-3 rounded-md text-base font-medium  ${
          isActive ? "bg-transparent text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 py-2 space-y-1">
          <NavLink
            to={`/Question-bank/ssc`}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md text-sm ${
                isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
            onClick={onLinkClick}
          >
            SSC
          </NavLink>
          <NavLink
            to={`/Question-bank/hsc`}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md text-sm ${
                isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
            onClick={onLinkClick}
          >
            HSC
          </NavLink>
          <NavLink
            to={`/Question-bank/admission`}
            className={({ isActive }) =>
              `block py-2 px-3 rounded-md text-sm ${
                isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
            onClick={onLinkClick}
          >
            Subject Questions
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar