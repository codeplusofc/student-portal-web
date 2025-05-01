import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:8080/api/register', data);
      console.log('Usuário cadastrado com sucesso:', response);
    } catch (error: any) {
      setErrorMessage('Ocorreu um erro ao cadastrar o usuário.');
    }
  };

  return (
    <div className="register-container">
      <h1>Cadastro de Aluno</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome</label>
          <input 
            type="text" 
            placeholder="Nome" 
            {...register('name', { required: 'Nome é obrigatório' })} 
          />
          {errors.name && <div className="error-message">{errors.name.message}</div>}
        </div>

        <div>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            {...register('email', { required: 'Email é obrigatório' })} 
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
        </div>

        <div>
          <label>Senha</label>
          <input 
            type="password" 
            placeholder="Senha" 
            {...register('password', { required: 'Senha é obrigatória' })} 
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
        </div>

        <div>
          <label>Matrícula</label>
          <input 
            type="text" 
            placeholder="Matrícula" 
            {...register('registration', { required: 'Matrícula é obrigatória' })} 
          />
          {errors.registration && <div className="error-message">{errors.registration.message}</div>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default RegisterPage;