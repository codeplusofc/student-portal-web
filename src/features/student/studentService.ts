import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const registerStudent = async (student: { name: string; course: string }) => {
  const response = await API.post('/students', student);
  return response.data;
};

export const getStudentByRegistration = async (registration: string) => {
  const response = await API.get(`/students?registration=${registration}`);
  return response.data;
};