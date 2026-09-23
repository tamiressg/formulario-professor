function CardProfessor({ professor, aoExcluir }) {
  return (
    <li className="professor">
      <strong>{professor.nome}</strong> — {professor.email} — {professor.cpf} —{' '}
      {professor.disciplina} — {professor.data_admissao}
      <button onClick={() => aoExcluir(professor.id)}>Excluir</button>
    </li>
  )
}

export default CardProfessor