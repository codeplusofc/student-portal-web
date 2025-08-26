import axios from 'axios';

const API = axios.create({
  baseURL: 'https://student-portal-core-api.onrender.com/api',
});

export const registerStudent = async (student: { name: string; course: string }) => {
  try {
    const response = await API.post('/students', student);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar estudante:', error);
    throw error;
  }
};

export const getStudentByRegistration = async (registration: string) => {
  try {
    const response = await API.get(`/students?registration=${registration}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar estudante:', error);
    throw error;
  }
};
