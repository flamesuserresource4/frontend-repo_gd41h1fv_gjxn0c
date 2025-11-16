import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/teams`)
        const data = await res.json()
        setTeams(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchTeams()
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Teams</h1>
      {loading ? (
        <p className="text-gray-600">Loading teams...</p>
      ) : teams.length === 0 ? (
        <div className="text-gray-600">No teams yet. Add some via the backend or database viewer.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map(team => (
            <Link key={team._id} to={`/teams/${team._id}`} className="block border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="p-4">
                {team.logo_url && <img src={team.logo_url} alt={team.name} className="h-32 w-full object-contain mb-3" />}
                <h3 className="text-xl font-semibold text-gray-800">{team.name}</h3>
                <p className="text-sm text-gray-600">{team.sport}{team.age_group ? ` • ${team.age_group}` : ''}</p>
                {team.description && <p className="text-gray-600 mt-2 line-clamp-3">{team.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
