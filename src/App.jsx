import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutShell from "./layout/LayoutShell";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import SocialAnalyticsPage from "./pages/SocialAnalyticsPage";
import CampaignsPage from "./pages/CampaignsPage";
import TasksPage from "./pages/TasksPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <LayoutShell>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/social" element={<SocialAnalyticsPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </LayoutShell>
  );
};

export default App;
