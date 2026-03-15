import React from 'react'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function TopBar({ title }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <header className="h-16 bg-[#0D1B3E] border-b border-white/5 flex items-center justify-between px-6 flex-shrink-0">
      <h1 className="text-white font-bold text-xl">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
          <div className="w-8 h-8 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center">
            <User size={14} className="text-[#06B6D4]" />
          </div>
          <span className="hidden sm:inline">{user?.username || 'Admin'}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-all"
        >
          <LogOut size={14} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  )
}
