import React, { useEffect, useState } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import '../../styles/pages/dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>({});
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userData);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Layout title={`Bem-vindo, ${user.name || 'Desenvolvedor'}!`}>
      <div className="dashboard-container">
        {/* Data atual */}
        <div className="current-date">
          ☕ Hoje é <span>{currentDate}</span> - Hora de codar!
        </div>

        {/* Cards de Estatísticas */}
        <div className="stats-grid">
          <div className="stat-card stat-card-blue">
            <div className="stat-card-header">
              <div className="stats-icon">❓</div>
              <div className="stats-trend trend-up">+15%</div>
            </div>
            <div className="stats-value">38</div>
            <div className="stats-title">Dúvidas Java/Spring</div>
            <div className="stats-description">Este mês</div>
          </div>

          <div className="stat-card stat-card-green">
            <div className="stat-card-header">
              <div className="stats-icon">💬</div>
              <div className="stats-trend trend-up">+22%</div>
            </div>
            <div className="stats-value">142</div>
            <div className="stats-title">Respostas Técnicas</div>
            <div className="stats-description">Comunidade ativa</div>
          </div>

          <div className="stat-card stat-card-purple">
            <div className="stat-card-header">
              <div className="stats-icon">📚</div>
              <div className="stats-trend trend-up">+8%</div>
            </div>
            <div className="stats-value">24</div>
            <div className="stats-title">Projetos Exemplo</div>
            <div className="stats-description">GitHub</div>
          </div>

          <div className="stat-card stat-card-orange">
            <div className="stat-card-header">
              <div className="stats-icon">👥</div>
              <div className="stats-trend trend-up">+12%</div>
            </div>
            <div className="stats-value">89</div>
            <div className="stats-title">Devs Ativos</div>
            <div className="stats-description">Online agora</div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="dashboard-content">
          {/* Coluna Esquerda */}
          <div className="dashboard-column">
            {/* Dúvidas Recentes sobre Java/Spring */}
            <div className="recent-questions-card">
              <div className="card-header">
                <h3 className="card-title">☕ Dúvidas Java/Spring</h3>
                <button className="view-all-btn">Ver todas</button>
              </div>

              <div className="questions-list">
                {[
                  {
                    id: 1,
                    title: 'Como configurar JPA com Spring Boot 3?',
                    author: 'Carlos Silva',
                    date: 'Hoje',
                    answers: 7,
                    category: 'Spring Boot'
                  },
                  {
                    id: 2,
                    title: 'Diferença entre @Controller e @RestController?',
                    author: 'Ana Santos',
                    date: 'Ontem',
                    answers: 12,
                    category: 'Spring MVC'
                  },
                  {
                    id: 3,
                    title: 'Melhor prática para tratamento de exceções',
                    author: 'Pedro Costa',
                    date: '15/01',
                    answers: 9,
                    category: 'Java'
                  },
                  {
                    id: 4,
                    title: 'Como implementar segurança com JWT?',
                    author: 'Mariana Oliveira',
                    date: '14/01',
                    answers: 5,
                    category: 'Spring Security'
                  }
                ].map((question) => (
                  <div key={question.id} className="question-item">
                    <div className="question-main">
                      <div className="question-title">{question.title}</div>
                      <div className="question-meta">
                        <span className="question-author">👨‍💻 {question.author}</span>
                        <span className="question-date">📅 {question.date}</span>
                        <span className="question-answers">💬 {question.answers} respostas</span>
                      </div>
                    </div>
                    <div className="question-category">{question.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projetos e Materiais */}
            <div className="recent-materials-card">
              <div className="card-header">
                <h3 className="card-title">🚀 Projetos & Materiais</h3>
                <button className="view-library-btn">Ver repositório</button>
              </div>

              <div className="materials-list">
                {[
                  {
                    id: 1,
                    name: 'API REST com Spring Boot 3',
                    category: 'Projeto Completo',
                    date: 'Atualizado hoje',
                    downloads: 156,
                    type: 'github'
                  },
                  {
                    id: 2,
                    name: 'Guia de Microsserviços',
                    category: 'Documentação',
                    date: '12/01/2024',
                    downloads: 89,
                    type: 'pdf'
                  },
                  {
                    id: 3,
                    name: 'Docker para Desenvolvedores Java',
                    category: 'Tutorial',
                    date: '10/01/2024',
                    downloads: 203,
                    type: 'video'
                  },
                  {
                    id: 4,
                    name: 'Testes com JUnit 5 e Mockito',
                    category: 'Exemplos',
                    date: '08/01/2024',
                    downloads: 117,
                    type: 'code'
                  }
                ].map((material) => (
                  <div key={material.id} className="material-item">
                    <div className="material-icon">
                      {material.type === 'github' ? '🐙' :
                       material.type === 'pdf' ? '📄' :
                       material.type === 'video' ? '🎥' : '💻'}
                    </div>
                    <div className="material-details">
                      <div className="material-name">{material.name}</div>
                      <div className="material-meta">
                        <span className="material-category">{material.category}</span>
                        <span className="material-date">📅 {material.date}</span>
                        <span className="material-downloads">⭐ {material.downloads}</span>
                      </div>
                    </div>
                    <button className="material-download-btn" title="Acessar">
                      {material.type === 'github' ? '🐙' : '⬇️'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="dashboard-column">
            {/* Próximas Aulas/Mentorias */}
            <div className="upcoming-classes-card">
              <div className="card-header">
                <h3 className="card-title">📅 Próximas Mentorias</h3>
                <button className="view-calendar-btn">📆 Agenda</button>
              </div>

              <div className="classes-list">
                {[
                  {
                    id: 1,
                    title: 'Spring Security Avançado',
                    time: '19:00 - 21:00',
                    date: 'Hoje',
                    room: 'Sala Virtual #1',
                    teacher: 'Prof. Rodrigo'
                  },
                  {
                    id: 2,
                    title: 'API REST com HATEOAS',
                    time: '14:00 - 16:00',
                    date: 'Amanhã',
                    room: 'Discord #java',
                    teacher: 'Mentor Carlos'
                  },
                  {
                    id: 3,
                    title: 'Kafka + Spring Boot',
                    time: '10:00 - 12:00',
                    date: '23/01',
                    room: 'Zoom #avançado',
                    teacher: 'Especialista Ana'
                  },
                  {
                    id: 4,
                    title: 'Code Review Coletivo',
                    time: '16:00 - 18:00',
                    date: '25/01',
                    room: 'Google Meet',
                    teacher: 'Comunidade'
                  }
                ].map((classItem) => (
                  <div key={classItem.id} className="class-item">
                    <div className="class-time">
                      <div className="class-time-text">{classItem.time}</div>
                      <div className={`class-date ${classItem.date === 'Hoje' ? 'date-today' : classItem.date === 'Amanhã' ? 'date-tomorrow' : 'date-future'}`}>
                        {classItem.date}
                      </div>
                    </div>
                    <div className="class-details">
                      <div className="class-title">{classItem.title}</div>
                      <div className="class-info">
                        <span className="class-room">💻 {classItem.room}</span>
                        <span className="class-teacher">👨‍🏫 {classItem.teacher}</span>
                      </div>
                    </div>
                    <button className="class-join-btn">Participar</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desafios Técnicos */}
            <div className="notifications-card">
              <h3 className="card-title">🏆 Desafios da Semana</h3>
              <div className="notifications-list">
                <div className="notification-item">
                  <div className="notification-icon">⚡</div>
                  <div className="notification-content">
                    <strong>Desafio #15: Otimização de Query JPA</strong>
                    <p>Prazo: 22/01 - Recompensa: 50 pontos</p>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-icon">🔐</div>
                  <div className="notification-content">
                    <strong>Implementar OAuth2 com Keycloak</strong>
                    <p>Nível: Avançado - Bonus: +30 pontos</p>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-icon">🐳</div>
                  <div className="notification-content">
                    <strong>Dockerizar Aplicação Spring Boot</strong>
                    <p>Tutorial prático - Entrega: 24/01</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seu Progresso */}
            <div className="activity-card">
              <h3 className="card-title">📈 Seu Progresso Java</h3>
              <div className="activity-stats">
                <div className="activity-item">
                  <div className="activity-value">8</div>
                  <div className="activity-label">Projetos</div>
                </div>
                <div className="activity-item">
                  <div className="activity-value">47</div>
                  <div className="activity-label">Commits</div>
                </div>
                <div className="activity-item">
                  <div className="activity-value">92%</div>
                  <div className="activity-label">Code Coverage</div>
                </div>
              </div>
              <div className="activity-progress">
                <div className="progress-label">Trilha Spring Expert</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '78%' }}></div>
                </div>
                <div className="progress-value">78%</div>
              </div>
              <div style={{ marginTop: '15px', fontSize: '13px', color: '#64748b' }}>
                ⭐ <strong>Badges:</strong> 🥇 Spring Core • 🥈 REST APIs • 🥉 JPA Master
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack" style={{
          marginTop: '30px',
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '15px' }}>🛠️ Stack Tecnológica</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ background: '#f0f9ff', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Java 17</span>
            <span style={{ background: '#f0fdf4', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Spring Boot 3</span>
            <span style={{ background: '#fefce8', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Spring Security</span>
            <span style={{ background: '#faf5ff', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>JPA/Hibernate</span>
            <span style={{ background: '#f0f9ff', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>PostgreSQL</span>
            <span style={{ background: '#fefce8', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Docker</span>
            <span style={{ background: '#f0fdf4', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>JUnit 5</span>
            <span style={{ background: '#faf5ff', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Git/GitHub</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;