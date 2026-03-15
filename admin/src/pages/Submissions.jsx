import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Mail, Trash } from 'lucide-react'

export default function Submissions() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [tab, setTab] = useState('contacts')

  const load = () => {
    setLoading(true)
    const endpoint = tab === 'contacts' ? '/contact' : '/contact/enquiries'
    api.get(endpoint).then(r => setItems(r.data.data || [])).catch(() => toast.error('Failed to load')).finally(() => setLoading(false))
  }
  useEffect(load, [tab])

  const markRead = async (item) => {
    try {
      await api.patch(`/contact/${item.id}/status`, { status: 'read' })
      toast.success('Marked as read')
      load()
    } catch { toast.error('Failed to update') }
  }

  const del = async () => {
    try { await api.delete(`/contact/${deleteTarget}`); toast.success('Deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  const exportCSV = () => {
    const headers = Object.keys(items[0] || {}).join(',')
    const rows = items.map(row => Object.values(row).map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([headers + '\n' + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `submissions-${tab}.csv`; a.click()
    toast.success('CSV exported!')
  }

  return (
    <Layout title="Contact Submissions">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2">
            <button onClick={() => setTab('contacts')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${tab === 'contacts' ? 'bg-[#06B6D4] text-white' : 'bg-[#0D1B3E] text-[#94A3B8] border border-white/10'}`}>
              Contact Messages
            </button>
            <button onClick={() => setTab('enquiries')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${tab === 'enquiries' ? 'bg-[#06B6D4] text-white' : 'bg-[#0D1B3E] text-[#94A3B8] border border-white/10'}`}>
              Enquiries / Quotes
            </button>
          </div>
          {items.length > 0 && (
            <button onClick={exportCSV} className="flex items-center gap-2 bg-white/5 border border-white/10 text-[#94A3B8] hover:text-white px-4 py-2 rounded-xl text-sm transition-all">
              ↓ Export CSV
            </button>
          )}
        </div>

        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-[#94A3B8]"><div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin mx-auto mb-3" />Loading...</div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-[#94A3B8]">
              <Mail size={36} className="mx-auto mb-3 opacity-30" />
              No submissions yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">{tab === 'contacts' ? 'Message Preview' : 'Service'}</th>
                    <th className="text-left px-6 py-3 hidden lg:table-cell">Date</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id} className={`border-b border-white/5 hover:bg-white/2 transition-colors cursor-pointer ${item.status === 'new' ? 'bg-[#06B6D4]/3' : ''}`}
                      onClick={() => setSelected(item)}>
                      <td className="px-6 py-3 text-white font-medium">{item.name}</td>
                      <td className="px-6 py-3 text-[#94A3B8]">{item.email}</td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell max-w-xs truncate">
                        {tab === 'contacts' ? item.message?.substring(0, 50) + '...' : (item.service || '—')}
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden lg:table-cell">
                        {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-3" onClick={e => e.stopPropagation()}>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${item.status === 'new' ? 'bg-[#06B6D4]/15 text-[#06B6D4] border-[#06B6D4]/20' : 'bg-white/5 text-[#94A3B8] border-white/10'}`}>
                          {item.status === 'new' ? '● New' : 'Read'}
                        </span>
                      </td>
                      <td className="px-6 py-3" onClick={e => e.stopPropagation()}>
                        <div className="flex gap-2 justify-end">
                          {item.status === 'new' && (
                            <button onClick={() => markRead(item)} className="text-[#94A3B8] hover:text-[#06B6D4] p-1.5 rounded hover:bg-[#06B6D4]/10 transition-colors text-xs">Mark Read</button>
                          )}
                          <button onClick={() => setDeleteTarget(item.id)} className="text-[#94A3B8] hover:text-red-400 p-1.5 rounded hover:bg-red-500/10 transition-colors"><Trash2 size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3E] border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Message from {selected.name}</h3>
              <button onClick={() => setSelected(null)} className="text-[#94A3B8] hover:text-white p-1 rounded"><X size={20} /></button>
            </div>
            <div className="space-y-3 text-sm">
              {Object.entries(selected).filter(([k]) => !['id', 'status'].includes(k)).map(([key, val]) => (
                <div key={key}>
                  <span className="text-[#94A3B8] capitalize">{key}: </span>
                  <span className="text-white">{String(val)}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {selected.status === 'new' && (
                <button onClick={() => { markRead(selected); setSelected(null) }} className="flex-1 bg-[#06B6D4] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0891B2] transition-all">
                  Mark as Read
                </button>
              )}
              <button onClick={() => setSelected(null)} className="flex-1 bg-white/5 border border-white/10 text-[#94A3B8] py-2.5 rounded-xl text-sm transition-all">Close</button>
            </div>
          </div>
        </div>
      )}

      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
