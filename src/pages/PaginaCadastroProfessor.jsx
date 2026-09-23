import { useNavigate } from 'react-router-dom'
import FormularioProfessor from '../components/FormularioProfessor'

function PaginaCadastroProfessor() {
  const navigate = useNavigate()

  function handleCadastrar() {
    navigate('/professores')
  }

  return <FormularioProfessor aoCadastrar={handleCadastrar} />
}

export default PaginaCadastroProfessor