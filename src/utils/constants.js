// Constantes de la aplicación

export const SITE_NAME = 'Salar de Uyuni - Turismo'

export const CONTACT_EMAIL = 'contacto@salaruyuni.com'

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  twitter: '#',
}

export const UYUNI_COORDINATES = {
  latitude: -20.4597,
  longitude: -66.8250,
}

export const WEATHER_UPDATE_INTERVAL = 300000 // 5 minutos en milisegundos

export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export const TOUR_TYPES = {
  day: 'Tour de 1 día',
  multiday: 'Tour de 3-4 días',
  custom: 'Tour personalizado',
}

export const SEASONS = {
  dry: {
    name: 'Temporada Seca',
    months: 'Mayo - Octubre',
    features: ['Superficie sólida', 'Patrones hexagonales', 'Cielos despejados'],
  },
  wet: {
    name: 'Temporada de Lluvias',
    months: 'Noviembre - Abril',
    features: ['Efecto espejo', 'Reflejos perfectos', 'Paisaje surrealista'],
  },
}