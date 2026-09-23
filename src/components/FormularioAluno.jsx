import { useState } from 'react'
import CampoTexto from './CampoTexto'
import MensagemErro from './MensagemErro'
import { criarAluno } from '../services/alunoService'
import './FormularioAluno.css'

function FormularioAluno({ aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [cidade, setCidade] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      const novoAluno = await criarAluno({ nome, email, cpf, cidade })
      aoCadastrar(novoAluno)

      setNome('')
      setEmail('')
      setCpf('')
      setCidade('')
    } catch (erro) {
      setErro('Não foi possível cadastrar o aluno. Tente novamente.')
    }
  }

  return (
    <section className="formulario-aluno">
      <h1>Cadastro de Aluno</h1>

      <MensagemErro mensagem={erro} />

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Nome completo"
          name="nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex: Maria da Silva"
        />
        <CampoTexto
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Ex: maria@email.com"
        />
        <CampoTexto
          label="CPF"
          name="cpf"
          value={cpf}
          onChange={(evento) => setCpf(evento.target.value)}
          placeholder="000.000.000-00"
        />
        <CampoTexto
          label="Cidade"
          name="cidade"
          value={cidade}
          onChange={(evento) => setCidade(evento.target.value)}
          placeholder="Ex: Natal"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}

export default FormularioAluno