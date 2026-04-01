const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function createAmante(data) {
  const response = await fetch(`${API_BASE_URL}/amantes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Error al crear amante')
  }

  return await response.json()
}

export async function searchByInterest(interest) {
  const response = await fetch(
    `${API_BASE_URL}/amantes?interes=${encodeURIComponent(interest)}`
  )

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Error al buscar amantes')
  }

  return await response.json()
}
