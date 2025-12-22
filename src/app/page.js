import Hero from '@/components/home/Hero'
import PlaceCard from '@/components/home/PlaceCard'
import WeatherWidget from '@/components/home/WeatherWidget'

export const metadata = {
  title: 'Inicio - Salar de Uyuni',
  description: 'Explora el Salar de Uyuni, el desierto de sal más grande del mundo',
}

const featuredPlaces = [
  {
    id: 1,
    slug: 'isla-incahuasi',
    title: 'Isla Incahuasi',
    description: 'Isla de cactus gigantes verdes en medio del Salar',
    image: '/images/lugares/isla-incahuasi/main.jpg',
    destacado: true,
  },
  {
    id: 2,
    slug: 'hotel-sal',
    title: 'Hotel de Sal',
    description: 'Hospedaje único construido completamente de sal',
    image: '/images/lugares/hotel-sal/main.jpg',
    destacado: true,
  },
  {
    id: 3,
    slug: 'efecto-espejo',
    title: 'Efecto Espejo',
    description: 'Experiencia visual única durante temporada de lluvias',
    image: '/images/lugares/efecto-espejo/main.jpg',
    destacado: true,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Principal */}
      <Hero />
      
      {/* Lugares Destacados */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Lugares Imperdibles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubre los sitios más emblemáticos del Salar de Uyuni
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Widget de Clima */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <WeatherWidget />
        </div>
      </section>
    </div>
  )
}