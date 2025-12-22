'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from './ImageGallery'
import MapEmbed from './MapEmbed'

export default function PlaceDetail({ lugar }) {
  const [imageError, setImageError] = useState(false)
  const [descripciones, setDescripciones] = useState(null)
  const [loading, setLoading] = useState(true)

  // Consumir JSON externo mediante fetch()
  useEffect(() => {
    fetch('/descripciones.json')
      .then(response => response.json())
      .then(data => {
        setDescripciones(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al cargar descripciones:', error)
        setLoading(false)
      })
  }, [])
  
  const descripcionExterna = descripciones?.[lugar.slug]
  const descripcionFinal = descripcionExterna?.descripcion || lugar.description_long || lugar.descriptionLong
  const datosInteresantes = descripcionExterna?.datos_interesantes

  return (
    <div className="min-h-screen bg-white">
      {/* Header con imagen destacada */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {!imageError ? (
          <Image
            src={lugar.image}
            alt={lugar.title}
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-6xl">📷</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        
        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4">
              {lugar.title}
            </h1>
            <p className="text-xl text-white text-shadow">
              {lugar.description}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-custom py-12">
        {/* Descripción completa - JSON tiene prioridad */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sobre este lugar</h2>
            
            {descripcionFinal ? (
              <>
                {/* Descripción principal */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-600 mb-6">
                  <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                    {descripcionFinal}
                  </p>
                </div>
                
                {/* Datos interesantes (solo del JSON) */}
                {datosInteresantes && datosInteresantes.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                      <span className="text-2xl mr-2">📊</span>
                      Datos Interesantes
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {datosInteresantes.map((dato, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">✓</span>
                          <span className="text-gray-700">{dato}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-600">
                <p className="text-gray-700">
                  ℹ️ No hay descripción disponible para este lugar.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Galería de fotos */}
        {lugar.gallery && lugar.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Galería de Fotos</h2>
            <ImageGallery images={lugar.gallery} title={lugar.title} />
          </section>
        )}

        {/* Mapa */}
        {lugar.latitude && lugar.longitude && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Ubicación</h2>
            <MapEmbed 
              latitude={lugar.latitude} 
              longitude={lugar.longitude}
              title={lugar.title}
            />
          </section>
        )}

        {/* Consejos prácticos */}
        {lugar.consejos && lugar.consejos.length > 0 && (
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Consejos Prácticos
              </h2>
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <ul className="space-y-4">
                  {lugar.consejos.map((consejo, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-2xl mr-4 flex-shrink-0">💡</span>
                      <p className="text-gray-800 text-lg leading-relaxed">
                        {consejo}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Botón volver */}
        <div className="text-center mt-12">
          <Link href="/lugares">
            <button className="btn-primary inline-flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver a Lugares
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}