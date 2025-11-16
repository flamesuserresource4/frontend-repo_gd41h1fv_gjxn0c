import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">SC</div>
          <span className="font-semibold text-gray-800">Sports Club</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'}`}>Home</Link>
          <Link to="/teams" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/teams') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'}`}>Teams</Link>
          <Link to="/infos" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/infos') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'}`}>Infos</Link>
          <Link to="/documents" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/documents') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'}`}>Documents</Link>
        </nav>
      </div>
    </header>
  )
}
