import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('sivion_admin_token')
    if (token) {
      api.post('/auth/verify')
        .then(res => { if (res.data.valid) setUser(res.data.user) })
        .catch(() => localStorage.removeItem('sivion_admin_token'))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (username, password) => {
    const res = await api.post('/auth/login', { username, password })
    localStorage.setItem('sivion_admin_token', res.data.token)
    setUser({ username })
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('sivion_admin_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
