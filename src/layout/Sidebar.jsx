import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { key: "dashboard", label: "Dashboard", path: "/dashboard" },
  { key: "clients", label: "Clientes", path: "/clients" },
  { key: "social", label: "Redes sociais", path: "/social" },
  { key: "campaigns", label: "Campanhas", path: "/campaigns" },
  { key: "tasks", label: "Tarefas", path: "/tasks" },
  { key: "reports", label: "Relatórios", path: "/reports" },
  { key: "settings", label: "Configurações", path: "/settings" }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <span className="sidebar-logo-mark">AH</span>
          <div className="sidebar-logo-text">
            <strong>Agência HUB</strong>
            <span>Inteligência & Performance</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " is-active" : "")
              }
            >
              <span className="sidebar-link-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
