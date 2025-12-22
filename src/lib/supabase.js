import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Crear cliente solo si las credenciales son válidas
let supabase = null

try {
  if (supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')) {
    console.log('⚠️ Supabase no configurado, usando datos locales')
  } else {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
} catch (error) {
  console.error('Error al crear cliente Supabase:', error)
}

// Funciones helper que funcionan con o sin Supabase
export async function getLugares() {
  if (!supabase) {
    // Retornar array vacío para usar datos locales
    return []
  }
  
  try {
    const { data, error } = await supabase
      .from('lugares')
      .select('*')
      .order('orden', { ascending: true })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error al obtener lugares:', error)
    return []
  }
}

export async function getLugarBySlug(slug) {
  if (!supabase) return null
  
  try {
    const { data, error } = await supabase
      .from('lugares')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error al obtener lugar:', error)
    return null
  }
}

export async function getSouvenirs() {
  if (!supabase) return []
  
  try {
    const { data, error } = await supabase
      .from('souvenirs')
      .select('*')
      .order('orden', { ascending: true })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error al obtener souvenirs:', error)
    return []
  }
}

export async function enviarContacto(formData) {
  if (!supabase) {
    console.log('📧 Mensaje recibido (sin BD):', formData)
    return { success: true, message: 'Mensaje recibido (modo demo)' }
  }
  
  try {
    const { data, error } = await supabase
      .from('contactos')
      .insert([formData])

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error al enviar contacto:', error)
    return { success: false, error: error.message }
  }
}

export { supabase }