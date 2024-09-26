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
                  id="rec_0"
                  onClick={() => mostrarTiposReciclagem(0) + mostrarSidebar()}
                >
                  ♻Reciclagem de Plástico
                </li>
                <li
                  id="rec_1"
                  onClick={() => mostrarTiposReciclagem(1) + mostrarSidebar()}
                >
                  ♻1 Polietileno Tereftalato
                </li>
                <li
                  id="rec_2"
                  onClick={() => mostrarTiposReciclagem(2) + mostrarSidebar()}
                >
                  ♻2 Polietileno de Alta Densidade
                </li>
                <li
                  id="rec_3"
                  onClick={() => mostrarTiposReciclagem(3) + mostrarSidebar()}
                >
                  ♻3 Policloreto de Vinila
                </li>
                <li
                  id="rec_4"
                  onClick={() => mostrarTiposReciclagem(4) + mostrarSidebar()}
                >
                  ♻4 Polietileno de Baixa Densidade
                </li>
                <li
                  id="rec_5"
                  onClick={() => mostrarTiposReciclagem(5) + mostrarSidebar()}
                >
                  ♻5 Polipropileno
                </li>
                <li
                  id="rec_6"
                  onClick={() => mostrarTiposReciclagem(6) + mostrarSidebar()}
                >
                  ♻6 Poliestireno
                </li>
                <li
                  id="rec_7"
                  onClick={() => mostrarTiposReciclagem(7) + mostrarSidebar()}
                >
                  ♻7 Outros
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
