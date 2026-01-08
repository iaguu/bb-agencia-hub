import React from "react";
import Card from "../components/common/Card";

const SettingsPage = () => {
  return (
    <div className="page settings-page">
      <Card
        title="Configurações"
        description="Ajustes de IA, tokens de APIs e preferências da agência."
      >
        <p className="muted">
          Central para configurar chaves de API (Meta, TikTok, YouTube),
          preferências de relatórios, fuso horário e identidade visual da
          agência.
        </p>
      </Card>
    </div>
  );
};

export default SettingsPage;
