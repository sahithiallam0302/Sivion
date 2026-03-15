import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import TagInput from '../components/TagInput'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Star } from 'lucide-react'

const empty = { title: '', client: '', category: 'Web', description: '', technologies: [], liveUrl: '', githubUrl: '', isFeatured: false, status: 'published', image: '' }
const categories = ['Web', 'Java', 'Digital Marketing', 'Mobile']

export default function Portfolio() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)
  const [catFilter, setCatFilter] = useState('all')

  const load = () => {
    setLoading(true)
    api.get('/portfolio/admin/all').then(r => setItems(r.data.data || [])).catch(() => toast.error('Failed to load projects')).finally(() => setLoading(false))
  }

  useEffect(load, [])

  const [file, setFile] = useState(null)

  const save = async (e) => {
    e.preventDefault()
    if (!form.title) { toast.error('Title is required'); return }
    setSaving(true)
    
    const formData = new FormData()
    Object.keys(form).forEach(key => {
      if (key === 'technologies') formData.append(key, JSON.stringify(form[key]))
      else formData.append(key, form[key])
    })
    if (file) formData.append('image', file)

    try {
      if (editId) { await api.put(`/portfolio/admin/${editId}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }) }
      else { await api.post('/portfolio/admin', formData, { headers: { 'Content-Type': 'multipart/form-data' } }) }
      toast.success(editId ? 'Project updated!' : 'Project added!')
      setShowForm(false); setForm(empty); setEditId(null); setFile(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try { await api.delete(`/portfolio/admin/${deleteTarget}`); toast.success('Project deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  const startEdit = (item) => {
    setForm({ title: item.title, client: item.client || '', category: item.category || 'Web', description: item.description || '', technologies: item.technologies || [], liveUrl: item.liveUrl || '', githubUrl: item.githubUrl || '', isFeatured: item.isFeatured || false, status: item.status || 'published', image: item.image || '' })
    setEditId(item.id)
    setShowForm(true)
  }

  const filtered = catFilter === 'all' ? items : items.filter(i => i.category === catFilter)

  return (
    <Layout title="Portfolio Manager">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2 flex-wrap">
            {['all', ...categories].map(c => (
              <button key={c} onClick={() => setCatFilter(c)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${catFilter === c ? 'bg-[#06B6D4] text-white' : 'bg-[#0D1B3E] text-[#94A3B8] hover:text-white border border-white/10'}`}
              >{c}</button>
            ))}
          </div>
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#06B6D4] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0891B2] transition-all">
            <Plus size={16} /> Add Project
          </button>
        </div>

        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-[#94A3B8]">
              <div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin mx-auto mb-3" />
              Loading projects...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center text-[#94A3B8]">No projects found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Project</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Category</th>
                    <th className="text-left px-6 py-3 hidden lg:table-cell">Tech Stack</th>
                    <th className="text-left px-6 py-3">Featured</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(item => (
                    <tr key={item._id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-3">
                        <div className="text-white font-medium">{item.title}</div>
                        {item.client && <div className="text-[#94A3B8] text-xs">{item.client}</div>}
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell">{item.category}</td>
                      <td className="px-6 py-3 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(item.technologies || []).slice(0, 3).map(t => (
                            <span key={t} className="bg-[#06B6D4]/10 text-[#06B6D4] text-xs px-2 py-0.5 rounded border border-[#06B6D4]/20">{t}</span>
                          ))}
                          {item.technologies?.length > 3 && <span className="text-[#94A3B8] text-xs">+{item.technologies.length - 3}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        {item.isFeatured && <Star size={14} className="text-yellow-400" fill="currentColor" />}
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2 justify-end">
                          <button onClick={() => startEdit(item)} className="text-[#94A3B8] hover:text-[#06B6D4] p-1.5 rounded hover:bg-[#06B6D4]/10 transition-colors"><Pencil size={15} /></button>
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
          <div className="bg-[#0D1B3E] w-full max-w-2xl h-full overflow-y-auto border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h3 className="text-white font-bold text-lg">{editId ? 'Edit Project' : 'Add Project'}</h3>
              <button onClick={() => { setShowForm(false); setEditId(null) }} className="text-[#94A3B8] hover:text-white p-1 rounded"><X size={20} /></button>
            </div>
            <form onSubmit={save} className="p-6 space-y-5 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Project Title *</label>
                  <input value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Client Name</label>
                  <input value={form.client} onChange={e => setForm(p => ({...p, client: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Category</label>
                  <select value={form.category} onChange={e => setForm(p => ({...p, category: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Description</label>
                <textarea value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} rows={4}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Technologies Used</label>
                <TagInput value={form.technologies} onChange={v => setForm(p => ({...p, technologies: v}))} placeholder="Add tech (Enter)..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Live URL</label>
                  <input type="url" value={form.liveUrl} onChange={e => setForm(p => ({...p, liveUrl: e.target.value}))}
                    placeholder="https://..." className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">GitHub URL</label>
                  <input type="url" value={form.githubUrl} onChange={e => setForm(p => ({...p, githubUrl: e.target.value}))}
                    placeholder="https://..." className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Project Image (Upload)</label>
                <div className="flex flex-col gap-2">
                   <div className="relative group/file">
                      <input type="file" onChange={e => setFile(e.target.files[0])} accept="image/*"
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="bg-[#0A1128] border border-dashed border-white/20 hover:border-[#06B6D4] text-white px-4 py-6 rounded-xl text-center transition-all">
                         <span className="text-xs text-[#94A3B8]">{file ? file.name : (form.image ? 'Click to change image' : 'Choose image or drag and drop')}</span>
                      </div>
                   </div>
                   {form.image && !file && <div className="text-[10px] text-[#06B6D4]">Current: {form.image.split('/').pop()}</div>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setForm(p => ({...p, isFeatured: !p.isFeatured}))}
                  className={`w-10 h-6 rounded-full transition-all ${form.isFeatured ? 'bg-[#06B6D4]' : 'bg-white/10'} relative`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${form.isFeatured ? 'left-5' : 'left-1'}`} />
                </button>
                <span className="text-sm text-[#94A3B8]">Featured project (shows on homepage)</span>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button type="submit" disabled={saving} className="flex-1 bg-[#06B6D4] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#0891B2] transition-all disabled:opacity-50">
                  {saving ? 'Saving...' : (editId ? 'Update Project' : 'Add Project')}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditId(null) }} className="px-6 py-2.5 bg-white/5 border border-white/10 text-[#94A3B8] rounded-xl text-sm transition-all">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
