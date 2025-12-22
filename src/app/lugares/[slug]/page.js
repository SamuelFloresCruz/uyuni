import { notFound } from 'next/navigation'
import PlaceDetail from '@/components/lugares/PlaceDetail'
import { getLugarBySlug } from '@/lib/supabase'
import { lugaresData } from '@/data/lugares'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const lugar = lugaresData.find(l => l.slug === slug)
  
  if (!lugar) {
    return {
      title: 'Lugar no encontrado',
    }
  }

  return {
    title: `${lugar.title} - Salar de Uyuni`,
    description: lugar.descriptionLong,
  }
}

export default async function LugarDetailPage({ params }) {
  const { slug } = await params
  // Intentar obtener de Supabase, si falla usar datos locales
  let lugar = null
  
  try {
    lugar = await getLugarBySlug(slug)
    if (!lugar) {
      lugar = lugaresData.find(l => l.slug === slug)
    }
  } catch (error) {
    console.error('Error al cargar lugar:', error)
    lugar = lugaresData.find(l => l.slug === slug)
  }

  if (!lugar) {
    notFound()
  }

  return <PlaceDetail lugar={lugar} />
}

export async function generateStaticParams() {
  return lugaresData.map((lugar) => ({
    slug: lugar.slug,
  }))
}