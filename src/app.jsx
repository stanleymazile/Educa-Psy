import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react'

// Exemple de composant pour la page d'accueil
function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Educa-Psy</h1>
      <p className="text-gray-700 text-center max-w-md">
        Plateforme dédiée à l'éducation, au soutien psychosocial et au développement communautaire.
      </p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

