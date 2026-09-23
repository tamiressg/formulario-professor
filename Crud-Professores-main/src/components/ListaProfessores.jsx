import CardProfessor from './CardProfessor'

function ListaProfessores({ professores, aoExcluir }) {
  if (professores.length === 0) {
    return <p>Nenhum professor cadastrado ainda.</p>
  }

  return (
    <ul>
      {professores.map((professor) => (
        <CardProfessor
          key={professor.id}
          professor={professor}
          aoExcluir={aoExcluir}
        />
      ))}
    </ul>
  )
}

export default ListaProfessores