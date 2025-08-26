import axios from 'axios';

const API = axios.create({
  baseURL: 'https://student-portal-core-api.onrender.com/api'
});

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

export const getUserByRegistration = async (registration: string) => {
  try {
    const response = await API.get(`/users?registration=${registration}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário por matrícula:', error);
    throw error;
  }
};
