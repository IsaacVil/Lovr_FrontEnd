export default function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <div className="header">
        <p className="welcome-text">Bienvenida/o</p>
        <h1 className="title">Mi amante ideal</h1>
        <p className="subtitle">
          Elige qué quieres hacer. Puedes registrar un perfil o explorar quienes comparten un interés.
        </p>
      </div>

      <div className="cards-grid">
        <button
          className="card"
          onClick={() => onNavigate('create')}
        >
          <div className="card-icon">➕</div>
          <h2 className="card-title">Crear nuevo perfil</h2>
          <p className="card-desc">Añade nombre, edad e intereses y guárdalo en la base de datos.</p>
        </button>

        <button
          className="card"
          onClick={() => onNavigate('search')}
        >
          <div className="card-icon">🔍</div>
          <h2 className="card-title">Buscar por interés</h2>
          <p className="card-desc">Encuentra perfiles que coincidan con un interés concreto.</p>
        </button>
      </div>
    </div>
  )
}
