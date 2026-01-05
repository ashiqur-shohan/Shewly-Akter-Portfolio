# Shewly Akter - Portfolio Website (React + Tailwind CSS)

This is a modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The project has been converted from the original HTML/CSS design while maintaining the exact same look and feel.

## 🚀 Features

- ⚡ Fast and modern development with Vite
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔄 React Router for smooth navigation
- 💫 Animated components and transitions
- 📊 Interactive statistics counter
- 🎠 Logo slider with auto-scroll
- 📝 Contact form with validation
- 💼 Experience timeline
- 🎓 Education and skills showcase

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## 🛠️ Installation & Setup

1. Navigate to the Frontend folder:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
Frontend/
├── public/              # Static assets (images, logos)
│   ├── profile_image.JPG
│   ├── about_profile.jpg
│   ├── background_image.jpg
│   └── [organization logos]
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Highlights.tsx
│   │   ├── LogoSlider.tsx
│   │   ├── Testimonials.tsx
│   │   └── PageHeader.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & Tailwind imports
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies & scripts
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```js
colors: {
  primary: '#2c7873',
  secondary: '#05668d',
  accent: '#f0a202',
  'text-dark': '#1a1a1a',
  'text-light': '#666',
  'bg-light': '#f8f9fa',
}
```

### Animations

Custom animations are configured in `tailwind.config.js` under the `animation` and `keyframes` sections.

## 📄 Available Pages

- **Home** (`/`) - Hero section, statistics, expertise areas, organization logos, and testimonials
- **About** (`/about`) - Professional background, education, skills, and training
- **Experience** (`/experience`) - Timeline of professional experiences with expandable details
- **Contact** (`/contact`) - Contact information, references, and contact form

## 🔧 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📝 Notes

- All images are stored in the `public` folder and referenced with absolute paths (e.g., `/profile_image.JPG`)
- The design maintains the exact same appearance as the original HTML/CSS version
- All interactive features have been preserved including animations, sliders, and form handling
- TypeScript is used for type safety and better development experience

## 🤝 Contact

For any questions or feedback, please reach out:

- **Email**: shewlyakter@gmail.com
- **Phone**: +880-16-16750597

---

© 2025 Shewly Akter. All rights reserved.
