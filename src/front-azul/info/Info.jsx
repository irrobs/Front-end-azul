import { useLocation } from "react-router-dom";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "./info.css";
import "leaflet/dist/leaflet.css";

export default function Info() {
  const location = useLocation();
  const userPosition = location.state.position;

  const locais = location.state.locais;
  locais.forEach((local) => {
    local.distancia = calcularDistancia(
      userPosition.latitude,
      userPosition.longitude,
      local.latitude,
      local.longitude
    ).toFixed(2);
  });

  const locaisSorted = locais.sort((a, b) => a.distancia - b.distancia);
  console.log(locaisSorted);

  const customIcon = new L.Icon({
    iconUrl: "/leaflet/marker-icon.png", // Path relative to the public folder
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow
  });

  const customUserIcon = new L.Icon({
    iconUrl: "/leaflet/marker-icon-fotor.png", // Path relative to the public folder
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow
  });

  function calcularDistancia(userLat, userLon, localLat, localLon) {
    const R = 6371; // Raio da Terra em km
    const dLat = ((localLat - userLat) * Math.PI) / 180; // Diferença de latitude em radianos
    const dLon = ((localLon - userLon) * Math.PI) / 180; // Diferença de longitude em radianos
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLat * Math.PI) / 180) *
        Math.cos((localLat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; // Distância em km
    return distancia;
  }

  return (
    <div className="container">
      <div className="titulo"> LOCALIZAÇÕES PARA DESCARTE </div>

      <div className="sub-container">
        <MapContainer
          center={[locaisSorted[0].latitude, locaisSorted[0].longitude]}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[userPosition.latitude, userPosition.longitude]}
            icon={customUserIcon}
          >
            <Tooltip permanent>
              <span>Você está aqui!</span>
            </Tooltip>
          </Marker>
          {locaisSorted.map((local) => (
            <Marker
              position={[local.latitude, local.longitude]}
              icon={customIcon}
              key={local.latitude}
            >
              <Tooltip permanent>
                <span>{local.nome}</span>
              </Tooltip>
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
              </tr>
            </thead>

            <tbody>
              {locaisSorted.map((local) => (
                <tr key={local.latitude}>
                  <td> {local.nome} </td>
                  <td>
                    <i className="carro"></i> {local.distancia} km{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
