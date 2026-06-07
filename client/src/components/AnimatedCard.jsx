import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCard(){
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-[#071030] to-[#0b1220] shadow-lg"
    >
      <div className="p-6 bg-opacity-40 rounded-lg border border-gray-800">
        <h3 className="text-2xl font-bold mb-2">Start Learning Hangul</h3>
        <p className="text-gray-400 mb-4">Interactive lessons, spaced repetition vocabulary, and AI conversation practice.</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-[#071428] rounded">Hangul Academy</div>
          <div className="p-3 bg-[#071428] rounded">Vocabulary</div>
          <div className="p-3 bg-[#071428] rounded">Grammar</div>
          <div className="p-3 bg-[#071428] rounded">Speaking Practice</div>
        </div>
      </div>
    </motion.div>
  )
}
