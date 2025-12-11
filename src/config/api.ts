// src/config/api.ts

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

console.log('API Base URL:', API_BASE_URL);
console.log('Environment:', import.meta.env.MODE);
