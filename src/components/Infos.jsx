import { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Infos() {
  const [infos, setInfos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/infos`)
        const data = await res.json()
        setInfos(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchInfos()
  }, [])

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Club Infos</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="space-y-6">
          {infos.map((info) => (
            <div key={info._id} className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{info.content}</p>
            </div>
          ))}
          {infos.length === 0 && (
            <p className="text-gray-600">No info yet. Add some via the backend or database viewer.</p>
          )}
        </div>
      )}
    </main>
  )
}
