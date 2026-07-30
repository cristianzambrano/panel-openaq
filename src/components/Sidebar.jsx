function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">AQ</span>
        <div>
          <h2>OpenAQ</h2>
          <p>Panel ambiental</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        <a className="menu-item active" href="#">
          Inicio
        </a>

        <a className="menu-item" href="#">
          Estaciones
        </a>

        <a className="menu-item" href="#">
          Indicadores
        </a>

        <a className="menu-item" href="#">
          Mapa
        </a>
      </nav>

      <div className="sidebar-footer">
        <p>Aplicaciones Telemáticas</p>
        <small>UTEQ</small>
      </div>
    </aside>
  );
}

export default Sidebar;