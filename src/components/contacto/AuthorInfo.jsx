export default function AuthorInfo() {
  const authorData = {
    nombre: 'Samuel Flores Cruz',
    universidad: 'Universidad Privada Domingo Savio',
    carrera: 'Ingeniería de Sistemas',
    materia: 'Tegnologia Web 1',
    gestion: '2025',
    docente: 'Faviola Soliz Tapia',
    email: 'web56@gmail.com',
  }

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-primary">
        Acerca del Autor
      </h3>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
              {authorData.nombre.charAt(0)}
            </div>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Estudiante</p>
            <p className="font-semibold text-gray-900">{authorData.nombre}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-3">
          <InfoItem 
            icon="🎓" 
            label="Universidad" 
            value={authorData.universidad} 
          />
          <InfoItem 
            icon="📚" 
            label="Carrera" 
            value={authorData.carrera} 
          />
          <InfoItem 
            icon="💻" 
            label="Materia" 
            value={authorData.materia} 
          />
          <InfoItem 
            icon="👨‍🏫" 
            label="Docente" 
            value={authorData.docente} 
          />
          <InfoItem 
            icon="📅" 
            label="Gestión" 
            value={authorData.gestion} 
          />
          <InfoItem 
            icon="📧" 
            label="Email" 
            value={authorData.email} 
            isEmail 
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Sobre el Proyecto</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Este sitio web fue desarrollado como proyecto final para la materia de 
            Desarrollo Web. El objetivo es mostrar los atractivos turísticos del 
            Salar de Uyuni utilizando tecnologías web modernas como Next.js, 
            React, Tailwind CSS y Supabase.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
          <h4 className="font-semibold text-primary mb-2 flex items-center">
            <span className="mr-2">🛠️</span>
            Tecnologías Utilizadas
          </h4>
          <div className="flex flex-wrap gap-2">
            <TechBadge name="Next.js 15" />
            <TechBadge name="React 19" />
            <TechBadge name="Tailwind CSS 3" />
            <TechBadge name="Supabase" />
            <TechBadge name="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value, isEmail = false }) {
  return (
    <div className="flex items-start">
      <span className="text-xl mr-3">{icon}</span>
      <div className="flex-1">
        <p className="text-sm text-gray-600">{label}</p>
        {isEmail ? (
          <a 
            href={`mailto:${value}`} 
            className="text-primary hover:text-primary-dark font-medium"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium text-gray-900">{value}</p>
        )}
      </div>
    </div>
  )
}

function TechBadge({ name }) {
  return (
    <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
      {name}
    </span>
  )
}