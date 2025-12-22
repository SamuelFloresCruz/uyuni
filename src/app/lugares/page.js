import PlaceGrid from '@/components/lugares/PlaceGrid'
import SearchBar from '@/components/lugares/SearchBar'
import { getLugares } from '@/lib/supabase'
import { lugaresData } from '@/data/lugares'

export const metadata = {
  title: 'Lugares - Salar de Uyuni',
  description: 'Explora todos los lugares turísticos dentro del Salar de Uyuni',
}

export default async function LugaresPage() {
  // Intentar obtener de Supabase, si falla usar datos locales
  let lugares = []
  
  try {
    lugares = await getLugares()
    // IMPORTANTE: Si Supabase está vacío o no configurado, usar TODOS los datos locales
    if (!lugares || lugares.length === 0) {
      lugares = lugaresData // Esto incluye TODOS los 7 lugares
    }
  } catch (error) {
    console.error('Error al cargar lugares:', error)
    lugares = lugaresData // Usar todos los lugares locales
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Lugares del Salar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los {lugares.length} sitios más impresionantes del Salar de Uyuni. 
            Cada lugar tiene su propia magia y belleza única.
          </p>
        </div>

        {/* Buscador */}
        <div className="mb-12">
          <SearchBar lugares={lugares} />
        </div>

        {/* Grid de lugares */}
        <PlaceGrid lugares={lugares} />
      </div>
    </div>
  )
}