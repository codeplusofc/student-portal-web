import { useForm } from 'react-hook-form';
import { registerStudent } from "../../student/studentService";

type FormData = {
  name: string;
  course: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await registerStudent(data);
      alert(`Cadastro realizado! Matrícula: ${response.registration}`);
      reset();
    } catch (err) {
      alert('Erro ao cadastrar aluno.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Cadastro de Aluno</h2>
      <input {...register('name')} placeholder="Nome completo" required />
      <input {...register('course')} placeholder="Curso" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;