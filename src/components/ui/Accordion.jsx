'use client'

import { useState } from 'react'

export default function Accordion({ items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState(allowMultiple ? [] : null)

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndexes(prev => prev === index ? null : index)
    }
  }

  const isOpen = (index) => {
    return allowMultiple 
      ? openIndexes.includes(index)
      : openIndexes === index
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-soft overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 flex-1">
              {item.title}
            </span>
            <svg
              className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-3 ${
                isOpen(index) ? 'rotate-180' : ''
              }`}
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

          {isOpen(index) && (
            <div className="px-5 pb-5 pt-2 border-t border-gray-100 animate-fade-in">
              <div className="text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}