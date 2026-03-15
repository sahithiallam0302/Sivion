import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import StatCard from '../components/StatCard'
import { Link } from 'react-router-dom'
import api from '../lib/api'
import {
  Briefcase, Image, FileText, Users, Mail,
  MessageSquare, Plus, TrendingUp, Clock
} from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.get('/admin/stats'),
      api.get('/contact')
    ]).then(([statsRes, contactsRes]) => {
      setStats(statsRes.data.data)
      setContacts(contactsRes.data.data?.slice(0, 5) || [])
    }).catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const statCards = [
    { label: 'Total Projects',     value: stats?.totalProjects,     icon: Image,        color: '#38BDF8' },
    { label: 'Blog Posts',         value: stats?.totalBlogPosts,    icon: FileText,     color: '#A78BFA' },
    { label: 'Active Jobs',        value: stats?.activeJobs,        icon: Briefcase,    color: '#22C55E' },
    { label: 'Contact Enquiries',  value: stats?.totalContacts,     icon: Mail,         color: '#F59E0B' },
    { label: 'New Messages',       value: stats?.newContacts,       icon: MessageSquare,color: '#EC4899', sub: 'Unread' },
    { label: 'Applications',       value: stats?.totalApplications, icon: Users,        color: '#06B6D4' },
  ]

  return (
    <Layout title="Dashboard">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#0D1B3E] to-[#0A1128] border border-[#06B6D4]/20 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-xl mb-1">Welcome to SiviOn Control 👋</h2>
            <p className="text-[#94A3B8] text-sm">Manage your content, submissions, and settings from here.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/blog" className="flex items-center gap-2 bg-[#06B6D4] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#0891B2] transition-all">
              <Plus size={15} /> Add Blog Post
            </Link>
            <Link to="/portfolio" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
              <Plus size={15} /> Add Project
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#0D1B3E] border border-white/5 rounded-xl p-5 h-24 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {statCards.map((card, i) => (
              <StatCard key={i} {...card} />
            ))}
          </div>
        )}

        {/* Recent Contacts */}
        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Clock size={16} className="text-[#06B6D4]" /> Recent Submissions
            </h3>
            <Link to="/submissions" className="text-[#06B6D4] text-sm hover:text-[#0891B2] transition-colors">
              View all →
            </Link>
          </div>
          {contacts.length === 0 ? (
            <div className="py-12 text-center text-[#94A3B8] text-sm">
              <Mail size={32} className="mx-auto mb-3 opacity-30" />
              No submissions yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Message</th>
                    <th className="text-left px-6 py-3">Date</th>
                    <th className="text-left px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c) => (
                    <tr key={c._id || c.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="px-6 py-3 text-white font-medium">{c.name}</td>
                      <td className="px-6 py-3 text-[#94A3B8]">{c.email}</td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell max-w-xs truncate">
                        {c.message?.substring(0, 60)}...
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8]">
                        {new Date(c.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          c.status === 'new'
                            ? 'bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/20'
                            : 'bg-white/5 text-[#94A3B8] border border-white/10'
                        }`}>
                          {c.status === 'new' ? '● New' : 'Read'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Manage Blog', to: '/blog', icon: FileText, color: '#A78BFA' },
            { label: 'Portfolio', to: '/portfolio', icon: Image, color: '#38BDF8' },
            { label: 'Job Listings', to: '/careers', icon: Briefcase, color: '#22C55E' },
            { label: 'Site Settings', to: '/site-settings', icon: TrendingUp, color: '#F59E0B' },
          ].map(({ label, to, icon: Icon, color }) => (
            <Link
              key={to}
              to={to}
              className="bg-[#0D1B3E] border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#06B6D4]/30 transition-all group text-center"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ backgroundColor: `${color}15`, color }}>
                <Icon size={18} />
              </div>
              <span className="text-[#94A3B8] text-xs group-hover:text-white transition-colors">{label}</span>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  )
}
