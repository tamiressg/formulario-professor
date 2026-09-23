import { useEffect, useState } from 'react'
import ListaAlunos from '../components/ListaAlunos'
import MensagemErro from '../components/MensagemErro'
import { listarAlunos, excluirAluno } from '../services/alunoService'

function PaginaListagem() {
  const [alunos, setAlunos] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarAlunos()
  }, [])

  async function carregarAlunos() {
    try {
      const dados = await listarAlunos()
      setAlunos(dados)
    } catch (erro) {
      setErro('Não foi possível carregar os alunos.')
    }
  }

  async function handleExcluir(id) {
    try {
      await excluirAluno(id)
      setAlunos(alunos.filter((aluno) => aluno.id !== id))
    } catch (erro) {
      setErro('Não foi possível excluir o aluno.')
    }
  }

  return (
    <section className="pagina-listagem">
      <h1>Alunos cadastrados</h1>
      <MensagemErro mensagem={erro} />
      <ListaAlunos alunos={alunos} aoExcluir={handleExcluir} />
    </section>
  )
}

export default PaginaListagem