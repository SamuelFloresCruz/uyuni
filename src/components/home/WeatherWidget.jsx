'use client'

import { useState, useEffect } from 'react'

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      const response = await fetch('/api/clima')
      if (!response.ok) throw new Error('Error al obtener el clima')
      const data = await response.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-16 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-red-500">⚠️ {error}</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Clima en Uyuni</h3>
          <p className="text-blue-100 mb-4">En tiempo real</p>
        </div>
        <div className="text-6xl">
          {getWeatherIcon(weather?.weather)}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-100 mb-1">Temperatura</p>
          <p className="text-3xl font-bold">{weather?.temp}°C</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-100 mb-1">Sensación</p>
          <p className="text-3xl font-bold">{weather?.feels_like}°C</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-100 mb-1">Humedad</p>
          <p className="text-3xl font-bold">{weather?.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-100 mb-1">Viento</p>
          <p className="text-3xl font-bold">{weather?.wind} km/h</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-blue-100 capitalize">{weather?.description}</p>
      </div>
    </div>
  )
}

function getWeatherIcon(weatherType) {
  const icons = {
    clear: '☀️',
    clouds: '☁️',
    rain: '🌧️',
    snow: '❄️',
    thunderstorm: '⛈️',
    drizzle: '🌦️',
    mist: '🌫️',
  }
  return icons[weatherType] || '🌤️'
}