# Portfolio
Personal site for **Saumik Saha Kabbya** with a custom UI overhaul, dynamic “Currently building” section, and a data‑driven progress ladder.

![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

Live site: update this link to your deployment.

The component `<LetterGlitch />` is adapted from [ReactBits.dev](https://www.reactbits.dev/).

## **Stack**
### **Frontend**
![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)

### **Tools**
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)

### **Dynamic GitHub Status**
The “Currently building” panel pulls your latest **public** GitHub push on page load and displays:
- Latest repo name (linking to that repo)
- Repo description (or latest commit message fallback)
- Relative update time

Update the username in:
`/Users/hunter/Desktop/Projects/MyWeb/portfolio/src/components/home.astro`

### **Spotify Embed**
The Spotify module now lives under the Contact section (`src/components/contact.astro`).
To swap it:
1. Pick a playlist in Spotify
2. Share → Embed → Copy
3. Replace the `<iframe>` inside `contact.astro`

## **Project structure**
```
public/
└── svg/
src/
├── components/
├── data/
├── layouts/
├── React/
└── pages/
```

## **Local configuration**
1. Clone the repo:  
```
git clone https://github.com/gothsec/portfolio
```
2. Install dependencies:
```  
npm install
```
3. Start the develpoment server:
```  
npm run dev
```

> **Important Notice:**  
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit).  
> According to the license terms, any redistribution (including compiled or modified versions), you **must** retain the original copyright 
> notice and the full license text. Copyright © 2025 Oscar Hernandez. All rights reserved.
