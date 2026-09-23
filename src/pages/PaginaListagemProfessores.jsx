import { useEffect, useState } from 'react'
import ListaProfessores from '../components/ListaProfessores'
import MensagemErro from '../components/MensagemErro'
import { listarProfessores, excluirProfessor } from '../services/professorService'

function PaginaListagemProfessores() {
  const [professores, setProfessores] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarProfessores()
  }, [])

  async function carregarProfessores() {
    try {
      const dados = await listarProfessores()
      setProfessores(dados)
    } catch (erro) {
      setErro('Não foi possível carregar os professores.')
    }
  }

  async function handleExcluir(id) {
    try {
      await excluirProfessor(id)
      setProfessores(professores.filter((professor) => professor.id !== id))
    } catch (erro) {
      setErro('Não foi possível excluir o professor.')
    }
  }

  return (
    <section className="pagina-listagem">
      <h1>Professores cadastrados</h1>
      <MensagemErro mensagem={erro} />
      <ListaProfessores professores={professores} aoExcluir={handleExcluir} />
    </section>
  )
}

export default PaginaListagemProfessores