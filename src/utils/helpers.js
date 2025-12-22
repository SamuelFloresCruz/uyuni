// Funciones helper útiles

/**
 * Formatea una fecha a string legible
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('es-BO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Trunca texto a una longitud específica
 */
export function truncateText(text, length = 100) {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Valida un email
 */
export function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

/**
 * Convierte un slug a título
 */
export function slugToTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Genera un ID único simple
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Formatea precio en bolivianos
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('es-BO', {
    style: 'currency',
    currency: 'BOB',
    minimumFractionDigits: 0,
  }).format(price)
}

/**
 * Calcula distancia entre dos coordenadas (Haversine)
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radio de la Tierra en km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(degrees) {
  return (degrees * Math.PI) / 180
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Verifica si es dispositivo móvil
 */
export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}