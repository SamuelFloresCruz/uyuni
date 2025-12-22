'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar formulario
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Enviar a la API
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      // Éxito
      setSubmitSuccess(true)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      })

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error:', error)
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 md:p-8">
      {/* Mensaje de éxito */}
      {submitSuccess && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg animate-fade-in">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 font-semibold">
              ¡Mensaje enviado con éxito! Te responderemos pronto.
            </p>
          </div>
        </div>
      )}

      {/* Mensaje de error */}
      {submitError && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg animate-fade-in">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-800 font-semibold">
              {submitError}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`input-primary ${errors.nombre ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Juan Pérez"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-primary ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono (Opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="input-primary"
            placeholder="+591 12345678"
          />
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="asunto" className="block text-sm font-semibold text-gray-700 mb-2">
            Asunto *
          </label>
          <select
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={`input-primary ${errors.asunto ? 'border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Selecciona un asunto</option>
            <option value="informacion-general">Información General</option>
            <option value="sugerencias">Sugerencias</option>
            <option value="otros">Otros</option>
          </select>
          {errors.asunto && (
            <p className="mt-1 text-sm text-red-600">{errors.asunto}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={6}
            className={`input-primary resize-none ${errors.mensaje ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.mensaje && (
            <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Campos requeridos
        </p>
      </form>
    </div>
  )
}