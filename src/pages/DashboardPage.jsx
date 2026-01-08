import React from "react";
import Card from "../components/common/Card";

const DashboardPage = () => {
  return (
    <div className="page dashboard-page">
      <div className="grid grid-3">
        <Card
          title="Visão geral"
          description="Resumo das principais métricas da agência."
        >
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">Clientes ativos</span>
              <span className="metric-value">12</span>
              <span className="metric-sub">+2 este mês</span>
            </div>
            <div className="metric">
              <span className="metric-label">Contas de redes sociais</span>
              <span className="metric-value">34</span>
              <span className="metric-sub">Instagram, TikTok, YouTube</span>
            </div>
            <div className="metric">
              <span className="metric-label">Campanhas em andamento</span>
              <span className="metric-value">8</span>
              <span className="metric-sub">3 em fase de escala</span>
            </div>
          </div>
        </Card>

        <Card
          title="Heatmap de publicação"
          description="Melhores horários consolidados por cliente."
        >
          <p className="muted">
            Aqui entra o gráfico/heatmap real quando conectado às APIs das redes.
          </p>
          <ul className="list">
            <li>Seg–Qui · 19h–22h – maior retenção</li>
            <li>Sáb · 11h–14h – melhor CTR em anúncios</li>
            <li>Dom · 18h–21h – picos de engajamento orgânico</li>
          </ul>
        </Card>

        <Card
          title="Alertas inteligentes"
          description="Monitoramento automático de quedas e oportunidades."
        >
          <ul className="alerts">
            <li className="alert alert-warning">
              Cliente &quot;Pizzaria Anne & Tom&quot; com queda de 23% no alcance
              nos últimos 7 dias.
            </li>
            <li className="alert alert-success">
              Campanha &quot;Lançamento Delivery Zona Norte&quot; acima de 180% do ROAS alvo.
            </li>
            <li className="alert alert-info">
              Perfil &quot;Clínica SmartPatch&quot; com crescimento orgânico fora da curva.
            </li>
          </ul>
        </Card>
      </div>

      <div className="grid grid-2 mt-lg">
        <Card
          title="Fila de produção"
          description="Tarefas e conteúdos da semana."
        >
          <ul className="list">
            <li>Reels para Pizzaria – &quot;Segunda do Cliente VIP&quot;</li>
            <li>Carrossel educativo – &quot;Tabacaria HipedX&quot;</li>
            <li>Tráfego – campanha de conversão &quot;Smart Adhesive&quot;</li>
          </ul>
        </Card>
        <Card
          title="Sugestões da IA"
          description="Ideias rápidas para preencher o calendário editorial."
        >
          <ul className="list">
            <li>
              Série &quot;Bastidores do Forno&quot; – 3 vídeos curtos por semana
              mostrando o preparo na pizzaria.
            </li>
            <li>
              Conteúdo comparativo &quot;Antes e Depois&quot; para a linha de adesivos
              anti-grude.
            </li>
            <li>
              Live mensal de perguntas e respostas com o gestor da agência para
              fortalecer a marca B2B.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
