import "./style.css";

export default function home() {
  return (
    <div className="container">
      <div className="hemisphere north">
        <h1>BUSCADOR DE DESCARTE</h1>
        <div className="search-bar">
          <input type="text" placeholder="O que você quer reciclar?" />
          <button className="search-btn">
            <img
              src="https://emojitool.com/img/microsoft/windows-8.1/right-pointing-magnifying-glass-14711.png"
              alt="Search"
            />
          </button>
        </div>
      </div>
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
