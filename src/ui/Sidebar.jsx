/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import "../styles/ui/sidebar.css";

import fechar_barra_lateral from "/assets/close.svg";

export default function Sidebar({
  mostrarSubMenu,
  mostrarTiposReciclagem,
  barraLateral,
  mostrarSidebar,
  subMenu,
  voltarAoCorpo,
}) {
  let location = useLocation();

  return (
    <aside className={`barralateral ${barraLateral ? "open" : ""}`}>
      <img
        className="filter-white"
        style={{ width: "45px" }}
        src={fechar_barra_lateral}
        onClick={mostrarSidebar}
      />
      <ul>
        <li>
          <Link to="/">Buscador de Decarte</Link>
        </li>
        {location.pathname === "/aprenda" ? (
          <li onClick={() => mostrarSubMenu("about")}>
            Aprenda a Reciclar
            {subMenu === "about" && (
              <ul className="submenu">
                <li onClick={voltarAoCorpo}>Página Inicial</li>
                <li
                  id="rec_nao-reciclavel"
                  onClick={() => mostrarTiposReciclagem(0) + mostrarSidebar()}
                >
                  Não Reciclável
                </li>
                <li
                  id="rec_papel"
                  onClick={() => mostrarTiposReciclagem(1) + mostrarSidebar()}
                >
                  ♻ Papel
                </li>
                <li
                  id="rec_metal"
                  onClick={() => mostrarTiposReciclagem(2) + mostrarSidebar()}
                >
                  ♻ Metal
                </li>
                <li
                  id="rec_vidro"
                  onClick={() => mostrarTiposReciclagem(3) + mostrarSidebar()}
                >
                  ♻ Vidro
                </li>
                <li
                  id="rec_organico"
                  onClick={() => mostrarTiposReciclagem(4) + mostrarSidebar()}
                >
                  ♻ Orgânico
                </li>
                <li
                  id="rec_pilha"
                  onClick={() => mostrarTiposReciclagem(5) + mostrarSidebar()}
                >
                  ♻ Pilha
                </li>
                <li
                  id="rec_eletronico"
                  onClick={() => mostrarTiposReciclagem(6) + mostrarSidebar()}
                >
                  ♻ Lixo Eletrônico
                </li>
                <li
                  id="rec_plastico"
                  onClick={() => mostrarTiposReciclagem(7) + mostrarSidebar()}
                >
                  ♻ Plástico
                </li>
              </ul>
            )}
          </li>
        ) : null}
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  barraLateral: PropTypes.bool.isRequired,
  mostrarSidebar: PropTypes.func.isRequired,
};
