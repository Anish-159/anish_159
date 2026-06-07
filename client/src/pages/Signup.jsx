import React, { useState, useContext } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault(); setError(null); setLoading(true)
    try {
      const res = await axios.post('/signup', { email, password })
      if (res.data.token) { login(res.data.token); navigate('/dashboard') }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-[#071026] p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Create your account</h2>
        <form onSubmit={submit} className="space-y-4">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-transparent border border-gray-700" />
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 rounded bg-transparent border border-gray-700" />
          {error && <div className="text-red-400">{error}</div>}
          <button disabled={loading} className="w-full py-3 rounded bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold">{loading ? 'Creating...' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  )
}
