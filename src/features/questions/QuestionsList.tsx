// src/features/questions/QuestionsList.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Question } from '../../shared/types';
import qaService from './services/qaService';
import '../../styles/pages/questions.css';

const QuestionsList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async (term?: string) => {
    try {
      setLoading(true);
      const data = term
        ? await qaService.searchQuestions(term)
        : await qaService.getAllQuestions();
      setQuestions(data);
    } catch (error) {
      console.error('Erro ao carregar perguntas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadQuestions(searchTerm);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar esta pergunta?')) {
      try {
        await qaService.deleteQuestion(id);
        setQuestions(questions.filter(q => q.id !== id));
      } catch (error) {
        console.error('Erro ao deletar pergunta:', error);
      }
    }
  };

  const isOwner = (question: Question) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return question.authorId === user.id;
  };

  return (
    <div className="questions-container">
      <div className="section-header">
        <h1 className="section-title">Perguntas</h1>
        <Link to="/perguntas/nova" className="btn btn-primary">
          + Nova Pergunta
        </Link>
      </div>

      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar perguntas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {loading ? (
        <div className="loading">Carregando...</div>
      ) : questions.length === 0 ? (
        <div className="no-results">Nenhuma pergunta encontrada.</div>
      ) : (
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question-item">
              <div onClick={() => window.location.href = `/perguntas/${question.id}`}>
                <div className="question-title">{question.title}</div>
                <div className="question-meta">
                  <span>👤 {question.authorName}</span>
                  <span>📅 {new Date(question.createdAt).toLocaleDateString('pt-BR')}</span>
                  <span>💬 {question.answers?.length || 0} respostas</span>
                </div>
              </div>
              {isOwner(question) && (
                <div className="question-actions">
                  <button
                    className="btn-small btn-edit"
                    onClick={() => window.location.href = `/perguntas/editar/${question.id}`}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-small btn-delete"
                    onClick={() => handleDelete(question.id)}
                  >
                    Deletar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsList;