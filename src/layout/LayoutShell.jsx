import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const LayoutShell = ({ children }) => {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
};

export default LayoutShell;
