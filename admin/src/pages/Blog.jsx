import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, Check, ExternalLink, FileText } from 'lucide-react'

const empty = { title: '', slug: '', excerpt: '', content: '', category: '', author: 'SiviOn Team', status: 'draft', image: '' }

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)
  const [filter, setFilter] = useState('all')

  const load = () => {
    setLoading(true)
    api.get('/blog/admin/all').then(r => setPosts(r.data.data || [])).catch(() => toast.error('Failed to load posts')).finally(() => setLoading(false))
  }

  useEffect(load, [])

  const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const handleTitleChange = (val) => {
    setForm(p => ({ ...p, title: val, slug: editId ? p.slug : slugify(val) }))
  }

  const [file, setFile] = useState(null)

  const save = async (e) => {
    e.preventDefault()
    if (!form.title || !form.category) { toast.error('Title and category are required'); return }
    setSaving(true)
    
    const formData = new FormData()
    Object.keys(form).forEach(key => {
      formData.append(key, form[key])
    })
    if (file) formData.append('image', file)

    try {
      if (editId) {
        await api.put(`/blog/admin/${editId}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        toast.success('Post updated!')
      } else {
        await api.post('/blog/admin', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        toast.success('Post created!')
      }
      setShowForm(false); setForm(empty); setEditId(null); setFile(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try {
      await api.delete(`/blog/admin/${deleteTarget}`)
      toast.success('Post deleted')
      setDeleteTarget(null)
      load()
    } catch { toast.error('Delete failed') }
  }

  const startEdit = (post) => {
    setForm({ title: post.title, slug: post.slug, excerpt: post.excerpt || '', content: post.content || '', category: post.category, author: post.author || 'SiviOn Team', status: post.status, image: post.image || '' })
    setEditId(post.id)
    setShowForm(true)
  }

  const filtered = filter === 'all' ? posts : posts.filter(p => p.status === filter)

  const categories = ['Java Development', 'Digital Marketing', 'SEO', 'Web Design', 'Tech News', 'Company Update']

  return (
    <Layout title="Blog Manager">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2">
            {['all', 'published', 'draft'].map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${filter === s ? 'bg-[#06B6D4] text-white' : 'bg-[#0D1B3E] text-[#94A3B8] hover:text-white border border-white/10'}`}
              >{s}</button>
            ))}
          </div>
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#06B6D4] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0891B2] transition-all">
            <Plus size={16} /> New Post
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-[#94A3B8]">
              <div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin mx-auto mb-3" />
              Loading posts...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center text-[#94A3B8]">
              <FileText size={36} className="mx-auto mb-3 opacity-30" />
              No blog posts found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Title</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Category</th>
                    <th className="text-left px-6 py-3 hidden lg:table-cell">Author</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Date</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((post) => (
                    <tr key={post._id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-3">
                        <div className="text-white font-medium">{post.title}</div>
                        <div className="text-[#94A3B8] text-xs mt-0.5">/{post.slug}</div>
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell">{post.category}</td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden lg:table-cell">{post.author}</td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                          post.status === 'published'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        }`}>
                          {post.status === 'published' ? '● Published' : '○ Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell">
                        {post.date ? new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2 justify-end">
                          <button onClick={() => startEdit(post)} className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors p-1.5 rounded hover:bg-[#06B6D4]/10">
                            <Pencil size={15} />
                          </button>
                          <button onClick={() => setDeleteTarget(post._id)} className="text-[#94A3B8] hover:text-red-400 transition-colors p-1.5 rounded hover:bg-red-500/10">
                            <Trash2 size={15} />
                          </button>
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

      {/* Slide-in Form Panel */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-end">
          <div className="bg-[#0D1B3E] w-full max-w-2xl h-full overflow-y-auto border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h3 className="text-white font-bold text-lg">{editId ? 'Edit Post' : 'New Blog Post'}</h3>
              <button onClick={() => { setShowForm(false); setEditId(null) }} className="text-[#94A3B8] hover:text-white transition-colors p-1 rounded">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={save} className="p-6 space-y-5 flex-1">
              {[
                { label: 'Post Title *', key: 'title', type: 'text', onChange: handleTitleChange },
                { label: 'Slug', key: 'slug', type: 'text' },
                { label: 'Author', key: 'author', type: 'text' },
              ].map(({ label, key, type, onChange }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">{label}</label>
                  <input type={type} value={form[key]} onChange={e => onChange ? onChange(e.target.value) : setForm(p => ({...p, [key]: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Category *</label>
                  <select value={form.category} onChange={e => setForm(p => ({...p, category: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors">
                    <option value="">Select...</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Status</label>
                  <select value={form.status} onChange={e => setForm(p => ({...p, status: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Excerpt</label>
                <textarea value={form.excerpt} onChange={e => setForm(p => ({...p, excerpt: e.target.value}))} rows={3}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#06B6D4] transition-colors resize-none"
                  placeholder="Short summary..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Content</label>
                <textarea value={form.content} onChange={e => setForm(p => ({...p, content: e.target.value}))} rows={10}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#06B6D4] transition-colors resize-none"
                  placeholder="Full blog post content..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Blog Cover Image (Upload)</label>
                <div className="flex flex-col gap-2">
                   <div className="relative group/file">
                      <input type="file" onChange={e => setFile(e.target.files[0])} accept="image/*"
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="bg-[#0A1128] border border-dashed border-white/20 hover:border-[#06B6D4] text-white px-4 py-8 rounded-xl text-center transition-all">
                         <span className="text-xs text-[#94A3B8] tracking-wide font-medium">{file ? file.name : (form.image ? 'Click to replace cover' : 'Drag & drop cover image here')}</span>
                      </div>
                   </div>
                   {form.image && !file && <div className="text-[10px] text-[#06B6D4] font-mono">Current: {form.image.split('/').pop()}</div>}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button type="submit" disabled={saving}
                  className="flex-1 bg-[#06B6D4] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#0891B2] transition-all disabled:opacity-50">
                  {saving ? 'Saving...' : (editId ? 'Update Post' : 'Publish Post')}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditId(null) }}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 text-[#94A3B8] hover:text-white rounded-xl text-sm transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
