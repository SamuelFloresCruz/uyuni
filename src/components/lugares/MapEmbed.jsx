'use client'

export default function MapEmbed({ latitude, longitude, title }) {
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={osmUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          title={`Mapa de ${title}`}
        ></iframe>
      </div>
      
      <div className="text-center mt-4">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
        >
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Abrir en Google Maps
        </a>
      </div>
    </div>
  )
}