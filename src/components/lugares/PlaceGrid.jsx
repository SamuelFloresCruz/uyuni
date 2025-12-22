'use client'

import { useState } from 'react'
import PlaceCard from '@/components/home/PlaceCard'

export default function PlaceGrid({ lugares }) {
  const [filteredLugares, setFilteredLugares] = useState(lugares)

  return (
    <div>
      {filteredLugares.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">
            No se encontraron lugares con ese criterio de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLugares.map((lugar) => (
            <PlaceCard key={lugar.id} place={lugar} />
          ))}
        </div>
      )}
    </div>
  )
}