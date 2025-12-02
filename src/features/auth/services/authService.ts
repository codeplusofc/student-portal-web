import axios from 'axios';

// Usar variável de ambiente do Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const API = axios.create({
  baseURL: API_BASE_URL
});

console.log('🌐 API Base URL (Auth):', API_BASE_URL);

export interface UserRequest {
  name: string;
  email: string;
  password: string;
  registration: string;
}

export const registerUser = async (user: UserRequest) => {
  try {
    const response = await API.post('/users/create', user);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const login = async (registration: string, password: string) => {
  try {
    const response = await API.post('/auth/login', {
      registration,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const getUserByRegistration = async (registration: string) => {
  try {
    const response = await API.get(`/users/by-registration/${registration}`);  // ✅ MUDOU
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário por matrícula:', error);
    throw error;
  }
};


