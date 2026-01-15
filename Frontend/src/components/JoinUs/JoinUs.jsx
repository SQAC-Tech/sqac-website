import React, { useState } from 'react'
import IDCardForm from './IDCardForm'
import Closed from './Closed'

function JoinUs() {
  const [view, setView] = useState('closed') // 'closed' | 'form'

  return (
    <main className="min-h-screen flex items-start md:items-center justify-center bg-transparent px-6 py-12" role="main">
      <div className="w-full max-w-4xl">
        <header className="flex items-start md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Join SQAC</h1>
            <p className="text-sm text-gray-500 mt-1">Recruitment status and application</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-pressed={view === 'closed'}
              onClick={() => setView('closed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${view === 'closed' ? 'bg-accent text-white shadow' : 'bg-transparent text-gray-700 border border-gray-200'}`}
            >
              Status
            </button>

            <button
              type="button"
              aria-pressed={view === 'form'}
              onClick={() => setView('form')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${view === 'form' ? 'bg-accent text-white shadow' : 'bg-transparent text-gray-700 border border-gray-200'}`}
            >
              Apply
            </button>
          </div>
        </header>

        <section className="glass p-6 rounded-2xl shadow-lg">
          {view === 'closed' ? <Closed /> : <IDCardForm />}
        </section>
      </div>
    </main>
  )
}

export default JoinUs