import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/components/recent-questions.css';

interface Question {
  id: string;
  title: string;
  authorName: string;
  createdAt: string;
  answerCount: number;
  category?: string;
}

interface RecentQuestionsProps {
  questions: Question[];
}

const RecentQuestions: React.FC<RecentQuestionsProps> = ({ questions }) => {
  const navigate = useNavigate();

  const handleViewQuestion = (id: string) => {
    navigate(`/perguntas/${id}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="recent-questions-card">
      <div className="card-header">
        <h3 className="card-title">❓ Perguntas Recentes</h3>
        <button
          className="view-all-btn"
          onClick={() => navigate('/perguntas')}
        >
          Ver todas
        </button>
      </div>

      <div className="questions-list">
        {questions.length === 0 ? (
          <div className="no-questions">
            Nenhuma pergunta recente.
          </div>
        ) : (
          questions.map((question) => (
            <div
              key={question.id}
              className="question-item"
              onClick={() => handleViewQuestion(question.id)}
            >
              <div className="question-main">
                <div className="question-title">{question.title}</div>
                <div className="question-meta">
                  <span className="question-author">👤 {question.authorName}</span>
                  <span className="question-date">📅 {formatDate(question.createdAt)}</span>
                  <span className="question-answers">💬 {question.answerCount} respostas</span>
                </div>
              </div>
              {question.category && (
                <div className="question-category">
                  {question.category}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentQuestions;