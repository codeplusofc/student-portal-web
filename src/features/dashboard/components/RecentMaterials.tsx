import React from 'react';
import '../../../styles/components/recent-materials.css';

interface Material {
  id: string;
  name: string;
  category: string;
  uploadDate: string;
  downloads: number;
  type: 'pdf' | 'video' | 'slide' | 'other';
}

interface RecentMaterialsProps {
  materials: Material[];
}

const RecentMaterials: React.FC<RecentMaterialsProps> = ({ materials }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'slide': return '📊';
      default: return '📎';
    }
  };

  const handleDownload = (materialId: string) => {
    // Simular download
    console.log(`Downloading material ${materialId}`);
    // Aqui virá a lógica real de download
  };

  return (
    <div className="recent-materials-card">
      <div className="card-header">
        <h3 className="card-title">📚 Materiais Recentes</h3>
        <button className="view-library-btn">
          Ver biblioteca
        </button>
      </div>

      <div className="materials-list">
        {materials.length === 0 ? (
          <div className="no-materials">
            Nenhum material recente.
          </div>
        ) : (
          materials.map((material) => (
            <div key={material.id} className="material-item">
              <div className="material-icon">
                {getTypeIcon(material.type)}
              </div>
              <div className="material-details">
                <div className="material-name">{material.name}</div>
                <div className="material-meta">
                  <span className="material-category">{material.category}</span>
                  <span className="material-date">📅 {material.uploadDate}</span>
                  <span className="material-downloads">⬇️ {material.downloads}</span>
                </div>
              </div>
              <button
                className="material-download-btn"
                onClick={() => handleDownload(material.id)}
                title="Baixar material"
              >
                ⬇️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentMaterials;