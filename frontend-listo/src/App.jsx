export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="mb-4 p-2 border w-full rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mb-4 p-2 border w-full rounded"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Entrar
        </button>
      </form>
    </div>
  );
}
