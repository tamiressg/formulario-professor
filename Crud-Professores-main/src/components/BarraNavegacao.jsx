import { Link } from 'react-router-dom'
import './BarraNavegacao.css'

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cadastrar-aluno">Cadastrar Aluno</Link>
      <Link to="/professores">Professores</Link>
      <Link to="/cadastrar-professor">Cadastrar Professor</Link>
    </nav>
  )
}

export default BarraNavegacao