import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [tipoReciclagem, setTipoReciclagem] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (tipoReciclagem === "") {
      return alert("Escolha uma das opções");
    }

    try {
      console.log("fetching");
      const response = await fetch(
        "https://api-smartwaste.onrender.com/api/locaisDescarte"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const locais = await response.json(); // Parse the JSON response
      /* const locais = data.filter(
        (data) => data.tipo_de_reciclagem === tipoReciclagem
      ); */

      // Fetch the user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userPosition = { latitude, longitude };

            // Navigate only after fetching the location
            navigate("/info", { state: { locais, position: userPosition } });
          },
          (err) => alert(err.message)
        );
      } else {
        alert("Geolocalização não é suportada no seu browser.");
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="hemisphere north">
        <h1>BUSCADOR DE DESCARTE</h1>
        <select
          className="search-bar"
          value={tipoReciclagem}
          onChange={(e) => {
            setTipoReciclagem(e.target.value);
          }}
        >
          <option value="">O que você quer reciclar?</option>
          <option value="metal">Metal</option>
          <option value="plastico">Plástico</option>
        </select>

        <button className="button-search">Encontrar locais</button>
      </form>
      <div className="hemisphere south">
        <div className="google-maps-info">
          <img
            src="https://i.pinimg.com/736x/66/1e/98/661e98a8e38f681575da93d0a1c3f4fc.jpg"
            alt="Google Maps"
          />
          <div className="text-and-button">
            <span>Cadastre um novo local de descarte.</span>
            <div className="button-container">
              <button>Novo Local</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
