
export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      {/* Menú lateral */}
      <aside className="w-64 bg-[#2B6CB0] text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">[LOGO]</h1>
          <nav className="flex flex-col gap-4">
            <a href="#inicio" className="hover:underline">Inicio</a>
            <a href="#empresas" className="hover:underline">Empresas</a>
            <a href="#salud" className="hover:underline">Salud</a>
            <a href="#cultura" className="hover:underline">Cultura</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
        <button className="bg-white text-[#2B6CB0] p-2 rounded-lg font-semibold">Agendar demo</button>
      </aside>
      <main className="flex-1 bg-gray-50 p-10 space-y-16">
        {/* Aquí va todo el contenido de la página, que ya está maquetado */}
      </main>
    </div>
  );
}
