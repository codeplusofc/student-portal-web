// src/features/admin/AdminDashboard.tsx
import React, { useState } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import '../../styles/pages/admin.css';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('payments');

  const tabs = [
    { id: 'payments', label: '💰 Pagamentos', icon: '💰' },
    { id: 'grades', label: '📊 Notas', icon: '📊' },
    { id: 'exams', label: '📝 Provas', icon: '📝' },
    { id: 'students', label: '👥 Alunos', icon: '👥' },
    { id: 'materials', label: '📚 Materiais', icon: '📚' },
  ];

  return (
    <Layout title="Área de Administração">
      <div className="admin-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {activeTab === 'payments' && (
          <div className="payments-section">
            <h2>Gerenciamento de Pagamentos</h2>
            {/* Tabela de pagamentos */}
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="grades-section">
            <h2>Lançamento de Notas</h2>
            {/* Sistema de notas */}
          </div>
        )}

        {activeTab === 'exams' && (
          <div className="exams-section">
            <h2>Criação de Provas</h2>
            {/* Criador de provas */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;