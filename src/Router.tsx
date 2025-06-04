import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import CadastroUsuario from './Paginas/CadastroUsuarios'
import UsuariosCadastrados from './Paginas/UsuariosCadastrados'



export function ExportaRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<CadastroUsuario />} />
        <Route path="/dados" element={<UsuariosCadastrados />} />



        <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}


