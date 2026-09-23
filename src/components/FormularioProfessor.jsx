import { useState } from 'react'
import CampoTexto from './CampoTexto'
import MensagemErro from './MensagemErro'
import { criarProfessor } from '../services/professorService'
import './FormularioProfessor.css'

function FormularioProfessor({ aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [disciplina, setDisciplina] = useState('')
  const [dataAdmissao, setDataAdmissao] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      const novoProfessor = await criarProfessor({
        nome,
        email,
        cpf,
        disciplina,
        data_admissao: dataAdmissao,
      })
      aoCadastrar(novoProfessor)

      setNome('')
      setEmail('')
      setCpf('')
      setDisciplina('')
      setDataAdmissao('')
    } catch (erro) {
      setErro('Não foi possível cadastrar o professor. Tente novamente.')
    }
  }

  return (
    <section className="formulario-professor">
      <h1>Cadastro de Professor</h1>

      <MensagemErro mensagem={erro} />

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Nome completo"
          name="nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex: Carlos Oliveira"
        />
        <CampoTexto
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Ex: carlos@escola.com"
        />
        <CampoTexto
          label="CPF"
          name="cpf"
          value={cpf}
          onChange={(evento) => setCpf(evento.target.value)}
          placeholder="000.000.000-00"
        />
        <CampoTexto
          label="Disciplina"
          name="disciplina"
          value={disciplina}
          onChange={(evento) => setDisciplina(evento.target.value)}
          placeholder="Ex: Programação para Internet"
        />
        <CampoTexto
          label="Data de admissão"
          name="data_admissao"
          type="date"
          value={dataAdmissao}
          onChange={(evento) => setDataAdmissao(evento.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}

export default FormularioProfessor