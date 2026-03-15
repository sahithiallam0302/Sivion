import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import api from '../lib/api'
import toast from 'react-hot-toast'
import { Save } from 'lucide-react'

const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">{label}</label>
    {children}
  </div>
)

const Input = ({ ...props }) => (
  <input {...props} className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#06B6D4] transition-colors" />
)

export default function SiteSettings() {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    api.get('/settings/admin').then(r => setForm(r.data.data || {})).catch(() => toast.error('Failed to load settings')).finally(() => setLoading(false))
  }, [])

  const save = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await api.put('/settings/admin', form)
      toast.success('Settings saved successfully!')
    } catch { toast.error('Failed to save') } finally { setSaving(false) }
  }

  const set = (key) => (e) => setForm(p => ({...p, [key]: e.target.value}))

  if (loading) return <Layout title="Site Settings"><div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin" /></div></Layout>

  return (
    <Layout title="Site Settings">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={save} className="space-y-6">

          {/* Company Info */}
          <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-5 pb-3 border-b border-white/5">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Company Name">
                <Input value={form.companyName || ''} onChange={set('companyName')} placeholder="SiviOn Global Technologies" />
              </Field>
              <Field label="Tagline">
                <Input value={form.tagline || ''} onChange={set('tagline')} placeholder="Empowering Businesses..." />
              </Field>
              <Field label="Email Address">
                <Input type="email" value={form.email || ''} onChange={set('email')} />
              </Field>
              <Field label="Phone Number">
                <Input value={form.phone || ''} onChange={set('phone')} />
              </Field>
              <Field label="WhatsApp Number">
                <Input value={form.whatsapp || ''} onChange={set('whatsapp')} />
              </Field>
              <Field label="Working Hours">
                <Input value={form.workingHours || ''} onChange={set('workingHours')} placeholder="Mon-Fri: 9 AM – 6 PM IST" />
              </Field>
              <Field label="Address">
                <textarea value={form.address || ''} onChange={set('address')} rows={2}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </Field>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-5 pb-3 border-b border-white/5">Social Media Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[['LinkedIn', 'linkedin'], ['Twitter / X', 'twitter'], ['Facebook', 'facebook'], ['Instagram', 'instagram']].map(([label, key]) => (
                <Field key={key} label={label}>
                  <Input value={form[key] || ''} onChange={set(key)} placeholder="https://..." />
                </Field>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-5 pb-3 border-b border-white/5">Google Maps Embed</h3>
            <Field label="Google Maps Embed URL">
              <input type="url" value={form.mapEmbed || ''} onChange={set('mapEmbed')} placeholder="https://www.google.com/maps/embed?..."
                className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors" />
            </Field>
          </div>

          {/* Hero Section */}
          <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-5 pb-3 border-b border-white/5">Hero Section</h3>
            <div className="space-y-4">
              <Field label="Hero Heading">
                <Input value={form.heroHeading || ''} onChange={set('heroHeading')} />
              </Field>
              <Field label="Hero Sub-heading">
                <textarea value={form.heroSubheading || ''} onChange={set('heroSubheading')} rows={2}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="CTA Button Text">
                  <Input value={form.ctaText || ''} onChange={set('ctaText')} placeholder="Get Started" />
                </Field>
                <Field label="CTA Button URL">
                  <Input value={form.ctaUrl || ''} onChange={set('ctaUrl')} placeholder="/contact" />
                </Field>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-[#0D1B3E] border border-white/5 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-5 pb-3 border-b border-white/5">Global SEO Settings</h3>
            <div className="space-y-4">
              <Field label="Meta Title">
                <Input value={form.metaTitle || ''} onChange={set('metaTitle')} />
              </Field>
              <Field label="Meta Description">
                <textarea value={form.metaDescription || ''} onChange={set('metaDescription')} rows={3}
                  className="w-full bg-[#0A1128] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#06B6D4] transition-colors resize-none" />
              </Field>
              <Field label="Footer Copyright Text">
                <Input value={form.footerCopyright || ''} onChange={set('footerCopyright')} placeholder="© 2025 SiviOn Global Technologies" />
              </Field>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" disabled={saving}
              className="flex items-center gap-2 bg-[#06B6D4] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0891B2] transition-all disabled:opacity-50 shadow-lg shadow-[#06B6D4]/20">
              <Save size={16} />
              {saving ? 'Saving...' : 'Save All Settings'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
