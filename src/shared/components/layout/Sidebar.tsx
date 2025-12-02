import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../../styles/layouts/sidebar.css';

interface MenuItem {
  path: string;
  icon: string;
  label: string;
  adminOnly?: boolean;
}

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Verificar se é admin (por enquanto, todos são estudantes)
  const isAdmin = false;

  const menuItems: MenuItem[] = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/perguntas', icon: '❓', label: 'Perguntas' },
    { path: '/biblioteca', icon: '📚', label: 'Biblioteca' },
    { path: '/busca', icon: '🔍', label: 'Busca' },
    { path: '/perfil', icon: '👤', label: 'Perfil' },
    { path: '/admin', icon: '⚙️', label: 'Admin', adminOnly: true },
  ];

  const filteredMenuItems = menuItems.filter(item =>
    !item.adminOnly || (item.adminOnly && isAdmin)
  );

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {filteredMenuItems.map((item) => {
          const isActive = location.pathname === item.path ||
                          (item.path !== '/' && location.pathname.startsWith(item.path));

          return (
            <li key={item.path} className={isActive ? 'active' : ''}>
              <NavLink
                to={item.path}
                className="sidebar-link"
                title={item.label}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;