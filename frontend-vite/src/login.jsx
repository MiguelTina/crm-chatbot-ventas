import React, { useState } from 'react'
import axios from 'axios'

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password
      })
      localStorage.setItem('token', res.data.token)
      onLoginSuccess(res.data.user)
    } catch (err) {
      setMensaje('Correo o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        {mensaje && <p className="text-red-500 mb-4">{mensaje}</p>}
        <button className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
