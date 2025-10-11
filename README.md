# 🌐 Portfolio Personal – Cristina Álvarez
Portfolio web moderno desarrollado con Angular y Tailwind CSS, con animaciones fluidas, diseño responsive y traducción completa inglés/español.
🔗 Live Demo: https://cristinaalvarez.dev
💡 “Clean code, smooth design, and a touch of creativity.”

## 🧠 Tecnologías Principales
- ⚙️ Angular 17	Estructura del proyecto (Standalone Components)
- 🎨 Tailwind CSS	Diseño responsive y sistema de colores
- 💬 TypeScript	Tipado estático y lógica de componentes
- 🌐 Netlify	Despliegue automático
- ✉️ FormSubmit	Gestión del formulario de contacto

## ⚡ Características Destacadas
- 🌍 Sistema de traducción dinámico (Inglés / Español)
- 📱 Diseño 100% responsive (Mobile First)
- 🌀 Animaciones suaves y personalizadas (Flip text, transiciones)
- 🔗 Navegación fluida entre secciones
-📧 Formulario de contacto funcional y validado
- 🔍 Optimización SEO y rendimiento

## 🛠️ Instalación y Desarrollo
# Clonar repositorio
git clone https://github.com/TU-USUARIO/cristina-portfolio.git
cd cristina-portfolio

# Instalar dependencias
npm install

# Servidor de desarrollo
ng serve

# Build para producción
ng build --configuration=production

## 📁 Estructura del Proyecto
```
src/
├── app/
│   ├── components/         # Navbar, Footer, etc.
│   ├── sections/           # Home, About, Projects, Contact
│   ├── services/           # Servicios (traducción, etc.)
│   └── texts.ts            # Textos traducidos EN/ES
├── assets/                 # Imágenes y recursos
└── styles.css              # Estilos globales
```

## 🌍 Sistema de Traducción
Centralizado en texts.ts con todos los textos en inglés y español:
export const englishTexts = {
  heroTitle: "Hi there! I'm Cristina...",
  // ...
};

export const spanishTexts = {
  heroTitle: "¡Hola! Soy Cristina...",
  // ...
};

## 🎨 Personalización

### 🎨 Paleta de Colores (Tailwind Config)
colors: {
  primary: '#332e2e',   // Charcoal
  cream:   '#fef7ed',   // Cream
  mint:    '#c2ffe1',   // Mint
}

### 🖋️ Tipografías
Inter – Texto general
JetBrains Mono – Encabezados
Caveat – Citas o frases personales

## 📱 Secciones Principales
Sección	Descripción
🏠 Home	Presentación con animación flip text
👩‍💻 About	Historia personal y tecnologías
💼 Projects	Proyectos destacados con previews interactivos
✉️ Contact	Formulario funcional vía FormSubmit + links directos

## 🚀 Despliegue
# Build para producción
ng build --configuration=production

# Despliegue en Netlify
netlify deploy --prod --dir=dist/cristina-portfolio

## 📧 Formulario de Contacto
Integrado con FormSubmit para:
✅ Validación de campos
🛡️ Protección anti-spam
🔔 Notificación por email
🔄 Redirección personalizada

## 🔧 Scripts Disponibles
```
npm start       # Servidor de desarrollo
npm run build   # Compilación para producción
npm run test    # Tests unitarios
npm run lint    # Análisis de código
```
---

## 📌 Autor
Made with ☕ by Cristiana
💼 [LinkedIn](https://github.com/Cristina20245)
🐙 [GitHub](https://github.com/Cristina20245)
✍️ [Portfolio](https://cristinaalvarez.dev/)
📖 [Blog](https://cristina.hashnode.dev)

---