import { Header, Sidebar } from "@/components/shared/dashboard";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const { children } = props;

  return (
    <main className="app_dashboard_layout">
      <div className="app_dashboard_layout__sidebar">
        <Sidebar />
      </div>

      <div className="app_dashboard_layout__ctt">
        <Header />
        <div className="app_dashboard_layout__ctt__children overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
