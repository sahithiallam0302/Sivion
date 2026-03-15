import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Zap, ToggleLeft, ToggleRight } from 'lucide-react'

const empty = { title: '', shortDescription: '', longDescription: '', iconName: 'Zap', coverImage: '', technologies: [], displayOrder: 0, isActive: true }

export default function Services() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    api.get('/services/admin/all').then(r => setItems(r.data.data || [])).catch(() => toast.error('Failed to load services')).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const save = async (e) => {
    e.preventDefault()
    if (!form.title) { toast.error('Title is required'); return }
    setSaving(true)
    try {
      if (editId) { await api.put(`/services/admin/${editId}`, form); toast.success('Service updated!') }
      else { await api.post('/services/admin', form); toast.success('Service added!') }
      setShowForm(false); setForm(empty); setEditId(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try { await api.delete(`/services/admin/${deleteTarget}`); toast.success('Service deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  const toggleActive = async (item) => {
    try {
      await api.put(`/services/admin/${item._id}`, { ...item, isActive: !item.isActive })
      load()
    } catch { toast.error('Failed to update status') }
  }

  return (
    <Layout title="Services Manager">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#06B6D4] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0891B2] transition-all">
            <Plus size={16} /> Add New Service
          </button>
        </div>

        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-[#94A3B8] animate-pulse">Loading services...</div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-[#94A3B8]">No services found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Service</th>
                    <th className="text-left px-6 py-3">Order</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item._id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4]">
                            <Zap size={16} />
                          </div>
                          <div>
                            <div className="text-white font-medium">{item.title}</div>
                            <div className="text-[#94A3B8] text-xs truncate max-w-xs">{item.shortDescription}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-white">{item.displayOrder}</td>
                      <td className="px-6 py-3">
                        <button onClick={() => toggleActive(item)} className="transition-all">
                          {item.isActive ? <ToggleRight className="text-[#06B6D4]" /> : <ToggleLeft className="text-[#94A3B8]" />}
                        </button>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2 justify-end">
                          <button onClick={() => { setForm(item); setEditId(item._id); setShowForm(true); }} className="text-[#94A3B8] hover:text-[#06B6D4] p-1.5 rounded hover:bg-[#06B6D4]/10 transition-colors"><Pencil size={15} /></button>
                          <button onClick={() => setDeleteTarget(item._id)} className="text-[#94A3B8] hover:text-red-400 p-1.5 rounded hover:bg-red-500/10 transition-colors"><Trash2 size={15} /></button>
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

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-end">
          <div className="bg-[#0D1B3E] w-full max-w-2xl h-full overflow-y-auto border-l border-white/10 flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">{editId ? 'Edit Service' : 'Add Service'}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#94A3B8] hover:text-white"><X size={20} /></button>
            </div>
            <form onSubmit={save} className="space-y-4">
              <div>
                <label className="text-sm text-[#94A3B8]">Service Title *</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-[#94A3B8]">Icon Name (Lucide)</label>
                  <input value={form.iconName} onChange={e => setForm({ ...form, iconName: e.target.value })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5" />
                </div>
                <div>
                  <label className="text-sm text-[#94A3B8]">Display Order</label>
                  <input type="number" value={form.displayOrder} onChange={e => setForm({ ...form, displayOrder: parseInt(e.target.value) })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5" />
                </div>
              </div>
              <div>
                <label className="text-sm text-[#94A3B8]">Short Description</label>
                <input value={form.shortDescription} onChange={e => setForm({ ...form, shortDescription: e.target.value })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5" />
              </div>
              <div>
                <label className="text-sm text-[#94A3B8]">Long Description</label>
                <textarea value={form.longDescription} onChange={e => setForm({ ...form, longDescription: e.target.value })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5 h-32" />
              </div>
              <div>
                <label className="text-sm text-[#94A3B8]">Cover Image URL</label>
                <input value={form.coverImage} onChange={e => setForm({ ...form, coverImage: e.target.value })} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl mt-1.5" />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" disabled={saving} className="flex-1 bg-[#06B6D4] text-white py-2.5 rounded-xl font-semibold hover:bg-[#0891B2] transition-all disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Service'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-white/5 text-[#94A3B8] py-2.5 rounded-xl border border-white/10">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
