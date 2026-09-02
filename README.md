# Portfolio

> Personal site for **Saumik Saha Kabbya**, built with Astro, React, and Tailwind CSS. Based on the [Astro-portfolio](https://github.com/Gothsec/Astro-portfolio) template by [Oscar Hernandez](https://oscarhernandez.vercel.app/).

![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

**Live:** [saumik-kabbya.com](https://saumik-kabbya.com) | [Template demo](https://oscarhernandez.vercel.app/) | [Astro Themes](https://astro.build/themes/details/dark-minimal/) | [ReactBits Showcase](https://www.reactbits.dev/showcase)

## **Features**

- 🚀 **Blazing fast performance** powered by Astro
- 🎨 **Dark and light themes** with smooth transitions
- 📡 **Build telemetry** synced from public GitHub activity
- 🔄 **Currently building** panel pulled from your latest public push
- 🧭 **Approach section** with work defaults and responsive typography
- 📄 **About page** with a full timeline
- 🎵 **Spotify integration** in the contact section
- ⚛️ **Interactive UI** with Framer Motion and React islands

## **Stack**

### **Frontend**

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)

### **Tools**

![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)

## **Configuration Guides**

### **GitHub username (telemetry and “Currently building”)** ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

1. Open `src/components/home.astro`
2. Update the `username` constant in the inline script (default: `Kabbya04`)
3. The telemetry and hero card will sync on page load from your public GitHub events

### **Show your favorite Spotify playlist (or album)** ![Spotify](https://img.shields.io/badge/Spotify-06cc1a?logo=spotify&logoColor=white)

1. Choose your Spotify playlist or album
2. Open the share options
3. Select **Embed playlist** or **Embed album** and copy the code
4. Replace the `<iframe>` in `src/components/contact.astro`

```html
<iframe
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator"
  style="border-radius:12px"
  width="100%"
  height="352"
  frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
```

### **Portfolio content**

- Projects, experience, and education: `src/data/portfolio.ts`
- Stack categories and marquee items: `src/data/stack.ts`

## **Customization**

To make this portfolio your own, edit the following:

- **Global settings:** metadata, fonts, and theme tokens in `src/layouts/Layout.astro`
- **Content:** text, links, and section copy in `src/components/` (e.g. `home.astro`, `projects.astro`, `approach.astro`, `contact.astro`)
- **Styling:** Tailwind config in `tailwind.config.mjs` plus component-scoped styles where needed

## **Project structure**

```text
public/
├── fonts/
└── svg/
src/
├── components/
|    ├── about.astro
|    ├── approach.astro
|    ├── contact.astro
|    ├── footer.astro
|    ├── home.astro
|    ├── logoWall.astro
|    ├── nav.astro
|    └── projects.astro
├── data/
|    ├── portfolio.ts
|    └── stack.ts
├── layouts/
|    └── Layout.astro
├── React/
|    └── LikeButton.tsx
└── pages/
     ├── about.astro
     └── index.astro
```

## **Local configuration**

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**

1. Clone the repo:

```bash
git clone https://github.com/Kabbya04/portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## **Deployment**

This project is built with Astro and can be deployed to Vercel, Netlify, or GitHub Pages. For the easiest setup, push your repository to GitHub and import it directly into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

> **Important Notice:**  
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit).  
> According to the license terms, any redistribution (including compiled or modified versions), you **must** retain the original copyright  
> notice and the full license text. Copyright © 2026 Oscar Hernandez. All rights reserved.
