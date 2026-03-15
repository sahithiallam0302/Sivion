import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function Layout({ title, children }) {
  return (
    <div className="flex min-h-screen bg-[#0A1128]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar title={title} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
