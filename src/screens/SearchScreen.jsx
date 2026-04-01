import { useState } from 'react'
import { searchByInterest } from '@/api/amantes'

export default function SearchScreen({ onBack }) {
  const [interest, setInterest] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    setMessage(null)

    if (!interest.trim()) {
      setMessage({
        type: 'error',
        text: 'Por favor introduce un interés'
      })
      return
    }

    setLoading(true)
    setSearched(true)

    try {
      const data = await searchByInterest(interest.trim())
      setResults(data)
      if (data.length === 0) {
        setMessage({
          type: 'info',
          text: `No se encontraron perfiles con el interés "${interest}"`
        })
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Error al buscar perfiles'
      })
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-screen">
      <div className="screen-header">
        <button className="back-btn" onClick={onBack}>
          ← Volver
        </button>
        <h1 className="screen-title">Buscar por interés</h1>
        <p className="screen-subtitle">
          Escribe un interés para encontrar perfiles que coincidan.
        </p>
      </div>

      <div className="panel">
        {message && (
          <div className={`toast toast-${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label className="label">Interés a buscar</label>
            <input
              type="text"
              className="input search-input"
              placeholder="ej: música, viajes, cine..."
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onBack}
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              disabled={loading}
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </form>

        {searched && (
          <div className="results-section">
            <div className="results-header">
              <h2 className="results-title">Resultados</h2>
              <span className="results-count">{results.length}</span>
            </div>

            {results.length === 0 ? (
              <div className="results-empty">
                No hay perfiles disponibles
              </div>
            ) : (
              <ul className="results-list">
                {results.map((profile) => (
                  <li key={profile.id} className="result-item">
                    <div className="result-header">
                      <h3 className="result-name">{profile.name}</h3>
                      <span className="result-age">{profile.age} años</span>
                    </div>
                    <p className="result-interests">
                      <strong>Intereses:</strong> {profile.interests.join(', ')}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
