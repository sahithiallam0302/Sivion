import React, { useState } from 'react'
import { X } from 'lucide-react'

export default function TagInput({ value = [], onChange, placeholder = 'Add tag...' }) {
  const [input, setInput] = useState('')

  const addTag = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault()
      const tag = input.trim().replace(/,$/, '')
      if (tag && !value.includes(tag)) {
        onChange([...value, tag])
      }
      setInput('')
    }
  }

  const removeTag = (tag) => {
    onChange(value.filter(t => t !== tag))
  }

  return (
    <div className="min-h-10 flex flex-wrap gap-2 p-2 bg-[#0A1128] border border-white/10 rounded-lg focus-within:border-[#06B6D4] transition-colors">
      {value.map(tag => (
        <span
          key={tag}
          className="flex items-center gap-1 bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/20 px-2 py-0.5 rounded text-sm"
        >
          {tag}
          <button type="button" onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
            <X size={12} />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={addTag}
        placeholder={value.length === 0 ? placeholder : ''}
        className="flex-1 min-w-24 bg-transparent text-white text-sm outline-none placeholder-[#94A3B8]"
      />
    </div>
  )
}
