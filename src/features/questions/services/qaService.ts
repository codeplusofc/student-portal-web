import axios from 'axios';
import { API_BASE_URL } from '../config/api';

console.log('🌐 API Base URL (Q&A):', API_BASE_URL);

// Criar instância Axios com interceptor para adicionar token
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token JWT em cada requisição
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export interface Question {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  answerCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateQuestionRequest {
  title: string;
  content: string;
  authorId: string;
  authorName: string;
}

export interface Answer {
  id: string;
  questionId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAnswerRequest {
  content: string;
  authorId: string;
  authorName: string;
}

class QAService {
  /**
   * Get all questions
   */
  async getAllQuestions(): Promise<Question[]> {
    try {
      const response = await apiClient.get('/questions');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar perguntas:', error);
      throw error;
    }
  }

  /**
   * Get question by ID
   */
  async getQuestionById(id: string): Promise<Question> {
    try {
      const response = await apiClient.get(`/questions/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pergunta:', error);
      throw error;
    }
  }

  /**
   * Create a new question
   */
  async createQuestion(request: CreateQuestionRequest): Promise<Question> {
    try {
      const response = await apiClient.post('/questions', request);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar pergunta:', error);
      throw error;
    }
  }

  /**
   * Update a question
   */
  async updateQuestion(id: string, request: CreateQuestionRequest): Promise<Question> {
    try {
      const response = await apiClient.put(`/questions/${id}`, request);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar pergunta:', error);
      throw error;
    }
  }

  /**
   * Delete a question
   */
  async deleteQuestion(id: string): Promise<void> {
    try {
      await apiClient.delete(`/questions/${id}`);
    } catch (error) {
      console.error('Erro ao deletar pergunta:', error);
      throw error;
    }
  }

  /**
   * Search questions by term
   */
  async searchQuestions(term: string): Promise<Question[]> {
    try {
      const response = await apiClient.get(`/questions/search?term=${encodeURIComponent(term)}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar perguntas:', error);
      throw error;
    }
  }

  /**
   * Get answers for a question
   */
  async getAnswers(questionId: string): Promise<Answer[]> {
    try {
      const response = await apiClient.get(`/questions/${questionId}/answers`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar respostas:', error);
      throw error;
    }
  }

  /**
   * Create an answer
   */
  async createAnswer(
    questionId: string,
    request: CreateAnswerRequest
  ): Promise<Answer> {
    try {
      const response = await apiClient.post(
        `/questions/${questionId}/answers`,
        request
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao criar resposta:', error);
      throw error;
    }
  }

  /**
   * Update an answer
   */
  async updateAnswer(
    questionId: string,
    answerId: string,
    request: CreateAnswerRequest
  ): Promise<Answer> {
    try {
      const response = await apiClient.put(
        `/questions/${questionId}/answers/${answerId}`,
        request
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar resposta:', error);
      throw error;
    }
  }

  /**
   * Delete an answer
   */
  async deleteAnswer(questionId: string, answerId: string): Promise<void> {
    try {
      await apiClient.delete(
        `/questions/${questionId}/answers/${answerId}`
      );
    } catch (error) {
      console.error('Erro ao deletar resposta:', error);
      throw error;
    }
  }
}

export default new QAService();