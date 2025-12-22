import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    
    // Coordenadas de Uyuni, Bolivia
    const lat = -20.4597
    const lon = -66.8250
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key no configurada' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
    )

    if (!response.ok) {
      throw new Error('Error al obtener datos del clima')
    }

    const data = await response.json()

    // Formatear respuesta
    const weatherData = {
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed * 3.6), // Convertir m/s a km/h
      description: data.weather[0].description,
      weather: data.weather[0].main.toLowerCase(),
      icon: data.weather[0].icon,
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Error en API de clima:', error)
    return NextResponse.json(
      { error: 'Error al obtener el clima' },
      { status: 500 }
    )
  }
}