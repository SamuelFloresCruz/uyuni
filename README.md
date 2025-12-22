# Salar de Uyuni - Sitio Web Turístico

Sitio web educativo sobre el Salar de Uyuni, el desierto de sal más grande del mundo, desarrollado con Next.js 15, React 19, Tailwind CSS 3 y Supabase.

## 🚀 Características

- **Next.js 15** con App Router
- **React 19** - Última versión
- **Tailwind CSS 3** - Diseño moderno y responsivo
- **Supabase** - Base de datos en la nube
- **API de Clima** - Información meteorológica en tiempo real
- **Google Maps** - Mapas interactivos de ubicaciones
- **Diseño Responsivo** - Optimizado para móviles, tablets y desktop
- **Animaciones Suaves** - Transiciones y efectos visuales
- **SEO Optimizado** - Metadata y estructura semántica

## 📋 Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn
- Cuenta en Supabase (para base de datos)
- API Key de OpenWeatherMap (para clima)
- API Key de Google Maps (opcional, para mapas)

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/salar-turismo.git
cd salar-turismo
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui

# API Clima (OpenWeatherMap)
NEXT_PUBLIC_WEATHER_API_KEY=tu_api_key_clima

# Google Maps (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=tu_google_maps_key
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles
```bash
npm run dev      # Modo desarrollo
npm run build    # Compilar para producción
npm run start    # Ejecutar versión de producción
npm run lint     # Ejecutar linter
```

## 🗄️ Configuración de Supabase

### 1. Crear cuenta en Supabase

