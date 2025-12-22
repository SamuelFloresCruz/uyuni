'use client'

import { useState } from 'react'

export default function TipsAccordion({ tips }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-soft overflow-hidden"
        >
          {/* Header del acordeón */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start flex-1">
              <span className="text-primary font-bold mr-3 text-xl">
                {index + 1}.
              </span>
              <span className="font-semibold text-gray-900 flex-1">
                {tip}
              </span>
            </div>
            <svg
              className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-3 ${
                openIndex === index ? 'rotate-180' : ''
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

          {/* Contenido expandible */}
          {openIndex === index && (
            <div className="px-5 pb-5 pt-2 border-t border-gray-100 animate-fade-in">
              <p className="text-gray-600 leading-relaxed">
                {getDetailedInfo(tip)}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Función helper para proporcionar información detallada
function getDetailedInfo(tip) {
  const details = {
    'El mejor momento para visitar es entre mayo y octubre (temporada seca)': 
      'Durante estos meses, la superficie del Salar está seca y sólida, permitiendo un mejor acceso a todas las áreas. El clima es más estable con días soleados y cielos despejados, ideales para fotografía.',
    
    'Para el efecto espejo, visita entre diciembre y marzo':
      'Durante la temporada de lluvias, el Salar se cubre con una delgada capa de agua que crea el famoso efecto espejo. Enero y febrero son los mejores meses para experimentar este fenómeno único.',
    
    'La altitud es de 3,656 metros, tómate tiempo para aclimatarte':
      'El mal de altura (soroche) es común. Los síntomas incluyen dolor de cabeza, náuseas y fatiga. Descansa el primer día en Uyuni, hidrátate bien, evita el alcohol y considera tomar medicación preventiva como Sorojchi Pills.',
    
    'Las temperaturas pueden variar de -20°C a 20°C en el mismo día':
      'El clima del altiplano es extremo. Las mañanas y noches son muy frías, mientras que al mediodía puede hacer calor. Vístete en capas que puedas quitar o poner según sea necesario.',
    
    'Lleva efectivo, muchos lugares no aceptan tarjetas':
      'Uyuni es un pueblo pequeño y la mayoría de los negocios solo aceptan efectivo en bolivianos. Hay cajeros automáticos pero pueden quedarse sin dinero en temporada alta.',
    
    'Contrata tours con empresas registradas y con seguro':
      'Asegúrate de que tu operador turístico esté registrado oficialmente y tenga seguro de responsabilidad civil. Verifica las condiciones de los vehículos y que incluyan oxígeno de emergencia.',
    
    'Respeta el medio ambiente, no dejes basura':
      'El Salar es un ecosistema frágil. Lleva toda tu basura de vuelta, no dañes las formaciones de sal, y respeta las áreas protegidas y la vida silvestre.',
    
    'Las noches son extremadamente frías, incluso en verano':
      'Aunque sea verano (diciembre-marzo), las temperaturas nocturnas pueden bajar a -10°C o menos. Si te hospedas en el Salar, lleva bolsa de dormir térmica y ropa de abrigo adecuada.',
  }

  return details[tip] || 'Información adicional sobre este consejo.'
}