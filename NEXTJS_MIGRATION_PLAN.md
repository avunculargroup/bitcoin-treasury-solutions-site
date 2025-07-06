# Next.js Migration Plan - Bitcoin Treasury Solutions

## Current Site Analysis

### Technology Stack
- **Build System**: Vite with development server
- **Styling**: Tailwind CSS with custom configuration
- **JavaScript**: Vanilla JS for interactivity
- **Structure**: Multi-page static HTML site
- **Assets**: Organized in `/assets/` directory

### Key Features Identified
1. **Responsive Navigation**: Mobile-friendly navbar with hamburger menu
2. **Smooth Scrolling**: Page scrolling and scrollspy functionality
3. **Interactive Elements**: Tabs, portfolio filters, scroll-to-top
4. **SEO Optimization**: Meta tags, structured data, accessibility
5. **Modern UI**: Tailwind-based design with animations
6. **Multi-page Structure**: Index, July-19, Privacy Policy pages

### Current File Structure
```
├── index.html (3,072 lines - main landing page)
├── july-19.html (548 lines - additional page)
├── privacy-policy.html (555 lines - privacy policy)
├── assets/
│   ├── css/
│   ├── js/main.js (237 lines - vanilla JS functionality)
│   ├── images/
│   ├── img/
│   ├── font/
│   └── favicon/
├── src/
│   └── css/tailwind.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Migration Benefits

### Why Convert to Next.js?

1. **Performance Improvements**
   - Server-Side Rendering (SSR) for better initial load times
   - Static Site Generation (SSG) for optimal performance
   - Automatic code splitting and optimization
   - Built-in image optimization with `next/image`

2. **Developer Experience**
   - Component-based architecture for better maintainability
   - Hot reload development environment
   - TypeScript support (optional but recommended)
   - Built-in routing system

3. **SEO Benefits**
   - Better search engine crawling with SSR
   - Automatic sitemap generation
   - Enhanced meta tag management
   - Improved Core Web Vitals

4. **Scalability**
   - Easy to add new pages and features
   - Component reusability
   - Built-in API routes for future backend needs
   - Deployment optimization

## Migration Strategy

### Phase 1: Project Setup and Configuration

#### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest bitcoin-treasury-nextjs --typescript --tailwind --eslint --app
cd bitcoin-treasury-nextjs
```

#### 1.2 Install Additional Dependencies
```bash
npm install @next/font
npm install -D @types/node @types/react @types/react-dom
```

#### 1.3 Configure Tailwind CSS
- Transfer existing `tailwind.config.js` settings
- Preserve custom colors, fonts, and theme extensions
- Update content paths for Next.js structure

### Phase 2: Component Architecture

#### 2.1 Layout Components
```
components/
├── Layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── MobileMenu.tsx
├── UI/
│   ├── Button.tsx
│   ├── Section.tsx
│   ├── Container.tsx
│   └── ScrollToTop.tsx
└── Features/
    ├── Hero.tsx
    ├── Services.tsx
    ├── About.tsx
    └── Contact.tsx
```

#### 2.2 Page Structure
```
app/
├── page.tsx (Home/Index page)
├── july-19/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── layout.tsx (Root layout)
└── globals.css
```

### Phase 3: Content Migration

#### 3.1 Break Down HTML into Components
- **Header Component**: Extract navigation and mobile menu
- **Hero Section**: Convert to reusable hero component
- **Services Section**: Create services grid component
- **About Section**: Extract about content
- **Contact Section**: Convert contact form and info
- **Footer Component**: Extract footer with dynamic year

#### 3.2 Asset Migration
- Move images to `public/` directory
- Optimize images using `next/image`
- Update all asset references
- Convert favicon structure

### Phase 4: JavaScript Functionality

#### 4.1 Convert Vanilla JS to React Hooks
- **Navigation**: Use `useState` for mobile menu toggle
- **Scrollspy**: Convert to custom hook with `useEffect`
- **Smooth Scrolling**: Use Next.js `useRouter` and scroll behavior
- **Scroll to Top**: Convert to React component with `useEffect`

#### 4.2 Interactive Features
- **Tabs**: Convert to React state management
- **Portfolio Filter**: Use React state for filtering
- **Form Handling**: Implement with React Hook Form (if needed)

### Phase 5: SEO and Metadata

