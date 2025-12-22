'use client'

export default function SeasonInfo() {
  const seasons = [
    {
      id: 1,
      title: 'Temporada Seca',
      periodo: 'Mayo - Octubre',
      icon: '☀️',
      color: 'from-orange-400 to-red-500',
      ventajas: [
        'Superficie sólida de sal, fácil acceso',
        'Patrones hexagonales perfectos',
        'Ideal para caminar y explorar',
        'Cielos despejados para fotografía',
        'Clima más predecible',
      ],
      desventajas: [
        'No hay efecto espejo',
        'Temperaturas muy frías por la noche',
        'Mayor afluencia de turistas',
      ],
      recomendacion: 'Mejor para tours tradicionales y exploración',
    },
    {
      id: 2,
      title: 'Temporada de Lluvias',
      periodo: 'Noviembre - Abril',
      icon: '🌧️',
      color: 'from-blue-400 to-cyan-500',
      ventajas: [
        'Efecto espejo espectacular',
        'Fotografías únicas e impresionantes',
        'Reflejos perfectos del cielo',
        'Paisaje surrealista',
        'Menos turistas',
      ],
      desventajas: [
        'Acceso limitado a algunas áreas',
        'Tours más cortos',
        'Clima impredecible',
        'Puede haber cancelaciones',
      ],
      recomendacion: 'Ideal para fotógrafos y buscar el efecto espejo',
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {seasons.map((season) => (
        <div
          key={season.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          {/* Header con gradiente */}
          <div className={`bg-gradient-to-r ${season.color} p-6 text-white`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-5xl">{season.icon}</span>
              <span className="text-sm font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full">
                {season.periodo}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{season.title}</h3>
          </div>

          {/* Contenido */}
          <div className="p-6">
            {/* Ventajas */}
            <div className="mb-6">
              <h4 className="font-bold text-green-600 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ventajas
              </h4>
              <ul className="space-y-2">
                {season.ventajas.map((ventaja, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    {ventaja}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desventajas */}
            <div className="mb-6">
              <h4 className="font-bold text-red-600 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Desventajas
              </h4>
              <ul className="space-y-2">
                {season.desventajas.map((desventaja, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    {desventaja}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recomendación */}
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-sm font-semibold text-gray-800">
                <span className="text-primary">💡 Recomendación:</span> {season.recomendacion}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}