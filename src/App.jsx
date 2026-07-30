import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StationsTable from "./components/StationsTable";
import { obtenerEstaciones } from "./services/openaqApi";
import "./App.css";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [estaciones, setEstaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargarEstaciones() {
    try {
      setCargando(true);
      setError("");

      const resultados = await obtenerEstaciones();

      setEstaciones(resultados);
    } catch (errorPeticion) {
      setError(errorPeticion.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarEstaciones();
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-container">
        <Header />

        <main className="content">
           <SummaryCards estaciones={estaciones} />
          <section className="section-heading">
            <div>
              <h2>Estaciones de monitoreo</h2>
              <p>
                Consulta de estaciones registradas en OpenAQ.
              </p>
            </div>

            <button
              className="refresh-button"
              onClick={cargarEstaciones}
              disabled={cargando}
            >
              {cargando ? "Cargando..." : "Actualizar datos"}
            </button>
          </section>

          {cargando && (
            <div className="message loading">
              Consultando información de OpenAQ...
            </div>
          )}

          {error && (
            <div className="message error">
              <strong>Error:</strong> {error}
            </div>
          )}

          {!cargando && !error && estaciones.length === 0 && (
            <div className="message empty">
              No se encontraron estaciones.
            </div>
          )}

          {!cargando && !error && estaciones.length > 0 && (
            <StationsTable estaciones={estaciones} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;