import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedCard from '../components/AnimatedCard'
import { motion } from 'framer-motion'

export default function Landing(){
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Korean AI Academy</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6">Learn Korean from Zero to Fluent — bite-sized lessons, AI tutor, and adaptive practice.</p>
          <div className="space-x-4">
            <Link to="/login" className="px-5 py-3 rounded bg-transparent border border-gray-700">Login</Link>
            <Link to="/signup" className="px-5 py-3 rounded bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold">Signup</Link>
          </div>
        </div>

        <div>
          <AnimatedCard />
        </div>
      </div>
    </div>
  )
}
