import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import CadastroUsuario from './Paginas/CadastroUsuarios'



export function ExportaRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<CadastroUsuario />} />



        <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}


