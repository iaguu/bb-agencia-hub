# BB Agência Hub

Painel inteligente para gestão de agência digital com clientes, redes sociais, campanhas e relatórios.

## 🏢 Sobre

Aplicação desktop Electron completa para agências digitais gerenciarem clientes, campanhas de marketing, redes sociais e gerar relatórios detalhados.

## 🚀 Features

- **Gestão de Clientes**: Cadastro e gerenciamento completo
- **Redes Sociais**: Integração com múltiplas plataformas
- **Campanhas**: Criação e acompanhamento de campanhas
- **Relatórios**: Dashboard analítico com métricas
- **Interface Desktop**: Aplicação nativa com Electron

## 📋 Requisitos

- Node.js 18+
- Electron runtime
- Sistema operacional (Windows/macOS/Linux)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Iniciar modo desenvolvimento
npm run dev
```

## 🚀 Inicialização

### Modo Desenvolvimento
```bash
# Iniciar frontend e Electron
npm run dev

# Apenas frontend
npm run dev:renderer

# Apenas Electron
npm run dev:electron
```

### Modo Produção
```bash
# Build da aplicação
npm run build

# Iniciar aplicação
npm start
```

## 📁 Estrutura

```
bb-agencia-hub/
├── src/                  # Frontend React
│   ├── components/      # Componentes UI
│   ├── pages/          # Páginas da aplicação
│   ├── hooks/          # Hooks customizados
│   └── utils/          # Utilitários
├── electron/            # Configuração Electron
├── data/               # Dados e configurações
├── index.html          # Template HTML
└── package.json        # Dependências
```

## 🔧 Configuração

### Estrutura de Dados
A aplicação utiliza a pasta `data/` para:
- `clients.json` - Base de clientes
- `campaigns.json` - Campanhas ativas
- `social.json` - Configurações de redes sociais
- `reports.json` - Histórico de relatórios

### Configuração do Electron
```javascript
// electron/main.js
const { app, BrowserWindow } = require('electron')

// Configuração da janela principal
const mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
})
```

## 📊 Funcionalidades

### Gestão de Clientes
- **Cadastro**: Formulário completo de clientes
- **Histórico**: Acompanhamento de interações
- **Contratos**: Gestão de contratos e serviços
- **Billing**: Controle de faturamento

### Redes Sociais
- **Facebook**: Integração com Facebook Pages
- **Instagram**: Gestão de conteúdo e stories
- **Twitter**: Agendamento de posts
- **LinkedIn**: Gestão de conteúdo profissional

### Campanhas
- **Criação**: Wizard de criação de campanhas
- **A/B Testing**: Testes de variantes
- **Segmentação**: Segmentação de público
- **Analytics**: Métricas de performance

### Relatórios
- **Dashboard**: Visão geral de métricas
- **Relatórios Customizados**: Relatórios sob medida
- **Exportação**: PDF, Excel, CSV
- **Agendamento**: Relatórios automáticos

## 🎨 Interface

### Design System
- **Cores**: Paleta corporativa customizável
- **Tipografia**: Fontes modernas e legíveis
- **Componentes**: Biblioteca de componentes reutilizáveis
- **Layout**: Grid system responsivo

### Navegação
- **Sidebar**: Menu lateral intuitivo
- **Breadcrumb**: Navegação estruturada
- **Search**: Busca rápida de informações
- **Notifications**: Sistema de notificações

## 🔧 Desenvolvimento

### Componentes Principais
```jsx
// src/components/ClientCard.jsx
export function ClientCard({ client, onEdit, onDelete }) {
  return (
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>{client.email}</p>
      <button onClick={() => onEdit(client)}>Editar</button>
    </div>
  )
}
```

### Páginas
- `src/pages/Dashboard.jsx` - Dashboard principal
- `src/pages/Clients.jsx` - Gestão de clientes
- `src/pages/Campaigns.jsx` - Campanhas
- `src/pages/Reports.jsx` - Relatórios

## 📊 Analytics

### Métricas Disponíveis
- **Engajamento**: Likes, comments, shares
- **Alcance**: Impressões, reach
- **Conversão**: Leads, vendas
- **ROI**: Retorno sobre investimento

### Visualizações
- **Gráficos**: Line, bar, pie charts
- **Tabelas**: Dados detalhados
- **KPIs**: Indicadores chave
- **Tendências**: Análise temporal

## 🔒 Segurança

- **Dados Locais**: Armazenamento local seguro
- **Backup**: Backup automático de dados
- **Autenticação**: Login seguro com criptografia
- **Permissões**: Sistema de níveis de acesso

## 🚀 Deploy

### Build para Produção
```bash
# Build do frontend
npm run build

# Empacotar aplicação
npm run package

# Gerar instalador
npm run dist
```

### Distribuição
- **Windows**: `.exe` installer
- **macOS**: `.dmg` package
- **Linux**: `.AppImage` ou `.deb`

## 🧪 Testes

```bash
# Testes unitários (se implementados)
npm test

# Testes E2E (se implementados)
npm run test:e2e
```

## 📝 Logs

A aplicação gera logs em:
- `logs/app.log` - Logs da aplicação
- `logs/error.log` - Logs de erros
- `logs/access.log` - Logs de acesso

## 🤝 Contribuição

1. Fork o projeto
2. Criar feature branch
3. Implementar mudanças
4. Testar funcionalidades
5. Pull request

## 📄 Licença

MIT License

---

**BB Agência Hub - Gestão Inteligente de Agências Digitais**
