import medicamentos from '../data/mockMedicamentos.json'
import CardMedicamento from '../components/CardMedicamento'

function Dashboard() {
  // Contando quantos remédios têm cada status
  const pendentes = medicamentos.filter((m) => m.status === 'pendente').length
  const concluidos = medicamentos.filter((m) => m.status === 'concluido').length
  const totalCadastrados = medicamentos.length

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Menu lateral */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-8">Dose de Cuidado</h2>
        <nav className="flex flex-col gap-4 text-blue-100">
          <a href="#" className="text-white font-semibold border-l-4 border-white pl-2 -ml-2.5">
            Agenda
          </a>
          <a href="#">Medicamentos</a>
          <a href="#">Histórico</a>
          <a href="#">Perfil</a>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-10">

        {/* Cards de estatística */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-yellow-500">
            <p className="text-3xl font-bold text-gray-900">{pendentes}</p>
            <p className="text-gray-500">Pendente hoje</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-green-500">
            <p className="text-3xl font-bold text-gray-900">{concluidos}</p>
            <p className="text-gray-500">Concluídos hoje</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-500">
            <p className="text-3xl font-bold text-gray-900">{totalCadastrados}</p>
            <p className="text-gray-500">Medicamentos cadastrados</p>
          </div>
        </div>

        {/* Lista de medicamentos */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Agenda de hoje</h1>

        <div className="space-y-3">
          {medicamentos.map((med) => (
            <CardMedicamento
              key={med.id}
              nome={med.nome}
              dose={med.dose}
              horario={med.horario}
              status={med.status}
            />
          ))}
        </div>

      </main>
    </div>
  )
}

export default Dashboard