import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TeamDetail() {
  const { id } = useParams()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/teams/${id}`)
        if (!res.ok) throw new Error('Failed')
        const data = await res.json()
        setTeam(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchTeam()
  }, [id])

  if (loading) return <main className="max-w-6xl mx-auto px-4 py-10">Loading...</main>
  if (!team) return <main className="max-w-6xl mx-auto px-4 py-10">Team not found.</main>

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/teams" className="text-blue-600 hover:underline">← Back to Teams</Link>
      <div className="mt-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            {team.logo_url && <img src={team.logo_url} alt={team.name} className="h-16 w-16 object-contain" />}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{team.name}</h1>
              <p className="text-gray-600">{team.sport}{team.age_group ? ` • ${team.age_group}` : ''}</p>
            </div>
          </div>
          {team.description && <p className="mt-4 text-gray-700">{team.description}</p>}
          {team.achievements && team.achievements.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-2">Achievements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {team.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Players</h3>
          {team.players && team.players.length > 0 ? (
            <ul className="space-y-2">
              {team.players.map(p => (
                <li key={p._id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    {p.photo_url && <img src={p.photo_url} alt={`${p.first_name} ${p.last_name}`} className="h-10 w-10 rounded-full object-cover" />}
                    <div>
                      <div className="font-medium text-gray-800">{p.first_name} {p.last_name}</div>
                      <div className="text-sm text-gray-600">{p.position || 'Player'} {p.number ? `• #${p.number}` : ''}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No players listed.</p>
          )}
        </div>
      </div>
    </main>
  )
}
