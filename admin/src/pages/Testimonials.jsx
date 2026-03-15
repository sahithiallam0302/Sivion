import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Star, Quote } from 'lucide-react'

const empty = { clientName: '', companyName: '', designation: '', profilePhoto: '', testimonialMessage: '', rating: 5, displayOrder: 0, isActive: true }

export default function Testimonials() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    api.get('/testimonials/admin/all').then(r => setItems(r.data.data || [])).catch(() => toast.error('Failed to load testimonials')).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const save = async (e) => {
    e.preventDefault()
    if (!form.clientName || !form.testimonialMessage) { toast.error('Required fields missing'); return }
    setSaving(true)
    try {
      if (editId) { await api.put(`/testimonials/admin/${editId}`, form); toast.success('Updated!') }
      else { await api.post('/testimonials/admin', form); toast.success('Added!') }
      setShowForm(false); setForm(empty); setEditId(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try { await api.delete(`/testimonials/admin/${deleteTarget}`); toast.success('Deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  return (
    <Layout title="Testimonials Manager">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#F59E0B] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#D97706] transition-all">
            <Plus size={16} /> New Testimonial
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
             <div className="col-span-full py-12 text-center text-[#94A3B8]">Loading...</div>
          ) : items.map(t => (
            <div key={t._id} className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <Quote className="absolute top-4 right-4 text-white/5 w-12 h-12" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-navy-700 overflow-hidden border border-white/10">
                  {t.profilePhoto && <img src={t.profilePhoto} alt={t.clientName} className="w-full h-full object-cover" />}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.clientName}</h4>
                  <p className="text-xs text-[#94A3B8]">{t.designation}, {t.companyName}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-white/10"} />
                ))}
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 italic">"{t.testimonialMessage}"</p>
              <div className="flex justify-end gap-2 border-t border-white/5 pt-4">
                <button onClick={() => { setForm(t); setEditId(t._id); setShowForm(true); }} className="text-[#94A3B8] hover:text-[#06B6D4] p-1.5 rounded transition-colors"><Pencil size={15} /></button>
                <button onClick={() => setDeleteTarget(t._id)} className="text-[#94A3B8] hover:text-red-400 p-1.5 rounded transition-colors"><Trash2 size={15} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3E] w-full max-w-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-white font-bold text-lg">{editId ? 'Edit Testimonial' : 'New Testimonial'}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#94A3B8] hover:text-white"><X size={20} /></button>
            </div>
            <form onSubmit={save} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-xs text-[#94A3B8] mb-1.5 block">Client Name *</label>
                  <input value={form.clientName} onChange={e => setForm({...form, clientName: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none focus:border-[#F59E0B]" required />
                </div>
                <div>
                  <label className="text-xs text-[#94A3B8] mb-1.5 block">Designation</label>
                  <input value={form.designation} onChange={e => setForm({...form, designation: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-xs text-[#94A3B8] mb-1.5 block">Company Name</label>
                  <input value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#94A3B8] mb-1.5 block">Testimonial Message *</label>
                <textarea value={form.testimonialMessage} onChange={e => setForm({...form, testimonialMessage: e.target.value})} rows={4} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none resize-none focus:border-[#F59E0B]" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#94A3B8] mb-1.5 block">Rating (1-5)</label>
                  <input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({...form, rating: parseInt(e.target.value)})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-xs text-[#94A3B8] mb-1.5 block">Profile Photo URL</label>
                  <input value={form.profilePhoto} onChange={e => setForm({...form, profilePhoto: e.target.value})} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl outline-none" />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" disabled={saving} className="flex-1 bg-[#F59E0B] text-white py-3 rounded-xl font-bold hover:bg-[#D97706] transition-all disabled:opacity-50 shadow-lg shadow-[#F59E0B]/20">
                  {saving ? 'Processing...' : 'Post Testimonial'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-white/5 text-[#94A3B8] py-3 rounded-xl border border-white/10">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
