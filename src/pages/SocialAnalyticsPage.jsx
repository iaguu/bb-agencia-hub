import React from "react";
import Card from "../components/common/Card";

const SocialAnalyticsPage = () => {
  return (
    <div className="page social-page">
      <Card
        title="Redes sociais"
        description="Visão consolidada de métricas de Instagram, TikTok e YouTube."
      >
        <p className="muted">
          Aqui você poderá conectar as contas e puxar métricas reais das APIs
          (Meta, TikTok, YouTube).
        </p>
        <ul className="list">
          <li>Seguidores por rede e por cliente</li>
          <li>Alcance, impressões, engajamento</li>
          <li>Taxa de crescimento semanal / mensal</li>
          <li>Identificação de posts virais e formatos que mais performam</li>
        </ul>
      </Card>
    </div>
  );
};

export default SocialAnalyticsPage;
