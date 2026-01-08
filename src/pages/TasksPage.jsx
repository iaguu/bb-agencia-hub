import React from "react";
import Card from "../components/common/Card";

const TasksPage = () => {
  return (
    <div className="page tasks-page">
      <Card
        title="Tarefas / Produção"
        description="Board visual para acompanhar o fluxo de criação."
      >
        <p className="muted">
          Aqui você pode evoluir para um Kanban completo (A Fazer, Em Produção,
          Revisão, Aprovado, Postado) e conectar com os clientes e campanhas.
        </p>
      </Card>
    </div>
  );
};

export default TasksPage;
