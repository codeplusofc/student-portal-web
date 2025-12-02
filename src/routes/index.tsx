import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../features/auth/components/LoginForm';
import Layout from '../shared/components/Layout/Layout';
import Dashboard from '../features/dashboard/Dashboard';

const Questions = () => (
  <Layout title="Dúvidas Java/Spring">
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#1e3a8a', margin: 0 }}>☕ Comunidade Java/Spring</h2>
        <button
          style={{
            padding: '10px 20px',
            background: '#1e3a8a',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          + Nova Dúvida
        </button>
      </div>

      {/* Barra de busca */}
      <div style={{
        padding: '20px',
        background: '#f8fafc',
        borderRadius: '8px',
        marginBottom: '25px'
      }}>
        <input
          type="text"
          placeholder="Buscar dúvidas sobre Java, Spring, JPA, Security..."
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Filtros */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '25px',
        flexWrap: 'wrap'
      }}>
        <button style={{
          padding: '8px 16px',
          background: '#1e3a8a',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Todas
        </button>
        <button style={{
          padding: '8px 16px',
          background: '#f1f5f9',
          color: '#475569',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Spring Boot
        </button>
        <button style={{
          padding: '8px 16px',
          background: '#f1f5f9',
          color: '#475569',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Spring Security
        </button>
        <button style={{
          padding: '8px 16px',
          background: '#f1f5f9',
          color: '#475569',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          JPA/Hibernate
        </button>
        <button style={{
          padding: '8px 16px',
          background: '#f1f5f9',
          color: '#475569',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Docker
        </button>
        <button style={{
          padding: '8px 16px',
          background: '#f1f5f9',
          color: '#475569',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Testes
        </button>
      </div>

      {/* Lista de dúvidas */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {[
          {
            id: 1,
            title: 'Como implementar cache distribuído com Redis no Spring?',
            content: 'Estou com problemas para configurar cache distribuído em ambiente de múltiplas instâncias...',
            author: 'Carlos Mendes',
            date: 'Hoje 14:30',
            answers: 8,
            votes: 24,
            tags: ['Spring Boot', 'Redis', 'Cache', 'Avançado']
          },
          {
            id: 2,
            title: 'Melhor prática para versionamento de API REST',
            content: 'Qual a abordagem recomendada para versionar APIs em projetos Spring Boot grandes?',
            author: 'Ana Lúcia',
            date: 'Ontem 11:15',
            answers: 12,
            votes: 42,
            tags: ['REST API', 'Boas Práticas', 'Versionamento']
          },
          {
            id: 3,
            title: 'Problema com LazyInitializationException no JPA',
            content: 'Recebo LazyInitializationException quando acesso coleções fora do contexto transacional...',
            author: 'Roberto Alves',
            date: '15/01 09:45',
            answers: 15,
            votes: 31,
            tags: ['JPA', 'Hibernate', 'Lazy Loading', 'Transações']
          },
          {
            id: 4,
            title: 'Configurar SSL/TLS em Spring Boot para produção',
            content: 'Preciso configurar HTTPS no meu projeto Spring Boot para ambiente de produção...',
            author: 'Fernanda Costa',
            date: '14/01 16:20',
            answers: 6,
            votes: 18,
            tags: ['Spring Security', 'SSL', 'Produção', 'DevOps']
          }
        ].map((question) => (
          <div key={question.id} style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '10px',
            borderLeft: '4px solid #3b82f6',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>
              {question.title}
            </h3>
            <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '14px' }}>
              {question.content}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px', flexWrap: 'wrap' }}>
              {question.tags.map((tag, index) => (
                <span key={index} style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta informações */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '13px',
              color: '#94a3b8'
            }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <span>👨‍💻 {question.author}</span>
                <span>📅 {question.date}</span>
                <span>💬 {question.answers} respostas</span>
                <span>👍 {question.votes} votos</span>
              </div>
              <button style={{
                padding: '6px 12px',
                background: 'transparent',
                color: '#3b82f6',
                border: '1px solid #3b82f6',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                Responder
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Estatísticas da comunidade */}
      <div style={{
        marginTop: '40px',
        padding: '25px',
        background: '#f0f9ff',
        borderRadius: '10px',
        borderLeft: '4px solid #0ea5e9'
      }}>
        <h3 style={{ color: '#0369a1', marginBottom: '15px' }}>📊 Comunidade Ativa</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>489</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Desenvolvedores</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>1.2k</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Dúvidas resolvidas</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>94%</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Taxa de solução</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>48h</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Tempo médio resposta</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

const Library = () => (
  <Layout title="Biblioteca">
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#1e3a8a', margin: 0 }}>📚 Biblioteca de Materiais</h2>
        <button
          style={{
            padding: '10px 20px',
            background: '#1e3a8a',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          📤 Upload de Material
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #3b82f6, #1e3a8a)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
              }}>
                📄
              </div>
              <div>
                <h3 style={{ color: '#1e293b', margin: '0 0 5px 0', fontSize: '16px' }}>
                  Material {item}
                </h3>
                <span style={{
                  background: '#e0f2fe',
                  color: '#0369a1',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Java
                </span>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '15px' }}>
              Material de estudo para auxiliar nas aulas.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
              color: '#94a3b8'
            }}>
              <span>📅 15/01/2024</span>
              <span>⬇️ 42 downloads</span>
            </div>
            <button style={{
              width: '100%',
              marginTop: '15px',
              padding: '10px',
              background: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Baixar
            </button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

const Search = () => (
  <Layout title="Busca">
    <div style={{ padding: '20px', background: 'white', borderRadius: '10px' }}>
      <h2>Busca Avançada</h2>
      <p>Em breve: Sistema de busca em perguntas e materiais</p>
    </div>
  </Layout>
);

const Profile = () => (
  <Layout title="Perfil">
    <div style={{ padding: '20px', background: 'white', borderRadius: '10px' }}>
      <h2>Meu Perfil</h2>
      <p>Em breve: Informações pessoais e histórico</p>
    </div>
  </Layout>
);

const Admin = () => (
  <Layout title="Admin">
    <div style={{ padding: '20px', background: 'white', borderRadius: '10px' }}>
      <h2>Área de Administração</h2>
      <p>Em breve: Gerenciamento de pagamentos, notas e provas</p>
    </div>
  </Layout>
);

const Register = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    padding: '20px'
  }}>
    <div style={{
      background: 'white',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#1e3a8a' }}>🎓 Criar Conta</h1>
      <p style={{ color: '#6b7280', margin: '20px 0' }}>
        Página de cadastro em construção
      </p>
      <button
        onClick={() => window.history.back()}
        style={{
          padding: '12px 24px',
          background: '#1e3a8a',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        ← Voltar para Login
      </button>
    </div>
  </div>
);

const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<Register />} />

        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perguntas" element={<Questions />} />
            <Route path="/biblioteca" element={<Library />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;