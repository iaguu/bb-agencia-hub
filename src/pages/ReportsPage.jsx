import React from "react";
import Card from "../components/common/Card";

const ReportsPage = () => {
  return (
    <div className="page reports-page">
      <Card
        title="Relatórios"
        description="Geração de PDFs executivos para envio aos clientes."
      >
        <p className="muted">
          No futuro, esta tela pode disparar a geração automática de PDF com
          gráficos, resumos da IA e plano de ação para o próximo mês.
        </p>
      </Card>
    </div>
  );
};

export default ReportsPage;
