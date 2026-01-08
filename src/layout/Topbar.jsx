import React from "react";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Painel da Agência</h1>
        <p className="topbar-subtitle">
          Visão geral de clientes, redes sociais, campanhas e tarefas.
        </p>
      </div>
      <div className="topbar-right">
        <div className="topbar-user">
          <div className="topbar-user-avatar">IB</div>
          <div className="topbar-user-meta">
            <span className="topbar-user-name">Iago Barreto</span>
            <span className="topbar-user-role">Diretor de Performance</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
