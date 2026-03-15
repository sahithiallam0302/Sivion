import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ConfirmModal from '../components/ConfirmModal'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X, ToggleLeft, ToggleRight } from 'lucide-react'

const depts = ['Engineering', 'Marketing', 'Design', 'Sales', 'Operations']
const types = ['Full-time', 'Part-time', 'Internship', 'Contract']
const empty = { title: '', department: 'Engineering', location: '', type: 'Full-time', experience: '', description: '', responsibilities: '', requirements: '', applicationEmail: '', status: 'active' }

export default function Careers() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    api.get('/careers/admin/all').then(r => setJobs(r.data.data || [])).catch(() => toast.error('Failed to load jobs')).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const save = async (e) => {
    e.preventDefault()
    if (!form.title || !form.location) { toast.error('Title and location are required'); return }
    setSaving(true)
    const payload = { ...form, responsibilities: form.responsibilities.split('\n').filter(Boolean), requirements: form.requirements.split('\n').filter(Boolean) }
    try {
      if (editId) { await api.put(`/careers/admin/${editId}`, payload); toast.success('Job updated!') }
      else { await api.post('/careers/admin', payload); toast.success('Job posted!') }
      setShowForm(false); setForm(empty); setEditId(null); load()
    } catch { toast.error('Save failed') } finally { setSaving(false) }
  }

  const del = async () => {
    try { await api.delete(`/careers/admin/${deleteTarget}`); toast.success('Job deleted'); setDeleteTarget(null); load() }
    catch { toast.error('Delete failed') }
  }

  const toggleStatus = async (job) => {
    try {
      await api.put(`/careers/admin/${job.id}`, { ...job, status: job.status === 'active' ? 'inactive' : 'active' })
      toast.success('Status updated')
      load()
    } catch { toast.error('Failed to update status') }
  }

  const startEdit = (job) => {
    setForm({ title: job.title, department: job.department || 'Engineering', location: job.location, type: job.type, experience: job.experience, description: job.description, responsibilities: (job.responsibilities || []).join('\n'), requirements: (job.requirements || []).join('\n'), applicationEmail: job.applicationEmail || '', status: job.status })
    setEditId(job.id)
    setShowForm(true)
  }

  return (
    <Layout title="Careers Manager">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button onClick={() => { setShowForm(true); setForm(empty); setEditId(null) }}
            className="flex items-center gap-2 bg-[#06B6D4] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0891B2] transition-all">
            <Plus size={16} /> Post New Job
          </button>
        </div>

        <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-[#94A3B8]"><div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin mx-auto mb-3" />Loading jobs...</div>
          ) : jobs.length === 0 ? (
            <div className="py-16 text-center text-[#94A3B8]">No job listings found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#94A3B8] text-xs uppercase tracking-wide border-b border-white/5">
                    <th className="text-left px-6 py-3">Job Title</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Department</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Type</th>
                    <th className="text-left px-6 py-3 hidden lg:table-cell">Location</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(job => (
                    <tr key={job.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-3">
                        <div className="text-white font-medium">{job.title}</div>
                        <div className="text-[#94A3B8] text-xs">{job.experience}</div>
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden md:table-cell">{job.department}</td>
                      <td className="px-6 py-3 hidden md:table-cell">
                        <span className="bg-[#06B6D4]/10 text-[#06B6D4] text-xs px-2 py-0.5 rounded border border-[#06B6D4]/20">{job.type}</span>
                      </td>
                      <td className="px-6 py-3 text-[#94A3B8] hidden lg:table-cell">{job.location}</td>
                      <td className="px-6 py-3">
                        <button onClick={() => toggleStatus(job)} className="flex items-center gap-1.5 text-xs transition-colors"
                          title="Toggle status">
                          {job.status === 'active'
                            ? <><ToggleRight size={18} className="text-green-400" /><span className="text-green-400 font-medium">Active</span></>
                            : <><ToggleLeft size={18} className="text-[#94A3B8]" /><span className="text-[#94A3B8]">Inactive</span></>
                          }
                        </button>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2 justify-end">
                          <button onClick={() => startEdit(job)} className="text-[#94A3B8] hover:text-[#06B6D4] p-1.5 rounded hover:bg-[#06B6D4]/10 transition-colors"><Pencil size={15} /></button>
                          <button onClick={() => setDeleteTarget(job.id)} className="text-[#94A3B8] hover:text-red-400 p-1.5 rounded hover:bg-red-500/10 transition-colors"><Trash2 size={15} /></button>
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
              <h3 className="text-white font-bold text-lg">{editId ? 'Edit Job' : 'Post New Job'}</h3>
              <button onClick={() => { setShowForm(false); setEditId(null) }} className="text-[#94A3B8] hover:text-white p-1 rounded"><X size={20} /></button>
            </div>
            <form onSubmit={save} className="p-6 space-y-5 flex-1">
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Job Title *</label>
                <input value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Department</label>
                  <select value={form.department} onChange={e => setForm(p => ({...p, department: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors">
                    {depts.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Job Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({...p, type: e.target.value}))}
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors">
                    {types.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Location *</label>
                  <input value={form.location} onChange={e => setForm(p => ({...p, location: e.target.value}))} placeholder="e.g. Hyderabad / Remote"
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Experience</label>
                  <input value={form.experience} onChange={e => setForm(p => ({...p, experience: e.target.value}))} placeholder="e.g. 0-2 years"
                    className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Job Description</label>
                <textarea value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} rows={4}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Responsibilities (one per line)</label>
                <textarea value={form.responsibilities} onChange={e => setForm(p => ({...p, responsibilities: e.target.value}))} rows={5} placeholder="Build REST APIs&#10;Review pull requests&#10;..."
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Requirements (one per line)</label>
                <textarea value={form.requirements} onChange={e => setForm(p => ({...p, requirements: e.target.value}))} rows={5} placeholder="Java knowledge&#10;React basics&#10;..."
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Application Email</label>
                <input type="email" value={form.applicationEmail} onChange={e => setForm(p => ({...p, applicationEmail: e.target.value}))} placeholder="hr@sivionglobal.com"
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
              </div>
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button type="submit" disabled={saving} className="flex-1 bg-[#06B6D4] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#0891B2] transition-all disabled:opacity-50">
                  {saving ? 'Saving...' : (editId ? 'Update Job' : 'Post Job')}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditId(null) }} className="px-6 py-2.5 bg-white/5 border border-white/10 text-[#94A3B8] rounded-xl text-sm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteTarget && <ConfirmModal onConfirm={del} onCancel={() => setDeleteTarget(null)} />}
    </Layout>
  )
}
