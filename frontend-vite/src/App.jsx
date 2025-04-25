import React, { useState } from 'react'
import Login from './Login.jsx'

function App() {
  const [user, setUser] = useState(null)

return user ? (
  <div className="p-6">
    {/* 🔵 Bloque de prueba para confirmar que Tailwind funciona */}
    <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
      ✅ Tailwind está funcionando correctamente
    </div>

    <h1 className="text-2xl">Bienvenido, {user.nombre}</h1>
    <p>Empresa: {user.empresa}</p>
  </div>
) : (
  <Login onLoginSuccess={setUser} />
)
}

export default App
