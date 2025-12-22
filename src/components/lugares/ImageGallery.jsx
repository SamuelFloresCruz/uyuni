'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  // Función para generar color de gradiente único por índice
  const getGradientColor = (index) => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600',
      'from-green-400 to-green-600',
      'from-yellow-400 to-orange-600',
      'from-red-400 to-red-600',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <>
      {/* Grid de imágenes - Responsive para 6 imágenes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden rounded-lg cursor-pointer shadow-soft card-hover"
            onClick={() => openLightbox(index)}
          >
            {!imageErrors[index] ? (
              <Image
                src={image}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${getGradientColor(index)} flex flex-col items-center justify-center text-white`}>
                <span className="text-5xl mb-2">📷</span>
                <span className="text-sm font-semibold">Foto {index + 1}</span>
              </div>
            )}
            
            {/* Número de imagen */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-semibold">
              {index + 1}/{images.length}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Cerrar"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Imagen principal */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {!imageErrors[currentIndex] ? (
              <Image
                src={selectedImage}
                alt={`${title} - Imagen ampliada`}
                fill
                className="object-contain"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${getGradientColor(currentIndex)} flex items-center justify-center rounded-lg`}>
                <div className="text-center text-white">
                  <span className="text-8xl block mb-4">📷</span>
                  <p className="text-2xl font-bold">Imagen {currentIndex + 1}</p>
                  <p className="text-lg opacity-90">{title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Navegación */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
                aria-label="Imagen anterior"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
                aria-label="Imagen siguiente"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}