'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar({ lugares }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = lugares.filter(lugar =>
        lugar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lugar.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchTerm, lugares])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/lugares?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  const handleSuggestionClick = (slug) => {
    router.push(`/lugares/${slug}`)
    setSearchTerm('')
    setShowSuggestions(false)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar lugares... (Ej: Isla, Hotel, Museo)"
          className="w-full px-6 py-4 pr-12 rounded-full border-2 border-primary focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-30 transition-all text-lg shadow-md"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
          aria-label="Buscar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      {/* Sugerencias */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
          {suggestions.map((lugar) => (
            <button
              key={lugar.id}
              onClick={() => handleSuggestionClick(lugar.slug)}
              className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                {lugar.title}
              </h3>
              <p className="text-sm text-gray-600">
                {lugar.description}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}