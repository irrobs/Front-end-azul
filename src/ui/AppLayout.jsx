import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/ui/applayout.css";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
