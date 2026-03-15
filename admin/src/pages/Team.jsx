import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Github, Linkedin, User } from 'lucide-react'

const empty = { fullName: '', role: '', department: '', profilePhoto: '', bio: '', linkedInUrl: '', githubUrl: '', displayOrder: 0, isActive: true }

export default function Team() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    api.get('/team/admin/all').then(r => setItems(r.data.data || [])).catch(() => toast.error('Failed to load team')).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const save = async (e) => {
    e.preventDefault()
    if (!form.fullName || !form.role) { toast.error('Name and Role are required'); return }
    setSaving(true)
    try {
      if (editId) { await api.put(`/team/admin/${editId}`, form); toast.success('Member updated!') }
      else { await api.post('/team/admin', form); toast.success('Member added!') }
      setShowForm(false); setForm(empty); setEditId(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try { await api.delete(`/team/admin/${deleteTarget}`); toast.success('Deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  return (
    <Layout title="Team Manager">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#A78BFA] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#8B5CF6] transition-all focus:ring-2 ring-[#A78BFA]/50">
            <Plus size={16} /> Add Team Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [1, 2, 3].map(i => <div key={i} className="bg-[#0D1B3E] h-64 rounded-2xl animate-pulse" />)
          ) : items.map(member => (
            <div key={member._id} className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-5 group flex flex-col hover:border-[#A78BFA]/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-navy-700 overflow-hidden border border-white/10">
                    {member.profilePhoto ? (
                      <img src={member.profilePhoto} alt={member.fullName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20"><User size={24} /></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{member.fullName}</h4>
                    <p className="text-[#06B6D4] text-xs font-medium uppercase tracking-wider">{member.role}</p>
                    <p className="text-[#94A3B8] text-xs">{member.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => { setForm(member); setEditId(member._id); setShowForm(true); }} className="p-1.5 text-[#94A3B8] hover:text-[#06B6D4] transition-colors"><Pencil size={15} /></button>
                  <button onClick={() => setDeleteTarget(member._id)} className="p-1.5 text-[#94A3B8] hover:text-red-400 transition-colors"><Trash2 size={15} /></button>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm line-clamp-2 mb-4 flex-1 italic">"{member.bio || 'No bio provided'}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {member.linkedInUrl && <a href={member.linkedInUrl} target="_blank" className="text-[#94A3B8] hover:text-white transition-colors"><Linkedin size={16} /></a>}
                {member.githubUrl && <a href={member.githubUrl} target="_blank" className="text-[#94A3B8] hover:text-white transition-colors"><Github size={16} /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-end">
          <div className="bg-[#0D1B3E] w-full max-w-xl h-full overflow-y-auto border-l border-white/10 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-bold text-xl">{editId ? 'Edit Profile' : 'New Member'}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#94A3B8] hover:text-white transition-colors"><X size={24} /></button>
            </div>
            <form onSubmit={save} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">Full Name *</label>
                  <input value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#A78BFA] outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">Role *</label>
                  <input value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#A78BFA] outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">Department</label>
                  <input value={form.department} onChange={e => setForm({...form, department: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#A78BFA] outline-none" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">Bio</label>
                <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} rows={3} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl focus:border-[#A78BFA] outline-none resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">LinkedIn URL</label>
                  <input type="url" value={form.linkedInUrl} onChange={e => setForm({...form, linkedInUrl: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">GitHub URL</label>
                  <input type="url" value={form.githubUrl} onChange={e => setForm({...form, githubUrl: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl outline-none" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#94A3B8] mb-1.5 block">Profile Photo URL</label>
                <input value={form.profilePhoto} onChange={e => setForm({...form, profilePhoto: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-3 rounded-xl outline-none" />
              </div>
              <div className="flex gap-4 pt-6">
                <button type="submit" disabled={saving} className="flex-1 bg-[#A78BFA] text-white py-3.5 rounded-xl font-bold hover:bg-[#8B5CF6] transition-all disabled:opacity-50 shadow-lg shadow-[#A78BFA]/20">
                  {saving ? 'Saving...' : 'Confirm Details'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-[#0A1128] text-[#94A3B8] py-3.5 rounded-xl border border-white/10 hover:text-white transition-all">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
