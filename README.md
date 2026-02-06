# Rachit Portfolio - Premium Portfolio Website

A premium, executive-grade portfolio website for Rachit H Maniar, Technical Product Owner & Program Manager.

## Features

- ✨ **Executive-Modern Design** - Clean, professional, enterprise-grade aesthetics
- 🌓 **Dark Mode** - Persistent theme toggle with localStorage
- 📱 **Mobile-First Responsive** - Optimized for all devices
- ♿ **Accessible** - WCAG compliant with keyboard navigation and ARIA labels
- ⚡ **Performance Optimized** - Fast loading with minimal JavaScript
- 🎨 **Premium Animations** - Subtle micro-interactions and smooth transitions
- 📊 **Data-Driven** - Centralized content management

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)
- **Theme**: next-themes for dark mode
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rachit-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main page assembling all sections
│   └── globals.css          # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx           # Sticky navigation with dark mode
│   ├── Hero.tsx             # Hero section with animated headlines
│   ├── About.tsx            # About section with stats
│   ├── Experience.tsx       # Timeline-based experience
│   ├── Projects.tsx         # Flagship initiatives showcase
│   ├── Skills.tsx           # Enterprise-grouped skills
│   ├── Certifications.tsx   # Badge-style certifications
│   ├── Testimonials.tsx     # Carousel testimonials
│   ├── Contact.tsx          # Contact form with validation
│   ├── Footer.tsx           # Footer with social links
│   └── ThemeProvider.tsx    # Dark mode provider
├── lib/
│   └── data.ts              # Centralized content data
└── tailwind.config.ts       # Tailwind theme configuration
```

## Customization

### Update Content

Edit `lib/data.ts` to update:
- Personal information
- Experience history
- Projects and initiatives
- Skills and certifications
- Testimonials

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Navy: `#0B1020`
- Gold: `#D4AF37`

### Update SEO

Edit `app/layout.tsx` to update metadata, OpenGraph tags, and Twitter cards.

## Performance

- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- Lazy loading for off-screen content
- Smooth scroll behavior
- CSS animations over JavaScript

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states on interactive elements
- Proper heading hierarchy
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Rachit H Maniar. All rights reserved.