- Ve a [supabase.com](https://supabase.com)
- Crea una cuenta gratuita
- Crea un nuevo proyecto

### 2. Crear tablas en Supabase

Ejecuta los siguientes SQL en el editor de Supabase:
```sql
-- Tabla de lugares turísticos
CREATE TABLE lugares (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  description_long TEXT,
  image TEXT,
  gallery TEXT[],
  destacado BOOLEAN DEFAULT false,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  consejos TEXT[],
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de souvenirs
CREATE TABLE souvenirs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  icon TEXT,
  categoria TEXT,
  precio_referencia INTEGER,
  caracteristicas TEXT[],
  disponible BOOLEAN DEFAULT true,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de contactos
CREATE TABLE contactos (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  asunto TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  leido BOOLEAN DEFAULT false
);

-- Índices para mejor rendimiento
CREATE INDEX idx_lugares_slug ON lugares(slug);
CREATE INDEX idx_lugares_destacado ON lugares(destacado);
CREATE INDEX idx_souvenirs_categoria ON souvenirs(categoria);
CREATE INDEX idx_contactos_fecha ON contactos(fecha);
```



## 🌤️ Configuración de API de Clima

1. Regístrate en [OpenWeatherMap](https://openweathermap.org/api)
2. Obtén tu API Key gratuita
3. Agrégala a `.env.local`

## 🗺️ Configuración de Google Maps (Opcional)

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un proyecto nuevo
3. Habilita "Maps JavaScript API" y "Maps Embed API"
4. Crea credenciales (API Key)
5. Agrégala a `.env.local`

**Nota:** Si no configuras Google Maps, el sitio usará OpenStreetMap como alternativa.

## 📁 Estructura del Proyecto
```
uyuni/
├── public/                  # Archivos estáticos
│   └── images/             # Imágenes del sitio
│       ├── hero/           # Imágenes del hero
│       ├── icons/          # Iconos
│       ├── lugares/        # Imágenes de cada lugar
│       │   ├── efecto-espejo/
│       │   ├── hotel-sal/
│       │   ├── isla-incahuasi/
│       │   ├── monumento-dakar/
│       │   ├── museo-sal/
│       │   ├── ojos-agua/
│       │   ├── ojos-del-salar/
│       │   └── plaza-banderas/
│       └── souvenirs/      # Imágenes de souvenirs
├── src/
│   ├── app/                # App Router de Next.js
│   │   ├── lugares/        # Páginas de lugares
│   │   │   ├── page.js     # Listado de lugares
│   │   │   └── [slug]/     # Detalle dinámico
│   │   │       └── page.js
│   │   ├── recuerdos/      # Página de souvenirs
│   │   │   └── page.js
│   │   ├── experiencia/    # Página de consejos
│   │   │   └── page.js
│   │   ├── contacto/       # Página de contacto
│   │   │   └── page.js
│   │   ├── api/            # API Routes
│   │   │   ├── clima/      # API del clima
│   │   │   │   └── route.js
│   │   │   └── contacto/   # API de contacto
│   │   │       └── route.js
│   │   ├── layout.js       # Layout principal con Header/Footer
│   │   ├── page.js         # Página de inicio
│   │   └── globals.css     # Estilos globales con Tailwind
│   ├── components/         # Componentes React
│   │   ├── layout/         # Componentes de layout
│   │   │   ├── Header.jsx  # Navegación principal
│   │   │   └── Footer.jsx  # Pie de página
│   │   ├── home/           # Componentes del home
│   │   │   ├── Hero.jsx    # Banner principal
│   │   │   ├── PlaceCard.jsx   # Tarjeta de lugar
│   │   │   └── WeatherWidget.jsx # Widget del clima
│   │   ├── lugares/        # Componentes de lugares
│   │   │   ├── PlaceDetail.jsx  # Detalle del lugar
│   │   │   ├── PlaceGrid.jsx    # Grid de lugares
│   │   │   ├── ImageGallery.jsx # Galería de imágenes
│   │   │   ├── MapEmbed.jsx     # Mapa embebido
│   │   │   └── SearchBar.jsx    # Búsqueda
│   │   ├── recuerdos/      # Componentes de souvenirs
│   │   │   └── SouvenirCard.jsx # Tarjeta de souvenir
│   │   ├── experiencia/    # Componentes de experiencia
│   │   │   ├── ActivityCard.jsx     # Tarjeta de actividad
│   │   │   ├── SeasonInfo.jsx       # Info de temporadas
│   │   │   ├── TipsAccordion.jsx    # Tips acordeón
│   │   │   └── TravelChecklist.jsx  # Checklist de viaje
│   │   ├── contacto/       # Componentes de contacto
│   │   │   ├── ContactForm.jsx  # Formulario
│   │   │   └── AuthorInfo.jsx   # Info del autor
│   │   └── ui/             # Componentes reutilizables
│   │       ├── Accordion.jsx    # Acordeón
│   │       ├── Button.jsx       # Botones
│   │       └── Card.jsx         # Tarjetas
│   ├── lib/                # Librerías y configuración
│   │   ├── supabase.js     # Cliente de Supabase
│   │   └── weatherApi.js   # API de clima
│   ├── data/               # Datos estáticos
│   │   ├── lugares.js      # Datos de lugares turísticos
│   │   └── souvenirs.js    # Datos de souvenirs
│   └── utils/              # Utilidades
│       ├── constants.js    # Constantes
│       └── helpers.js      # Funciones helper
├── .env.local              # Variables de entorno (no incluir en git)
├── biome.json              # Configuración de Biome
├── jsconfig.js             # Configuración de JavaScript
├── next.config.js          # Configuración de Next.js
├── next-env.d.ts           # Definiciones de TypeScript
├── tsconfig.json           # Configuración de TypeScript
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── postcss.config.mjs      # Configuración alternativa de PostCSS
├── package.json            # Dependencias
└── README.md               # Este archivo
```

## 🎨 Personalización

### Cambiar colores

Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1E3A8A',  // Tu color principal
        light: '#3B82F6',
        dark: '#1E40AF',
      },
    },
  },
}
```

### Cambiar información del autor

Edita `src/components/contacto/AuthorInfo.jsx`:
```javascript
const authorData = {
  nombre: 'Tu Nombre',
  universidad: 'Tu Universidad',
  // ... más campos
}
```

## �️ Mapa de Navegación

### Estructura de Rutas:

```
/ (Inicio)
├── Hero con imagen principal
├── Widget de clima en tiempo real
└── Grid de lugares destacados

/lugares (Listado de Lugares)
├── Barra de búsqueda
├── Filtros por categoría
└── Grid completo de lugares turísticos

/lugares/[slug] (Rutas Dinámicas)
├── /lugares/isla-incahuasi
├── /lugares/hotel-sal
├── /lugares/ojos-del-salar
├── /lugares/efecto-espejo
├── /lugares/museo-sal
└── /lugares/plaza-banderas
    ├── Galería de imágenes
    ├── Descripción completa
    ├── Mapa de ubicación
    └── Consejos de visita

