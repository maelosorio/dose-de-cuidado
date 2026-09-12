import historico from '../data/mockHistorico.json'

function Historico() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Menu lateral */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-8">Dose de Cuidado</h2>
        <nav className="flex flex-col gap-4 text-blue-100">
          <a href="#">Dashboard</a>
          <a href="#">Agenda</a>
          <a href="#">Medicamentos</a>
          <a href="#" className="text-white font-semibold border-l-4 border-white pl-2 -ml-2.5">
            Histórico
          </a>
          <a href="#">Perfil</a>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Histórico</h1>
            <p className="text-gray-500">Acompanhe tudo o que já foi feito</p>
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Horário</th>
                <th className="px-6 py-3">Item</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((registro) => (
                <tr key={registro.id} className="border-t border-gray-100">
                  <td className="px-6 py-4">{registro.data}</td>
                  <td className="px-6 py-4">{registro.horario}</td>
                  <td className="px-6 py-4">{registro.item}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        registro.status === 'concluido'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {registro.status === 'concluido' ? 'Concluído' : 'Não realizado'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Historico