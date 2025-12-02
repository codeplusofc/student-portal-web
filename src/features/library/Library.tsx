// src/features/library/Library.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import MaterialCard from './MaterialCard';
import MaterialUpload from './MaterialUpload';
import '../../styles/pages/library.css';

interface Material {
  id: string;
  name: string;
  description: string;
  category: string;
  filename: string;
  upload_date: string;
  downloads: number;
}

const Library: React.FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const categories = ['Matemática', 'Português', 'História', 'Ciências', 'Outro'];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || material.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout title="Biblioteca">
      <div className="section-header">
        <h1 className="section-title">Biblioteca de Materiais</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowUploadModal(true)}
        >
          + Upload de Material
        </button>
      </div>

      <div className="filter-section">
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Todas as Categorias</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar materiais..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1 }}
        />
      </div>

      <div className="materials-grid">
        {filteredMaterials.length === 0 ? (
          <div className="no-results">Nenhum material encontrado.</div>
        ) : (
          filteredMaterials.map(material => (
            <MaterialCard key={material.id} material={material} />
          ))
        )}
      </div>

      {showUploadModal && (
        <MaterialUpload
          onClose={() => setShowUploadModal(false)}
          onUpload={(newMaterial) => {
            setMaterials([...materials, newMaterial]);
            setShowUploadModal(false);
          }}
        />
      )}
    </Layout>
  );
};

export default Library;