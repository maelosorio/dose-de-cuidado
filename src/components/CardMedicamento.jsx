function CardMedicamento({ nome, dose, horario, status }) {
  const cores = {
    concluido: { borda: 'border-green-500', badge: 'bg-green-100 text-green-700' },
    pendente: { borda: 'border-yellow-500', badge: 'bg-yellow-100 text-yellow-700' },
    nao_realizado: { borda: 'border-red-500', badge: 'bg-red-100 text-red-700' },
  }

  const textoStatus = {
    concluido: 'Concluído',
    pendente: 'Pendente',
    nao_realizado: 'Não realizado',
  }

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border-l-4 bg-white shadow-sm ${cores[status].borda}`}>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-gray-800">{horario}</span>
        <span className="text-gray-700">Tomar {nome} {dose}</span>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${cores[status].badge}`}>
        {textoStatus[status]}
      </span>
    </div>
  )
}

export default CardMedicamento