function CardAluno({ aluno, aoExcluir }) {
  return (
    <li className="aluno">
      <strong>{aluno.nome}</strong> — {aluno.email} — {aluno.cpf} —{' '}
      {aluno.cidade}
      <button onClick={() => aoExcluir(aluno.id)}>Excluir</button>
    </li>
  )
}

export default CardAluno