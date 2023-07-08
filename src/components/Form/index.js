import React, { useState } from 'react';
import {WarningCircle} from '@phosphor-icons/react'

function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errosValidacao = validarFormulario();

    if (Object.keys(errosValidacao).length === 0) {
      // Formulário válido, faça algo, como enviar os dados para o servidor
      console.log('Formulário válido');
    } else {
      // Formulário inválido, exiba os erros
      setErros(errosValidacao);
    }
  };

  const validarFormulario = () => {
    const erros = {};

    // Validação do campo "Nome"
    if (nome.trim() === '') {
      erros.nome = 'Por favor, preencha o nome.';
    }

    // Validação do campo "Email"
    if (email.trim() === '') {
      erros.email = 'Por favor, preencha o email.';
    } else if (!validarEmail(email)) {
      erros.email = 'Por favor, insira um email válido.';
    }

    // Validação do campo "Mensagem"
    if (mensagem.trim() === '') {
      erros.mensagem = 'Por favor, preencha a mensagem.';
    }

    return erros;
  };

  const validarEmail = (email) => {
    // Expressão regular para validar o formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${erros.nome ? 'error' : ''}`}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          className="input input-bordered"
        />
        {erros.nome && (
     
<div className="toast toast-top toast-end z-50">
  <div className="alert alert-warning">
  <WarningCircle size={40} color="#A57803" weight="bold" />
    <span>{erros.nome}</span>
  </div>
</div>

        )}
      </div>

      <div className={`form-control ${erros.email ? 'error' : ''}`}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input input-bordered"
        />
        {erros.email && (
     
<div className="toast toast-top toast-end">
  <div className="alert alert-warning">
    <span>{erros.email}</span>
  </div>
</div>


        )}
      </div>

      <div className={`form-control ${erros.mensagem ? 'error' : ''}`}>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)}
          className="textarea textarea-bordered"
        ></textarea>
        {erros.mensagem && (


<div className="toast toast-top toast-end">
  <div className="alert alert-success">
    <span>{erros.mensagem}</span>
  </div>
</div>




        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default Form;
