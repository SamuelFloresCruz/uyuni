'use client'

import { useState } from 'react'

export default function TravelChecklist() {
  const checklistItems = [
    {
      categoria: 'Ropa y Accesorios',
      icon: '👕',
      items: [
        'Ropa abrigada (chaqueta, gorro, guantes)',
        'Ropa ligera para el día',
        'Lentes de sol con protección UV',
        'Gorro o sombrero',
        'Protector labial',
        'Calzado cómodo e impermeable',
      ],
    },
    {
      categoria: 'Salud y Seguridad',
      icon: '🏥',
      items: [
        'Protector solar FPS 50+',
        'Medicamentos para el mal de altura',
        'Botiquín personal',
        'Hidratación abundante',
        'Seguro de viaje',
      ],
    },
    {
      categoria: 'Fotografía',
      icon: '📸',
      items: [
        'Cámara fotográfica',
        'Baterías extra (se descargan rápido con el frío)',
        'Tarjetas de memoria extra',
        'Trípode',
        'Paño para limpiar lentes',
      ],
    },
    {
      categoria: 'Documentos y Dinero',
      icon: '📋',
      items: [
        'Pasaporte o documento de identidad',
        'Efectivo (bolivianos)',
        'Tarjetas de crédito',
        'Reservas impresas',
        'Números de emergencia',
      ],
    },
  ]

  const [checkedItems, setCheckedItems] = useState({})

  const toggleItem = (categoria, index) => {
    const key = `${categoria}-${index}`
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {checklistItems.map((grupo, groupIndex) => (
        <div
          key={groupIndex}
          className="bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-shadow"
        >
          {/* Header */}
          <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
            <span className="text-4xl mr-3">{grupo.icon}</span>
            <h3 className="text-xl font-bold text-gray-900">
              {grupo.categoria}
            </h3>
          </div>

          {/* Lista de items */}
          <ul className="space-y-3">
            {grupo.items.map((item, index) => {
              const key = `${grupo.categoria}-${index}`
              const isChecked = checkedItems[key] || false

              return (
                <li key={index}>
                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(grupo.categoria, index)}
                      className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                    />
                    <span
                      className={`ml-3 text-gray-700 group-hover:text-gray-900 transition-colors ${
                        isChecked ? 'line-through text-gray-400' : ''
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}