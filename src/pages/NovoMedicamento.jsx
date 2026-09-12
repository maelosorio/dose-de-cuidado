function NovoMedicamento() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Menu lateral */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-8">Dose de Cuidado</h2>
        <nav className="flex flex-col gap-4 text-blue-100">
          <a href="#">Dashboard</a>
          <a href="#">Agenda</a>
          <a href="#" className="text-white font-semibold border-l-4 border-white pl-2 -ml-2.5">
            Medicamentos
          </a>
          <a href="#">Histórico</a>
          <a href="#">Perfil</a>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-900">Novo Medicamento</h1>
        <p className="text-gray-500 mb-6">Preencha os dados para criar um lembrete</p>

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do medicamento
              </label>
              <input
                type="text"
                placeholder="Ex: Losartana"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dosagem
              </label>
              <input
                type="text"
                placeholder="Ex: 50mg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Horário
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequência
              </label>
              <input
                type="text"
                placeholder="Diariamente"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de início
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <input
                type="text"
                placeholder="Medicamento"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações
              </label>
              <textarea
                placeholder="Tomar após as refeições"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 flex gap-4 mt-2">
              <button
                type="submit"
                className="bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-900 transition"
              >
                SALVAR
              </button>
              <button
                type="button"
                className="border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                CANCELAR
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  )
}

export default NovoMedicamento