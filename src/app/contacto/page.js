import ContactForm from '@/components/contacto/ContactForm'
import AuthorInfo from '@/components/contacto/AuthorInfo'

export const metadata = {
  title: 'Contacto - Salar de Uyuni',
  description: 'Contáctanos para más información sobre el Salar de Uyuni',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            ¿Tienes preguntas sobre el Salar de Uyuni? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
            <p className="text-gray-600 mb-8">
              Complete el formulario y nos pondremos en contacto con usted lo antes posible.
            </p>
            <ContactForm />
          </div>

          {/* información adicional */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Información del Proyecto</h2>
            <AuthorInfo />

            {/* Información adicional */}
            <div className="mt-8 space-y-6">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">📍</span>
                  Ubicación
                </h3>
                <p className="text-gray-700">
                  Salar de Uyuni, Departamento de Potosí, Bolivia
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">⏰</span>
                  Horarios de Tours
                </h3>
                <p className="text-gray-700">
                  Tours disponibles de 6:00 AM a 7:00 PM<br />
                  Reservas: Todo el año
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  Consejos Rápidos
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Reserva con al menos 1 semana de anticipación
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Verifica el clima antes de tu visita
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Lleva documentos de identidad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}