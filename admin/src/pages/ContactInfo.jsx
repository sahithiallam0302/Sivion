import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Save } from 'lucide-react'

export default function ContactInfo() {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    api.get('/settings/admin').then(r => setForm(r.data.data || {})).catch(() => toast.error('Failed to load')).finally(() => setLoading(false))
  }, [])

  const save = async (e) => {
    e.preventDefault()
    setSaving(true)
    try { await api.put('/settings/admin', form); toast.success('Contact details saved!') }
    catch { toast.error('Failed to save') } finally { setSaving(false) }
  }

  const set = (key) => (e) => setForm(p => ({...p, [key]: e.target.value}))

  const fieldClass = "w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#06B6D4] transition-colors"

  if (loading) return <Layout title="Contact Details"><div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin" /></div></Layout>

  return (
    <Layout title="Contact Details">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={save} className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-8 space-y-5">
          <p className="text-[#94A3B8] text-sm border-b border-white/5 pb-4">
            Update the contact information displayed on the public website. Changes are saved to the database and live immediately.
          </p>

          {[
            { label: 'Company Name', key: 'companyName', type: 'text' },
            { label: 'Email Address', key: 'email', type: 'email' },
            { label: 'Phone Number', key: 'phone', type: 'text' },
            { label: 'WhatsApp Number', key: 'whatsapp', type: 'text' },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">{label}</label>
              <input type={type} value={form[key] || ''} onChange={set(key)} className={fieldClass} />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Office Address</label>
            <textarea value={form.address || ''} onChange={set('address')} rows={3}
              className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Working Hours</label>
            <input value={form.workingHours || ''} onChange={set('workingHours')} placeholder="Mon-Fri: 9 AM – 6 PM IST" className={fieldClass} />
          </div>

          <div className="pt-2 border-t border-white/5">
            <p className="text-[#94A3B8] text-sm font-medium mb-4">Social Media URLs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[['LinkedIn', 'linkedin'], ['Twitter / X', 'twitter'], ['Facebook', 'facebook'], ['Instagram', 'instagram']].map(([label, key]) => (
                <div key={key}>
                  <label className="block text-xs text-[#94A3B8] mb-1.5">{label} URL</label>
                  <input value={form[key] || ''} onChange={set(key)} placeholder="https://..." className={fieldClass} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={saving}
              className="flex items-center gap-2 bg-[#06B6D4] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0891B2] transition-all disabled:opacity-50 shadow-lg shadow-[#06B6D4]/20">
              <Save size={16} /> {saving ? 'Saving...' : 'Save Contact Details'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
