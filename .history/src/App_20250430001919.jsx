"use client"

import { useState, useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {AuthContext} from "./Context/UserContext.jsx"
import Navbar from "./components/shared/Navbar.jsx"
import AuthPage from "./pages/auth/Auth.jsx"
import Home from "./pages/Common/Home.jsx"
import ErrorPage from './pages/Error/Error.jsx'
import PricingPage from "./pages/pricing/Pricing.jsx"
import Footer from "./components/shared/Footer.jsx"
import About from "./pages/About.jsx"


// Layout component that includes the Navbar
const Layout = ({ scrollY, children }) => {
  return (
    <>
      <Navbar scrollY={scrollY} />
      <main className="pt-16">
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

function App() {
  
 
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
     
      <BrowserRouter>
        <Routes>
          {/* Auth page without Navbar */}
           {/* <Route path="/auth" element={<AuthPage />} />  */}
          
          {/* All other routes with Navbar */}
          <Route path="/" element={
            <Layout scrollY={scrollY}>
              <Home scrollY={scrollY} />
            </Layout>
          } />
          
          <Route path="/pricing" element={
            <Layout scrollY={scrollY}>
              <PricingPage />
            </Layout>
          } />
          
          {/* Add other routes with Layout */}
          <Route path="/about" element={
            <Layout scrollY={scrollY}>
              <div>About Page</div>
            </Layout>
          } />
           
          
          {/* ... other routes with Layout ... */}
          
          {/* Catch-all route for non-existent pages */}
          <Route path="*" element={
            <Layout scrollY={scrollY}>
              <ErrorPage />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
  
  )
}

export default App