/recuerdos (Souvenirs)
├── Grid de productos
└── Información de souvenirs típicos

/experiencia (Guía de Viaje)
├── Actividades disponibles
├── Información de temporadas
├── Tips y recomendaciones (acordeón)
└── Checklist de viaje

/co✨ Características Implementadas

- ✅ Navegación completa con 5 secciones principales
- ✅ Sistema de rutas dinámicas para lugares turísticos (8 lugares)
- ✅ Widget de clima en tiempo real con OpenWeatherMap
- ✅ Galerías de imágenes con visualización modal
- ✅ Mapas embebidos con Google Maps/OpenStreetMap
- ✅ Formulario de contacto funcional con API route
- ✅ Diseño 100% responsivo (móvil, tablet, desktop)
- ✅ Animaciones y transiciones suaves
- ✅ Sistema de búsqueda y filtrado de lugares
- ✅ Acordeones interactivos para tips
- ✅ Checklist de viaje interactivo
- ✅ Tarjetas con efecto hover y zoom
- ✅ Header sticky con menú hamburguesa en móvil
- ✅ Footer informativo con enlaces

## 🎯 Lugares Turísticos Incluidos

1. **Isla Incahuasi** - Isla de cactus gigantes
2. **Hotel de Sal** - Hospedaje construido de sal
3. **Ojos del Salar** - Pozos de agua salada
4. **Efecto Espejo** - Fenómeno natural impresionante
5. **Monumento al Dakar** - Homenaje al rally
6. **Museo de Sal** - Exhibiciones culturales
7. **Ojos de Agua Salada** - Formaciones naturales
8. **Plaza de las Banderas** - Monumento internacional


### Tipografía Principal:
- **Fuente:** Inter (Google Fonts)
- **Subconjunto:** Latin
- **Aplicación:** Todo el sitio
- **Características:** Moderna, limpia y altamente legible

```javascript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### Paleta de Colores:
```javascript
colors: {
  primary: {
    DEFAULT: '#1E3A8A',  // Azul principal
    light: '#3B82F6',    // Azul claro
    dark: '#1E40AF',     // Azul oscuro
  },
  secondary: {
    DEFAULT: '#60A5FA',  // Azul secundario
    light: '#93C5FD',    // Azul secundario claro
    dark: '#2563EB',     // Azul secundario oscuro
  },
}
```

### Componentes de Estilo Global:
- `.btn-primary` - Botón principal con hover
- `.btn-secondary` - Botón secundario
- `.card-hover` - Tarjetas con efecto hover y zoom
- `.container-custom` - Contenedor responsivo
- `.header-dark` - Header con fondo negro
- `.footer-dark` - Footer con fondo negro
- `.input-primary` - Inputs con foco azul

### Animaciones:
- `fade-in` - Aparición suave (0.5s)
- `slide-up` - Deslizamiento hacia arriba (0.5s)
- `zoom` - Efecto de zoom (0.3s)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno
5. ¡Despliega!

### Otras opciones

- **Netlify**
- **Railway**
- **Render**

## 🐛 Solución de Problemas

### Error: "Supabase is not defined"

Asegúrate de que las variables de entorno estén correctamente configuradas en `.env.local`.

### El clima no se muestra

Verifica que tu API Key de OpenWeatherMap sea válida y esté correctamente configurada.

### Las imágenes no cargan

Por defecto, el sitio usa imágenes de placeholder. Debes agregar tus propias imágenes en `public/images/` siguiendo la estructura de carpetas.

## 📝 Tareas Pendientes

- [ ] Agregar autenticación de usuarios
- [ ] Sistema de reservas de tours
- [ ] Blog de noticias
- [ ] Galería de fotos de visitantes
- [ ] Integración con redes sociales
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)

## 👨‍💻 Autor

**Tu Nombre**
- Universidad: [Tu Universidad]
- Materia: [Tu Materia]
- Email: tu.email@ejemplo.com

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.

## 🙏 Agradecimientos

- Next.js Team
- Tailwind CSS
- Supabase
- OpenWeatherMap
- Comunidad de desarrolladores

---

Desarrollado con ❤️ para la materia de Desarrollo Web# uyuni
