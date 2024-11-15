import { useLocation } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./info.css";
import "leaflet/dist/leaflet.css";

export default function Info() {
  const location = useLocation();
  const locais = location.state.locais;

  return (
    <div className="container">
      <div className="titulo"> LOCALIZAÇÕES PARA DESCARTE </div>

      <div className="sub-container">
        <MapContainer
          center={[locais[0].latitude, locais[0].longitude]}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locais.map((local) => (
            <Marker
              position={[local.latitude, local.longitude]}
              key={local.latitude}
            >
              <Popup>{local.nome}</Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="tabela">
          <table className="custom-table">
            <thead>
              <tr>
                <th title="Aqui nesta coluna está o nome da localização em questão!">
                  {" "}
                  Nome{" "}
                </th>
                <th title="Aqui nesta coluna está a dintância entre você e o local de descarte!">
                  {" "}
                  Distância{" "}
                </th>
                <th title="Aqui nesta coluna está a avaliação do local de descarte!">
                  {" "}
                  Avaliação{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {locais.map((local) => (
                <tr key={local.latitude}>
                  <td> {local.nome} </td>
                  <td>
                    <i className="carro"></i> 5 km{" "}
                  </td>
                  <td> {local.avaliacao} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
