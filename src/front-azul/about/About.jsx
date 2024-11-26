import "./style.css";

export default function About() {
  return (
    <div className="container">
      <div className="header">
        <span className="info-icon">ⓘ</span>
        <h1 className="about-title">Sobre Nós</h1>
      </div>

      <div className="section">
        <div className="theme back-end">
          <div className="logo logo-back">
            <img src="../../../public/assets/LogoBack.png" alt="LogoBack" />
            <h2>Back-End</h2>
          </div>

          <h3>INTEGRANTES</h3>
          <ul>
            <li>Pedro Bernardi Naime</li>
            <li>Pedro Martins de Andrade</li>
            <li>Felipe Rogerio Sant&apos;Ana Rodrigues</li>
            <li>João Pedro dos Anjos de Oliveira Hornos</li>
            <li>Gabriel Dário Gouveia</li>
          </ul>
        </div>

        <div className="theme front-end">
          <div className="logo logo-front">
            <img src="../../../public/assets/LogoFront.png" alt="LogoFront" />
            <h2>Front-End</h2>
          </div>

          <h3>INTEGRANTES</h3>
          <ul>
            <li>Matheus Henrique Escobar Borri</li>
            <li>Nicolas Carmo Kamikado</li>
            <li>João Victor Donadio</li>
            <li>Matheus Ramil Miranda</li>
            <li>Daniel Riani de Oliveira Leite</li>
            <li>Pedro Henrique Parelli</li>
            <li>Thiago Maicky Alves Martins</li>
            <li>Thiago Dantasde Farias</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
