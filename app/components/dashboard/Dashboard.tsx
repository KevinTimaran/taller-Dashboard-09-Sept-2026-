"use client";

import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardHeading from "./DashboardHeading";
import SessionsCard from "./SessionsCard";
import PromoCard from "./PromoCard";
import Notice from "./Notice";

export default function Dashboard({
  statistics,
  conversion,
}: {
  statistics: ReactNode;
  conversion: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  return (
    <div className={`dashboard-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar search={search} onNotice={setNotice} />
      <Topbar
        collapsed={collapsed}
        search={search}
        onToggleSidebar={() => setCollapsed(!collapsed)}
        onSearchChange={setSearch}
        onNotice={setNotice}
      />
      <main className="main-content">
        <DashboardHeading />
        <section className="dashboard-panel" aria-label="Dashboard overview">
          {statistics}
          <div className="detail-grid">
            <SessionsCard />
            <div className="right-column">
              <PromoCard onNotice={setNotice} />
              {conversion}
            </div>
          </div>
        </section>
      </main>
      {notice && <Notice message={notice} onDismiss={() => setNotice("")} />}
    </div>
  );
}
