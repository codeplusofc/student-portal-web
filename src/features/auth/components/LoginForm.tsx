import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/components/ui/Button';
import '../../../styles/pages/auth.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 800));

      // Mock user data
      const mockUser = {
        id: '1',
        name: 'João Silva',
        email: email,
        role: 'student',
        registration: '20230001',
        course: 'Ciência da Computação'
      };

      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('access_token', 'mock-jwt-token');

      navigate('/dashboard');

    } catch (err) {
      setError('Email ou senha incorretos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>🎓 Portal do Aluno</h1>
          <p>Faça login para acessar o portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="loginEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword" className="form-label">
              Senha
            </label>
            <input
              type="password"
              id="loginPassword"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="form-input"
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-actions">
            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              loading={loading}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <div className="divider">
              <span>ou</span>
            </div>

            <Button
              type="button"
              variant="outline"
              size="large"
              fullWidth
              onClick={handleRegisterClick}
              disabled={loading}
            >
              Criar nova conta
            </Button>
          </div>

          <div className="login-footer">
            <p className="forgot-password">
              <a href="/recuperar-senha" className="footer-link">
                Esqueceu sua senha?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;