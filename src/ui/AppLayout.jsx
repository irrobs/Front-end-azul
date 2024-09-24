import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/ui/applayout.css";

export default function AppLayout() {
  return (
    <div className="layout">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
