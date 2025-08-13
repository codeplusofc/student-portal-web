import React, { useEffect, useState } from "react";
import axios from "axios";

interface Agenda {
  id: string;
  name: string;
  deadline: string;
}

const VoteSession = () => {
  const [agendas, setAgendas] = useState<Agenda[]>([]);
  const [votedAgendaId, setVotedAgendaId] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/agendas")
      .then(response => setAgendas(response.data))
      .catch(error => console.error("Erro ao buscar agendas", error));
  }, []);

  const votar = (agendaId: string, voto: boolean) => {
    axios.post(`http://localhost:8080/api/votos/${agendaId}?voto=${voto}`)
      .then(() => {
        alert("Voto registrado com sucesso!");
        setVotedAgendaId(agendaId);
      })
      .catch(() => alert("Erro ao votar"));
  };

  return (
    <section className="vote-section">
      <h2>Pautas de Votação</h2>
      {agendas.length === 0 ? (
        <p>Nenhuma pauta disponível no momento.</p>
      ) : (
        agendas.map((agenda) => (
          <div key={agenda.id} className="vote-card">
            <h3>{agenda.name}</h3>
            <p>Prazo: {new Date(agenda.deadline).toLocaleString("pt-BR")}</p>
            <div>
              {votedAgendaId === agenda.id ? (
                <p>✅ Você já votou</p>
              ) : (
                <>
                  <button onClick={() => votar(agenda.id, true)}>Sim 👍</button>
                  <button onClick={() => votar(agenda.id, false)}>Não 👎</button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default VoteSession;
