import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NovoMedicamento from './pages/NovoMedicamento'
import Historico from './pages/Historico'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/novo-medicamento" element={<NovoMedicamento />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App