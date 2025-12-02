import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/layouts/header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  // Obter dados do usuário do localStorage
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : { name: 'Usuário' };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <header className="header">
      <div
        className="header-logo"
        onClick={() => navigate('/dashboard')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/dashboard')}
      >
        🎓 Portal do Aluno
      </div>
      <div className="header-right">
        <div className="user-info">
          👤 {user.name}
        </div>
        <button
          className="btn-logout"
          onClick={handleLogout}
          aria-label="Sair do sistema"
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default Header;