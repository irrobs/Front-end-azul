import "./info.css";

export default function info() {
  return (
    <div className="container">
      
        <div class="titulo"> LOCALIZAÇÕES PARA DESCARTE </div>

      <div class="sub-container">

        <div class="container-mapa">
          <div class="mapa"> Mapa </div>
        </div>

        <div class="tabela">
          <table class="custom-table">

            <thead>
              <tr>
                <th title="Aqui nesta coluca está o nome da localização em questão!"> Nome </th>
                <th title="Aqui nesta coluna está a dintância entre você e o local de descarte!"> Distância </th>
                <th title="Aqui nesta coluna está a avaliação do local de descarte!"> Avaliação </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> Ferro Velho </td>
                <td><i class="carro"></i> 5 km </td>
                <td> 4 </td>
              </tr>
              <tr>
                <td> Ferro Velho </td>
                <td><i class="carro"></i> 5 km </td>
                <td> 4 </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}