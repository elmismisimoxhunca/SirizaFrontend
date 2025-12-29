# Siria Agaria Frontend

Sitio web oficial de **Siria Agaria** — Proyecto literario y cultural independiente.

🌐 **Sitio en producción**: [sirizagaria.com](https://sirizagaria.com)

## ✨ Características

- **Astro** — Framework web estático de alto rendimiento
- **Tailwind CSS** — Estilos utilitarios modernos
- **SEO optimizado** — Meta tags, Open Graph, Twitter Cards, Schema.org
- **Accesibilidad** — ARIA labels, skip links, soporte para teclado, reduced motion
- **Imágenes AVIF** — Formato moderno con fallback a WebP
- **Analytics** — Plausible + Facebook Pixel
- **Blog integrado** — Conexión con Ghost CMS

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── assets/          # Imágenes (AVIF + WebP)
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── BlogPosts.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   └── OptimizedImage.astro
│   ├── layouts/
│   │   └── Layout.astro # Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro  # Página principal
│   │   ├── producto.astro
│   │   ├── checkout.astro
│   │   └── api/contact.ts
│   └── lib/
│       └── api-client.ts
├── scripts/
│   └── convert-to-avif.mjs
└── package.json
```

## 🧞 Comandos

| Comando | Acción |
| :------ | :----- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa del build local |
| `node scripts/convert-to-avif.mjs` | Convierte imágenes a AVIF |

## 🔧 Configuración

### Variables de entorno (opcional)

```env
PUBLIC_API_URL=https://api.sirizagaria.com
```

### Analytics

- **Plausible**: Configurado para `sirizagaria.com`
- **Facebook Pixel**: ID `10024588437658520`

## 📧 Contacto

- **Email**: editorial@sirizagaria.com
- **Web**: [sirizagaria.com](https://sirizagaria.com)

## 📄 Licencia

Todos los derechos reservados © Siria Agaria
