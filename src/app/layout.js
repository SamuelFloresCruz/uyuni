import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salar de Uyuni - Turismo Bolivia',
  description: 'Descubre los lugares más impresionantes del Salar de Uyuni. Planifica tu viaje al desierto de sal más grande del mundo.',
  keywords: 'Salar de Uyuni, turismo Bolivia, Uyuni, viajes, Salar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}