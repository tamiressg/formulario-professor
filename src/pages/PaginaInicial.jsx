import { Link } from 'react-router-dom'

function PaginaInicial() {
  return (
    <section className="pagina-inicial">
      <h1>Sistema Escolar</h1>
      <h2>Gerencie o cadastro de alunos e professores.</h2>

      <nav className="pagina-inicial-links">
        <h2><Link to="/alunos">Ver alunos</Link></h2>
        <h2><Link to="/professores">Ver professores</Link></h2>
      </nav>
    </section>
  )
}

export default PaginaInicial