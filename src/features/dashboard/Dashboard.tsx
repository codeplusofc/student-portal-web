import "../../styles/dashboard.css";

const Dashboard = () => {
  const aluno = {
    nome: "Guilherme",
    proximaAula: "Lógica de programação - 10:00",
    ultimaNota: "Prova de Lógica: 9.5",
    avisoRecente: "Novo material disponível sobre Java"
  };

  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
 //add some school logo at the top
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li><a href="#">📚 Meus Cursos</a></li>
          <li><a href="#">📝 Tarefas</a></li>
          <li><a href="#">📅 Calendário</a></li>
          <li><a href="#">📄 Notas</a></li>
          <li><a href="#">💬 Mensagens</a></li>
          <li><a href="#">⚙️ Configurações</a></li>
          <li><a href="#">🚪 Sair</a></li>
        </ul>
      </aside>

      <main className="main-content">
  <header>
    <h1>Bem-vindo, {aluno.nome}!</h1>
    <p>Hoje é <span>{dataAtual}</span></p>
  </header>

  <section className="dashboard-cards">
    <div className="card">
      <h3>Próxima Aula</h3>
      <p>{aluno.proximaAula}</p>
    </div>
    <div className="card">
      <h3>Última Nota</h3>
      <p>{aluno.ultimaNota}</p>
    </div>
    <div className="card">
      <h3>Avisos Recentes</h3>
      <p>{aluno.avisoRecente}</p>
    </div>
  </section>
</main>
    </div>
  );
};

export default Dashboard;
