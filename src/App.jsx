import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Teams from './components/Teams'
import TeamDetail from './components/TeamDetail'
import Infos from './components/Infos'
import Documents from './components/Documents'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </div>
  )
}

export default App
