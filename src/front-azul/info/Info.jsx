import "./info.css";

export default function info() {
  return (
    <div className="container">
      <div class="container-titulo">
        <div class="titulo"> Lixo Eletrônico </div>
      </div>

      <div class="container-mapa">
        <div class="mapa"> Mapa </div>
      </div>

      <div class="tabela">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Distância</th>
              <th>Avaliação</th>
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
  );
}