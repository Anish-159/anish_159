import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { motion } from 'framer-motion'

export default function Dashboard(){
  const { user } = useContext(AuthContext)

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#071026] p-6 rounded-2xl shadow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Welcome{user ? `, ${user.email.split('@')[0]}` : ''}</h2>
            <p className="text-gray-400">Level up your Korean — track XP, complete lessons, and chat with the AI tutor.</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">XP</div>
            <div className="text-2xl font-bold">{user?.xp ?? 0}</div>
            <div className="text-sm text-gray-400">Level {user?.level ?? 1}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-gradient-to-r from-accent-blue to-accent-purple text-black">
            <h3 className="font-bold">Hangul Academy</h3>
            <p className="text-sm text-gray-800">Foundational lessons for reading and writing.</p>
          </div>
          <div className="p-4 rounded bg-[#071428]">
            <h3 className="font-bold">Vocabulary</h3>
            <p className="text-sm text-gray-400">SRS-backed vocabulary practice.</p>
          </div>
          <div className="p-4 rounded bg-[#071428]">
            <h3 className="font-bold">Grammar</h3>
            <p className="text-sm text-gray-400">Guided explanations and exercises.</p>
          </div>
          <div className="p-4 rounded bg-[#071428]">
            <h3 className="font-bold">Speaking Practice</h3>
            <p className="text-sm text-gray-400">Practice conversations with AI prompts.</p>
          </div>
          <div className="p-4 rounded bg-[#071428]">
            <h3 className="font-bold">AI Tutor</h3>
            <p className="text-sm text-gray-400">Interactive tutor coming soon — UI placeholder.</p>
          </div>
          <div className="p-4 rounded bg-[#071428]">
            <button className="w-full py-3 rounded bg-gradient-to-r from-accentBlue to-accentPurple text-black font-semibold">Continue Learning</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
