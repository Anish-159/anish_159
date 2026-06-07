import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import axios from './api/axios'
import { motion, AnimatePresence } from 'framer-motion'

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [authLoading, setAuthLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    const fetchMe = async () => {
      if (!token) { setUser(null); setAuthLoading(false); return }
      try {
        setAuthLoading(true)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await axios.get('/me')
        if (mounted) setUser(res.data.user)
      } catch (err) {
        if (mounted) { setUser(null); setToken(null); localStorage.removeItem('token'); delete axios.defaults.headers.common['Authorization'] }
      } finally {
        if (mounted) setAuthLoading(false)
      }
    }
    fetchMe()
    return () => { mounted = false }
  }, [token])

  const login = (tok) => { setToken(tok); localStorage.setItem('token', tok); }
  const logout = () => { setToken(null); setUser(null); localStorage.removeItem('token'); delete axios.defaults.headers.common['Authorization']; navigate('/') }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, authLoading }}>
      <div className="min-h-screen">
        <nav className="py-4 container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Korean AI Academy</Link>
          <div className="space-x-4">
            {user ? (
              <button onClick={logout} className="px-4 py-2 rounded bg-accent-blue text-black font-semibold">Logout</button>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 rounded bg-transparent border border-gray-700">Login</Link>
                <Link to="/signup" className="px-4 py-2 rounded bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold">Signup</Link>
              </>
            )}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </AuthContext.Provider>
  )
}

export default App
