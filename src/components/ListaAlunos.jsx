import CardAluno from './CardAluno'

function ListaAlunos({ alunos, aoExcluir }) {
  if (alunos.length === 0) {
    return <p>Nenhum aluno cadastrado ainda.</p>
  }

  return (
    <ul>
      {alunos.map((aluno) => (
        <CardAluno key={aluno.id} aluno={aluno} aoExcluir={aoExcluir} />
      ))}
    </ul>
  )
}

export default ListaAlunos