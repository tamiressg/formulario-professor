import { useNavigate } from 'react-router-dom'
import FormularioAluno from '../components/FormularioAluno'

function PaginaCadastro() {
  const navigate = useNavigate()

  function handleCadastrar() {
    navigate('/alunos')
  }

  return <FormularioAluno aoCadastrar={handleCadastrar} />
}

export default PaginaCadastro