import { useState } from 'react'
import { createAmante } from '@/api/amantes'

export default function CreateProfileScreen({ onBack }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [interests, setInterests] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const interestList = interests
        .split(',')
        .map(i => i.trim())
        .filter(i => i.length > 0)

      if (!name || !age || interestList.length === 0) {
        setMessage({
          type: 'error',
          text: 'Por favor completa todos los campos'
        })
        setLoading(false)
        return
      }

      await createAmante({
        name: name,
        age: parseInt(age),
        interests: interestList
      })

      setMessage({
        type: 'success',
        text: '✓ Perfil creado exitosamente'
      })

      setName('')
      setAge('')
      setInterests('')

      setTimeout(() => onBack(), 2000)
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Error al crear el perfil'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-screen">
      <div className="screen-header">
        <button className="back-btn" onClick={onBack}>
          ← Volver
        </button>
        <h1 className="screen-title">Crear nuevo perfil</h1>
        <p className="screen-subtitle">
          Completa los campos para registrar tu perfil de amante ideal.
        </p>
      </div>

      <div className="panel">
        {message && (
          <div className={`toast toast-${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Nombre</label>
            <input
              type="text"
              className="input"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              maxLength={50}
            />
          </div>

          <div className="form-group">
            <label className="label">Edad</label>
            <input
              type="number"
              className="input"
              placeholder="Tu edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              disabled={loading}
              min={18}
              max={120}
            />
          </div>

          <div className="form-group">
            <label className="label">Intereses</label>
            <textarea
              className="textarea"
              placeholder="Escribe tus intereses separados por comas (ej: música, viajes, lectura)"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
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
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Creando...' : 'Crear perfil'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
