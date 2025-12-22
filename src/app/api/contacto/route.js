import { NextResponse } from 'next/server'
import { enviarContacto } from '@/lib/supabase'

export async function POST(request) {
  try {
    const body = await request.json()

    // Validación básica
    if (!body.nombre || !body.email || !body.asunto || !body.mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      )
    }

    // Preparar datos
    const contactData = {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono || null,
      asunto: body.asunto,
      mensaje: body.mensaje,
      fecha: new Date().toISOString(),
    }

    // Intentar guardar en Supabase
    try {
      const result = await enviarContacto(contactData)
      
      if (result.success) {
        return NextResponse.json(
          { 
            success: true, 
            message: 'Mensaje enviado correctamente',
            data: result.data 
          },
          { status: 200 }
        )
      } else {
        // Si falla Supabase, solo log del mensaje (modo desarrollo)
        console.log('Mensaje recibido (sin guardar en BD):', contactData)
        return NextResponse.json(
          { 
            success: true, 
            message: 'Mensaje recibido correctamente',
            note: 'Base de datos no configurada'
          },
          { status: 200 }
        )
      }
    } catch (dbError) {
      // Error de base de datos, pero aceptamos el mensaje
      console.log('Mensaje recibido (error en BD):', contactData)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Mensaje recibido correctamente',
          note: 'Base de datos temporalmente no disponible'
        },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}