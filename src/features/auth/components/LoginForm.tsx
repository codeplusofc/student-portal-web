import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getStudentByRegistration } from "../../../services/studentService";
import { Link } from "react-router-dom";
import "../../../styles/login.css";



type LoginData = {
  registration: string;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const [studentName, setStudentName] = useState<string | null>(null);

  const onSubmit = async (data: LoginData) => {
    try {
      const student = await getStudentByRegistration(data.registration);
      setStudentName(student.name);
    } catch (err) {
      alert('Matrícula não encontrada.');
      setStudentName(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login do Aluno</h2>
      <input {...register('registration')} placeholder="Email" required />
      <input {...register('registration')} placeholder="Senha" required />
      <button type="submit">Entrar</button>
      {studentName && <p>Bem-vindo, {studentName}!</p>}

      <p className="signup-text">
  Não tem conta?{" "}
  <Link to="/auth" className="signup-link">
    Cadastre-se
  </Link>
</p>
    </form>
  );
};

export default LoginForm;