import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <header>header</header>
      <aside>sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
