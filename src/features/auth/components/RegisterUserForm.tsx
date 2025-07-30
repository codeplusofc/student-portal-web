import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser, UserRequest } from '../../../services/authService';

import '../../../styles/student.css';

const RegisterUserForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<UserRequest>();

  const onSubmit = async (data: UserRequest) => {
    try {
      await registerUser(data);
      alert('Conta criada com sucesso!');
      reset();
    } catch (error) {
      console.error(error);
      alert('Erro ao criar conta');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      <h2 className="title">Cadastre-se para acessar o portal</h2>

      <input
        {...register('name')}
        placeholder="Nome"
        className="input"
        required
      />
      <input
        {...register('email')}
        placeholder="Email"
        type="email"
        className="input"
        required
      />
      <input
        {...register('password')}
        placeholder="Senha"
        type="password"
        className="input"
        required
      />
      <input
        {...register('registration')}
        placeholder="Matrícula"
        className="input"
        required
      />

      <button type="submit" className="button">Criar Conta</button>
    </form>
  );
};

export default RegisterUserForm;
