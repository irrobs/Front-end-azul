import "./About.css";

export default function About() {
  return (
    <div className="container">
      <h2> ℹ️ SOBRE NÓS</h2>

      <div className="section">
        <strong>Back-End:</strong>
        <p id="backend_infor"></p>
      </div>
      <div className="section">
        <strong>Front-End:</strong>
        <p id="frontend_infor"></p>
      </div>
    </div>
  );
}
