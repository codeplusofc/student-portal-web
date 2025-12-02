import React, { useState, useEffect } from 'react';
import questionService, { Question } from '../services/questionService';
import '../styles/questions.css';

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    authorName: 'Usuário Atual',
  });

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await questionService.getAllQuestions();
      setQuestions(data);
    } catch (err) {
      console.error('Erro ao carregar perguntas:', err);
      setError('Erro ao carregar perguntas. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      loadQuestions();
      return;
    }
    try {
      setLoading(true);
      setError('');
      const data = await questionService.searchQuestions(searchTerm);
      setQuestions(data);
    } catch (err) {
      console.error('Erro ao buscar perguntas:', err);
      setError('Erro ao buscar perguntas. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Preenchça todos os campos');
      return;
    }

    try {
      const newQuestion = await questionService.createQuestion({
        title: formData.title,
        content: formData.content,
        authorId: 'user-123',
        authorName: formData.authorName,
      });

      setQuestions([newQuestion, ...questions]);
      setFormData({ title: '', content: '', authorName: 'Usuário Atual' });
      setShowForm(false);
    } catch (err) {
      console.error('Erro ao criar pergunta:', err);
      alert('Erro ao criar pergunta');
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja deletar esta pergunta?')) return;

    try {
      await questionService.deleteQuestion(id);
      setQuestions(questions.filter((q) => q.id !== id));
    } catch (err) {
      console.error('Erro ao deletar pergunta:', err);
      alert('Erro ao deletar pergunta');
    }
  };

  return (
    <div className="questions-container">
      <div className="questions-header">
        <h1>Perguntas</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancelar' : '+ Nova Pergunta'}
        </button>
      </div>

      {showForm && (
        <form className="questions-form" onSubmit={handleCreateQuestion}>
          <input
            type="text"
            placeholder="Título da pergunta"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="form-control"
          />
          <textarea
            placeholder="Conteúdo da pergunta"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="form-control"
            rows={4}
          />
          <button type="submit" className="btn btn-primary">
            Enviar Pergunta
          </button>
        </form>
      )}

      <form className="questions-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar perguntas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-secondary">
          Buscar
        </button>
      </form>

      {error && <div className="alert alert-error">{error}</div>}

      {loading && <div className="alert alert-info">Carregando...</div>}

      {!loading && questions.length === 0 && (
        <div className="alert alert-warning">Nenhuma pergunta disponível</div>
      )}

      {!loading && questions.length > 0 && (
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question-card">
              <h3>{question.title}</h3>
              <p>{question.content}</p>
              <div className="question-meta">
                <span className="author">Por: {question.authorName}</span>
                <span className="answers">
                  Respostas: {question.answerCount}
                </span>
              </div>
              <div className="question-actions">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => alert('Funcionalidade em desenvolvimento')}
                >
                  Ver Detalhes
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}