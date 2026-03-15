import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Briefcase, Image, FileText,
  Users, Star, Phone, Settings, Mail, ChevronLeft,
  ChevronRight, Zap, Globe
} from 'lucide-react'

const navItems = [
  { path: '/',              label: 'Dashboard',       icon: LayoutDashboard },
  { path: '/services',      label: 'Services',         icon: Zap },
  { path: '/portfolio',     label: 'Portfolio',        icon: Image },
  { path: '/blog',          label: 'Blog',             icon: FileText },
  { path: '/careers',       label: 'Careers',          icon: Briefcase },
  { path: '/team',          label: 'Team',             icon: Users },
  { path: '/testimonials',  label: 'Testimonials',     icon: Star },
  { path: '/contact-info',  label: 'Contact Details',  icon: Phone },
  { path: '/submissions',   label: 'Submissions',      icon: Mail },
  { path: '/site-settings', label: 'Site Settings',    icon: Settings },
]

export default function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`flex flex-col bg-[#0D1B3E] border-r border-white/5 transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'} min-h-screen`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 h-16">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#06B6D4] flex items-center justify-center">
              <Globe size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">SiviOn</p>
              <p className="text-[#94A3B8] text-[10px] leading-tight">Control Panel</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-[#06B6D4] flex items-center justify-center mx-auto">
            <Globe size={16} className="text-white" />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#94A3B8] hover:text-white transition-colors p-1 rounded"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              title={collapsed ? label : ''}
              className={`flex items-center gap-3 px-4 py-2.5 mx-2 mb-1 rounded-lg text-sm font-medium transition-all duration-200 sidebar-link
                ${active
                  ? 'bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/20'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Version */}
      {!collapsed && (
        <div className="p-4 border-t border-white/5">
          <p className="text-[#94A3B8] text-xs">v1.0.0 · SiviOn Control</p>
        </div>
      )}
    </aside>
  )
}
