import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../App'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

export default function ProtectedRoute({ children }){
  const { token, authLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if (!authLoading && !token) navigate('/login')
  }, [token, authLoading])

  if (authLoading) return <div className="flex items-center justify-center h-64"><Spinner /></div>
  return token ? children : null
}
