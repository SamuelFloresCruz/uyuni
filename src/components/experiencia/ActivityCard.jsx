'use client'

import { useState } from 'react'

export default function ActivityCard({ activity }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-soft hover:shadow-xl transition-all p-6">
      {/* Icono */}
      <div className="text-6xl mb-4 text-center">
        {activity.icon}
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-center mb-3">
        {activity.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-center mb-4">
        {activity.description}
      </p>

      {/* Botón para mostrar detalles */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
      >
        {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Detalles expandibles */}
      {showDetails && activity.detalles && (
        <ul className="mt-4 space-y-2 text-sm text-gray-600 animate-fade-in">
          {activity.detalles.map((detalle, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 font-bold">✓</span>
              {detalle}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}