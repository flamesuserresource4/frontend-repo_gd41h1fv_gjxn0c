import { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Documents() {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const query = category ? `?category=${encodeURIComponent(category)}` : ''
        const res = await fetch(`${BASE_URL}/api/documents${query}`)
        const data = await res.json()
        setDocs(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [category])

  const cats = Array.from(new Set(docs.map(d => d.category).filter(Boolean)))

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
        <select value={category} onChange={e => setCategory(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option value="">All Categories</option>
          {cats.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : docs.length === 0 ? (
        <p className="text-gray-600">No documents yet.</p>
      ) : (
        <ul className="space-y-3">
          {docs.map(doc => (
            <li key={doc._id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800">{doc.title}</div>
                <div className="text-sm text-gray-600">{doc.category || 'General'}{doc.published_on ? ` • ${new Date(doc.published_on).toLocaleDateString()}` : ''}</div>
                {doc.description && <div className="text-gray-600 mt-1">{doc.description}</div>}
              </div>
              <a href={doc.file_url} target="_blank" rel="noreferrer" className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Open</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
