import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getStudentByRegistration } from "../../student/studentService";

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
      <input {...register('registration')} placeholder="Matrícula" required />
      <button type="submit">Entrar</button>
      {studentName && <p>Bem-vindo, {studentName}!</p>}
    </form>
  );
};

export default LoginForm;