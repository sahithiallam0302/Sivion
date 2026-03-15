import React from 'react'
import { AlertTriangle, X } from 'lucide-react'

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0D1B3E] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
            <AlertTriangle size={20} className="text-red-400" />
          </div>
          <h3 className="text-white font-bold text-lg">Confirm Delete</h3>
        </div>
        <p className="text-[#94A3B8] mb-6">{message || 'Are you sure you want to delete this item? This action cannot be undone.'}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm text-white bg-red-500/80 hover:bg-red-500 rounded-lg transition-all font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
