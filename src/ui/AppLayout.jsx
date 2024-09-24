import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/ui/applayout.css";
import { useState } from "react";

export default function AppLayout() {
  const [subMenu, ativarsubMenu] = useState(null);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [mostrarCorpo, setMostrarCorpo] = useState(true);

  const mostrarSubMenu = (menu) => {
    if (subMenu === menu) {
      ativarsubMenu(null);
    } else {
      ativarsubMenu(menu);
    }
  };

  const mostrarTiposReciclagem = (index) => {
    setItemSelecionado(index);
    setMostrarCorpo(false);
  };

  const voltarAoCorpo = () => {
    setItemSelecionado(null);
    setMostrarCorpo(true);
  };

  return (
    <div className="layout">
      <Header
        mostrarSubMenu={mostrarSubMenu}
        mostrarTiposReciclagem={mostrarTiposReciclagem}
        voltarAoCorpo={voltarAoCorpo}
        subMenu={subMenu}
      />

      <main>
        <Outlet
          context={{
            itemSelecionado,
            setItemSelecionado,
            mostrarCorpo,
            setMostrarCorpo,
            mostrarTiposReciclagem,
            voltarAoCorpo,
          }}
        />
      </main>
    </div>
  );
}
