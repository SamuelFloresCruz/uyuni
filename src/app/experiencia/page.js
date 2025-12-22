import ActivityCard from '@/components/experiencia/ActivityCard'
import SeasonInfo from '@/components/experiencia/SeasonInfo'
import TravelChecklist from '@/components/experiencia/TravelChecklist'
import TipsAccordion from '@/components/experiencia/TipsAccordion'
import WeatherWidget from '@/components/home/WeatherWidget'

export const metadata = {
  title: 'Experiencia y Consejos - Salar de Uyuni',
  description: 'Todo lo que necesitas saber para tu viaje al Salar de Uyuni',
}

const activities = [
  {
    id: 1,
    title: 'Tours Fotográficos',
    description: 'Experiencias diseñadas para capturar las mejores imágenes',
    icon: '📸',
    detalles: [
      'Tours al amanecer y atardecer',
      'Perspectivas creativas con objetos',
      'Guías especializados en fotografía',
      'Equipo de apoyo incluido',
    ],
  },
  {
    id: 2,
    title: 'Observación de Estrellas',
    description: 'Cielos despejados perfectos para astronomía',
    icon: '⭐',
    detalles: [
      'Uno de los mejores cielos del mundo',
      'Sin contaminación lumínica',
      'Tours nocturnos disponibles',
      'Telescopios profesionales',
    ],
  },
  {
    id: 3,
    title: 'Exploración de Islas',
    description: 'Visita islas con cactus milenarios y formaciones únicas',
    icon: '🌵',
    detalles: [
      'Isla Incahuasi y otras islas',
      'Cactus de más de 1,200 años',
      'Vistas panorámicas del Salar',
      'Senderos interpretativos',
    ],
  },
  {
    id: 4,
    title: 'Visitas Culturales',
    description: 'Conoce comunidades locales y su forma de vida',
    icon: '🏘️',
    detalles: [
      'Pueblos tradicionales',
      'Museo de momias de Coquesa',
      'Cementerio de trenes',
      'Mercados artesanales',
    ],
  },
]

const tipsGenerales = [
  'El mejor momento para visitar es entre mayo y octubre (temporada seca)',
  'Para el efecto espejo, visita entre diciembre y marzo',
  'La altitud es de 3,656 metros, tómate tiempo para aclimatarte',
  'Las temperaturas pueden variar de -20°C a 20°C en el mismo día',
  'Lleva efectivo, muchos lugares no aceptan tarjetas',
  'Contrata tours con empresas registradas y con seguro',
  'Respeta el medio ambiente, no dejes basura',
  'Las noches son extremadamente frías, incluso en verano',
]

export default function ExperienciaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">
            Experiencia y Consejos
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Todo lo que necesitas saber para disfrutar al máximo tu visita 
            al Salar de Uyuni
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Actividades y Experiencias
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubre las actividades más populares en el Salar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Épocas del año */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mejor Época para Visitar
          </h2>
          <SeasonInfo />
        </div>
      </section>

      {/* Checklist de viaje */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Checklist de Viaje
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            No olvides estos elementos esenciales para tu viaje
          </p>
          <TravelChecklist />
        </div>
      </section>

      {/* Tips desplegables */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Consejos Importantes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Recomendaciones clave para tu visita
          </p>
          <TipsAccordion tips={tipsGenerales} />
        </div>
      </section>

      {/* Widget de clima */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Clima Actual en Uyuni
          </h2>
          <WeatherWidget />
        </div>
      </section>
    </div>
  )
}