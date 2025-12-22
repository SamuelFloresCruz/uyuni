export async function getWeatherData() {
  try {
    const response = await fetch('/api/clima')
    if (!response.ok) {
      throw new Error('Error al obtener clima')
    }
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export function getWeatherIcon(condition) {
  const iconMap = {
    clear: '☀️',
    clouds: '☁️',
    rain: '🌧️',
    snow: '❄️',
    thunderstorm: '⛈️',
    drizzle: '🌦️',
    mist: '🌫️',
    fog: '🌫️',
  }

  return iconMap[condition?.toLowerCase()] || '🌤️'
}

export function getWeatherRecommendation(temp, condition) {
  if (temp < 5) {
    return 'Hace mucho frío. Lleva ropa de abrigo.'
  } else if (temp < 15) {
    return 'Temperatura fresca. Se recomienda chaqueta.'
  } else if (temp < 25) {
    return 'Temperatura agradable para visitar.'
  } else {
    return 'Día caluroso. No olvides protector solar.'
  }
}