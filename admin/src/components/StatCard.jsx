import React from 'react'

export default function StatCard({ label, value, icon: Icon, color = '#06B6D4', sub }) {
  return (
    <div className="bg-[#0D1B3E] border border-white/5 rounded-xl p-5 flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15`, color }}
      >
        <Icon size={22} />
      </div>
      <div>
        <p className="text-[#94A3B8] text-sm">{label}</p>
        <p className="text-white text-2xl font-bold">{value ?? '—'}</p>
        {sub && <p className="text-[#94A3B8] text-xs mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}
