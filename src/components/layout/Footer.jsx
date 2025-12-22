import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Sobre el proyecto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Salar de Uyuni</h3>
            <p className="text-gray-400">
              Proyecto educativo sobre el Salar de Uyuni, el desierto de sal más grande del mundo.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lugares" className="text-gray-400 hover:text-secondary transition-colors">
                  Lugares
                </Link>
              </li>
              <li>
                <Link href="/experiencia" className="text-gray-400 hover:text-secondary transition-colors">
                  Experiencia y Consejos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Información</h3>
            <p className="text-gray-400 mb-2">
              Universidad: [Universidad Privada Domingo Savio]
            </p>
            <p className="text-gray-400 mb-2">
              Materia: [Tegnologia Web 1]
            </p>
            <p className="text-gray-400">
              Año: { 2025}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Salar de Uyuni Turismo. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desarrollado como proyecto académico
          </p>
        </div>
      </div>
    </footer>
  )
}