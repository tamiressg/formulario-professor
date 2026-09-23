// Componente que recebe um professor via props e mostra os dados dele.
function Professor({ professor }) {
  return (
    <li className="professor">
      <strong>{professor.nome}</strong> — {professor.email} — {professor.cpf} —{' '}
      {professor.disciplina} — {professor.data_admissao}
    </li>
  )
}

export default Professor