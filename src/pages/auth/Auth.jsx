"use client"

import { useState } from "react"

import { ShikhboIcon } from "../../components/Icons/Icons"

import { motion } from "framer-motion"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"

export default function AuthPage() {
  const query = new URLSearchParams(useLocation().search);
  const action = query.get('action');
  const [activeTab, setActiveTab] = useState(action) // "signin" or "signup"
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row transition-colors duration-300 bg-gradient-to-br from-[#0a1428] to-[#0d1d3b]">
      {/* Left panel - Branding */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
        <div className="">
          <div className=" items-center">
            <div className="flex items-center space-x-3">
              <ShikhboIcon className="w-10 h-10 text-indigo-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                shikhbo.ai
              </span>
            </div>

            <button 
              onClick={()=>navigate(-1)}
              className="flex items-center text-gray-300 hover:text-indigo-400 my-4"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              <span>Back</span>
            </button>
          </div>

          <div className="mt-20 md:mt-32">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome back to your
              <br />
              <span className="text-indigo-400">learning journey</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Continue your personalized AI-powered education experience and unlock your potential.
            </motion.p>
          </div>
        </div>

        <div className="hidden md:block mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} shikhbo.ai, Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right panel - Auth forms and spotlight */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xl z-0"></div>

      
        <motion.div
          className="relative z-10 bg-gray-900 p-8 mr-[500px] rounded-2xl shadow-xl max-w-md mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tabs */}
          <div className="flex mb-6 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "signin"
                ? "bg-gray-700 text-indigo-400 shadow-sm"
                : "text-gray-400 hover:text-gray-200"
                }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "signup"
                ? "bg-gray-700 text-indigo-400 shadow-sm"
                : "text-gray-400 hover:text-gray-200"
                }`}
            >
              Sign Up
            </button>
          </div>

          {/* Sign In Form */}
          {activeTab === "signin" && (
            <>
              <SignInPage></SignInPage>

              

              <p className="mt-6 text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className="font-medium text-indigo-400 hover:underline"
                >
                  Sign up for free
                </button>
              </p>
            </>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <>
              <SignUpPage></SignUpPage>

            

              <p className="mt-6 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("signin")}
                  className="font-medium text-indigo-400 hover:underline"
                >
                  Sign in
                </button>
              </p>
            </>
          )}
        </motion.div>

        <div className="md:hidden mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} shikhbo.ai, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}