import axios from 'axios';

// Usar variável de ambiente do Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const API = axios.create({
  baseURL: API_BASE_URL
});

console.log('🌐 API Base URL (Student):', API_BASE_URL);

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
