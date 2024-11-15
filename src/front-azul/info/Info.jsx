import { useLocation } from "react-router-dom";
import "./info.css";

export default function Info() {
  const location = useLocation();
  console.log(location.state.locais);

  return (
    <div className="container">
      <div className="titulo"> LOCALIZAÇÕES PARA DESCARTE </div>

      <div className="sub-container">
        <div className="container-mapa">
          <div className="mapa"> Mapa </div>
        </div>

        <div className="tabela">
          <table className="custom-table">
            <thead>
              <tr>
                <th title="Aqui nesta coluca está o nome da localização em questão!">
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
              <tr>
                <td> Ferro Velho </td>
                <td>
                  <i className="carro"></i> 5 km{" "}
                </td>
                <td> 4 </td>
              </tr>
              <tr>
                <td> Ferro Velho </td>
                <td>
                  <i className="carro"></i> 5 km{" "}
                </td>
                <td> 4 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
