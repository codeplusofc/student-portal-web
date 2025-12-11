import React from 'react';
import '../../../styles/components/stats-card.css';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  trend?: string;
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  color,
  trend,
  description
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'stats-card-blue';
      case 'green': return 'stats-card-green';
      case 'purple': return 'stats-card-purple';
      case 'orange': return 'stats-card-orange';
      case 'red': return 'stats-card-red';
      default: return 'stats-card-blue';
    }
  };

  return (
    <div className={`stats-card ${getColorClass()}`}>
      <div className="stats-card-header">
        <div className="stats-icon">{icon}</div>
        {trend && (
          <div className={`stats-trend ${trend.startsWith('+') ? 'trend-up' : 'trend-down'}`}>
            {trend}
          </div>
        )}
      </div>
      <div className="stats-value">{value.toLocaleString('pt-BR')}</div>
      <div className="stats-title">{title}</div>
      {description && (
        <div className="stats-description">{description}</div>
      )}
    </div>
  );
};

export default StatsCard;