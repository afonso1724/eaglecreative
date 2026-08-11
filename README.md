# Eagle's Ascent

Build a modern, high-impact landing page for a creative agency called "Eagle Creative" using React, Tailwind CSS, Lucide Icons, and Framer Motion for animations.

### 🎨 1. BRANDING & PALETTE

Base the visual identity on the provided logo with a dark, sleek, and innovative design:

- **Primary Color:** Bright Orange (`#FA6400` / `orange-500`)

- **Secondary Color:** Gold / Amber (`#FFC107` / `amber-400`)

- **Background:** Deep Dark Mode (`#0D0D0E` / `zinc-950`) with subtle orange/amber ambient glow gradients

- **Text:** Crisp white (`zinc-50`) and soft gray (`zinc-400`)

- **Style:** Glassmorphism (`backdrop-blur-md`), smooth glowing hover borders, modern typography, and a futuristic agency feel.

---

### 🧩 2. STRUCTURE & COMPONENTS

1. **Navbar:**

   - Eagle Creative logo on the left.

   - Desktop navigation with smooth scrolling links: "Início", "Sobre Nós", "Equipa", "Contactos".

   - Mobile menu using a slide-out drawer or overlay sheet with smooth transitions.

   - Fixed header with a blurred background (`backdrop-blur-lg bg-zinc-950/80`) on scroll.

2. **Hero Section:**

   - A bold headline with an automated **typewriter effect** (or dynamic looping text effect using React) showcasing phrases like: "Inovação sem limites", "Design fora do comum", "Transformação digital".

   - Inspiring subtitle about digital agency innovation.

   - Call-to-action buttons: "Explorar Agência" (Primary Orange Button) and "Falar no WhatsApp" (Secondary Glassmorphic Button with WhatsApp icon).

3. **About Us Section ("Sobre Nós"):**

   - Displayed as modern interactive cards using Glassmorphism.

   - Four main cards: **Quem Somos**, **Nossa Criação**, **Visão**, and **Propósito**.

   - Hover animations on cards (subtle scale, glowing orange borders).

4. **Team Section ("Equipa"):**

   - A grid layout showcasing team members with avatar placeholders, name, role, and social links (LinkedIn, GitHub/Portfolio).

5. **Contacts Section ("Contactos"):**

   - A functional contact form structured to work with **Formspree** (inputs for name, email, and message).

   - Direct contact buttons/cards for **Email** and **WhatsApp** with dynamic click-to-chat links.

6. **Footer:**

   - Clean, modern layout with social icons, quick navigation links, and copyright text.

---

### ⚡ 3. ANIMATIONS & INTERACTIONS (Framer Motion)

- **Side-Reveal Scroll Animations:** Use Framer Motion to make elements slide in dynamically from the left (`x: -50`) and right (`x: 50`) as the user scrolls down the page.

- **Micro-interactions:** Smooth hover effects on buttons, interactive card scaling, and smooth scroll behavior across all sections.

---

### 💻 4. TECH STACK

- React (Functional Components with Hooks)

- Tailwind CSS (Utility-first styling)

- Lucide React (for clean, modern icons)

- Framer Motion (for scroll animations and smooth entrances)

- Responsive design (Mobile First)


Att: todo site deve estar em português

Este projeto foi construído com uma stack moderna React + Vite.

## Build
Use o fluxo padrão do Vite para desenvolver e implantar este projeto.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