#### 5.1 Metadata Configuration
```typescript
// app/layout.tsx
export const metadata = {
  title: 'Bitcoin Treasury Solutions | Melbourne\'s Bitcoin Adoption Experts',
  description: 'Helping Melbourne Businesses Harness the Power of Bitcoin - Professional Bitcoin Treasury Services',
  keywords: 'bitcoin, treasury, melbourne, business, consulting',
  // ... other meta tags
}
```

#### 5.2 Dynamic Metadata
- Implement page-specific metadata
- Add OpenGraph and Twitter cards
- Include structured data for SEO

## Implementation Steps

### Step 1: Create Next.js Project Structure

```bash
# Create new Next.js project
npx create-next-app@latest bitcoin-treasury-nextjs --typescript --tailwind --eslint --app

# Navigate to project
cd bitcoin-treasury-nextjs

# Install additional dependencies
npm install lucide-react # for icons
npm install framer-motion # for animations (optional)
```

### Step 2: Configure Tailwind CSS

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Zen Antique Soft", "serif"],
      },
      colors: {
        black: "#040B18",
        primary: "#123878",
        "primary-dark": "#1A2332",
        // ... transfer all existing colors
      },
    },
  },
  plugins: [],
}
```

### Step 3: Create Layout Components

```typescript
// components/Layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="ic-navbar fixed left-0 top-0 z-40 flex w-full items-center bg-primary/90 backdrop-blur-sm">
      {/* Navigation implementation */}
    </header>
  )
}
```

### Step 4: Convert Pages

```typescript
// app/page.tsx
import Hero from '@/components/Features/Hero'
import Services from '@/components/Features/Services'
import About from '@/components/Features/About'
import Contact from '@/components/Features/Contact'

export default function Home() {
  return (
    <main className="main relative">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
```

### Step 5: Implement Custom Hooks

```typescript
// hooks/useScrollspy.ts
import { useEffect, useState } from 'react'

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>('')
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])
  
  return activeId
}
```

## Migration Checklist

### Pre-Migration
- [ ] Backup current site
- [ ] Document all existing functionality
- [ ] Create asset inventory
- [ ] Test current site thoroughly

### During Migration
- [ ] Set up Next.js project with TypeScript and Tailwind
- [ ] Configure Tailwind with existing theme
- [ ] Create component architecture
- [ ] Migrate assets to public folder
- [ ] Convert HTML to React components
- [ ] Implement JavaScript functionality as React hooks
- [ ] Set up proper routing
- [ ] Configure SEO metadata
- [ ] Test all interactive features
- [ ] Optimize images with next/image
- [ ] Implement responsive design
- [ ] Add loading states and error handling

### Post-Migration
- [ ] Performance testing and optimization
- [ ] SEO audit and improvements
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Deploy to production
- [ ] Set up monitoring and analytics

## Performance Optimizations

### 1. Image Optimization
```typescript
// Replace <img> tags with Next.js Image component
import Image from 'next/image'

<Image
  src="/assets/images/btslogo-icon-only.jpg"
  alt="Bitcoin Treasury Solutions"
  width={48}
  height={48}
  priority // for above-the-fold images
  className="w-full h-auto rounded-lg"
/>
```

### 2. Font Optimization
```typescript
// app/layout.tsx
import { Inter, Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
```

### 3. Code Splitting
- Use dynamic imports for non-critical components
- Implement lazy loading for below-the-fold content
- Optimize bundle size with proper imports

## Deployment Strategy

### 1. Static Site Generation (SSG)
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 2. Deployment Options
- **Vercel**: Seamless deployment with automatic optimizations
- **Netlify**: Good for static sites with form handling
- **GitHub Pages**: Free hosting for static exports
- **AWS S3 + CloudFront**: Scalable and cost-effective

## Expected Timeline

- **Phase 1 (Setup)**: 1-2 days
- **Phase 2 (Components)**: 3-5 days
- **Phase 3 (Content)**: 2-3 days
- **Phase 4 (JavaScript)**: 2-3 days
- **Phase 5 (SEO)**: 1-2 days
- **Testing & Optimization**: 2-3 days

**Total Estimated Time**: 2-3 weeks for complete migration

## Conclusion

Converting your static site to Next.js will provide significant benefits in terms of performance, maintainability, and scalability. The component-based architecture will make it easier to manage and extend the site in the future, while Next.js's built-in optimizations will improve user experience and SEO performance.

The migration strategy outlined above preserves all existing functionality while adding the benefits of modern React development practices. The gradual approach ensures that each phase can be tested and validated before moving to the next.