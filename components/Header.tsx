'use client'

import strings from '@/app/data'

export function Header() {
  return (
    <header className="bg-primary w-full shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.location.href = '/'}
          className="text-2xl font-bold text-text-primary hover:text-accent transition-colors"
        >
          {strings.siteName}
        </button>
      </div>
    </header>
  )
}
