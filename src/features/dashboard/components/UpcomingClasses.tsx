import React from 'react';
import '../../../styles/components/upcoming-classes.css';

interface Class {
  id: string;
  title: string;
  time: string;
  date: string;
  room: string;
  teacher: string;
}

interface UpcomingClassesProps {
  classes: Class[];
}

const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes }) => {
  const getDateColor = (date: string) => {
    if (date === 'Hoje') return 'date-today';
    if (date === 'Amanhã') return 'date-tomorrow';
    return 'date-future';
  };

  return (
    <div className="upcoming-classes-card">
      <div className="card-header">
        <h3 className="card-title">📅 Próximas Aulas</h3>
        <button className="view-calendar-btn">
          📆 Calendário
        </button>
      </div>

      <div className="classes-list">
        {classes.length === 0 ? (
          <div className="no-classes">
            Nenhuma aula agendada para esta semana.
          </div>
        ) : (
          classes.map((classItem) => (
            <div key={classItem.id} className="class-item">
              <div className="class-time">
                <div className="class-time-text">{classItem.time}</div>
                <div className={`class-date ${getDateColor(classItem.date)}`}>
                  {classItem.date}
                </div>
              </div>
              <div className="class-details">
                <div className="class-title">{classItem.title}</div>
                <div className="class-info">
                  <span className="class-room">🏫 {classItem.room}</span>
                  <span className="class-teacher">👨‍🏫 {classItem.teacher}</span>
                </div>
              </div>
              <button className="class-join-btn">
                Entrar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingClasses;