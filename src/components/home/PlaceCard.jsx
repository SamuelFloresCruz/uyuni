'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function PlaceCard({ place }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href={`/lugares/${place.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-soft card-hover">
        {/* Imagen */}
        <div className="relative h-64 overflow-hidden">
          {!imageError ? (
            <Image
              src={place.image}
              alt={place.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-4xl">📷</span>
            </div>
          )}
          
          {place.destacado && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            {place.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {place.description}
          </p>
          <div className="flex items-center text-primary font-semibold">
            <span>Ver más</span>
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}