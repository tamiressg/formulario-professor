import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BarraNavegacao from './components/BarraNavegacao'
import PaginaInicial from './pages/PaginaInicial'
import PaginaListagem from './pages/PaginaListagem'
import PaginaCadastro from './pages/PaginaCadastro'
import PaginaListagemProfessores from './pages/PaginaListagemProfessores'
import PaginaCadastroProfessor from './pages/PaginaCadastroProfessor'

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacao />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/alunos" element={<PaginaListagem />} />
        <Route path="/cadastrar-aluno" element={<PaginaCadastro />} />
        <Route path="/professores" element={<PaginaListagemProfessores />} />
        <Route
          path="/cadastrar-professor"
          element={<PaginaCadastroProfessor />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App