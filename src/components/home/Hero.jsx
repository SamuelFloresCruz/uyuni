'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/fondo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-dark"></div>
      </div>

      {/* Contenido */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
          Salar de Uyuni
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
          Descubre el desierto de sal más grande del mundo. Un espejo natural que refleja el cielo.
        </p>
        <Link href="/lugares">
          <button className="btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-transform">
            Explorar Lugares
          </button>
        </Link>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}