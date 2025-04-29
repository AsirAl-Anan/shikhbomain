import React from 'react'
import Navbar from "../../components/shared/Navbar"
import Hero from "../../components/Home/Hero"
import CodeSection from "../../components/Home/Preview"
import Features from "../../components/Home/Features"
import ReviewsSection from '../../components/Reviews/ReviewSection'
import Whyus from '../../components/Home/Whyus'
 import {Helmet} from "react-helmet";
const Home = ({ scrollY }) => {

  
  return (
    <>
     <Helmet> 
        <title>Shikhbo - Learn with Ai</title>
        <meta name="description" content="Learn programming with Shikhbo. Join us to enhance your coding skills." />
        <meta name="keywords" content="programming, coding, learn, shikhbo" />
        <meta name="author" content="Shikhbo Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

       </Helmet>     
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#161b22]  text-white overflow-hidden transition-colors duration-300">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero scrollY={scrollY} />
       
        <CodeSection scrollY={scrollY}  />
        {/* Add a check to make sure Features is always visible */}
        <Features scrollY={scrollY} />
        <ReviewsSection />
      </main>
    </div>
    </>
   
  )
}

export default Home