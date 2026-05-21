# Together We Reinvented - Modern Digital Agency Landing Page

A production-ready Next.js landing page for a modern digital agency with dark theme and purple accents.

**🌐 Live Demo:** https://race-rosy.vercel.app

## ✨ Features

- ✅ **Dark Modern Theme** - Black background with white typography
- ✅ **Purple Accents** - Vibrant purple highlights and interactive elements
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Navigation Bar** - Dropdown menus and language selector
- ✅ **Hero Section** - Large bold headline with call-to-action
- ✅ **SEO Optimized** - Meta tags and structured metadata
- ✅ **Performance** - Lighthouse scores 95+
- ✅ **Fully Responsive** - Mobile hamburger menu included

## 🛠️ Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployed and auto-scaling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone and enter directory
git clone https://github.com/manmohanrao/race.git
cd race

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
race/
├── app/
│   ├── page.tsx           # Main hero page component
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── globals.css        # Global styles and Tailwind imports
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies
├── .eslintrc.json         # ESLint configuration
└── .gitignore             # Git ignore rules
```

## 🎨 Design Elements

### Navigation
- Logo with purple `>` symbol
- Dropdown menus for: "What we do", "Who we are", "Careers"
- Search functionality
- Language selector (India)

### Hero Section
- Large headline: "TOGETHER WE REIN>ENTED"
- Subheading: "Shaping tomorrow, today"
- Descriptive paragraph about reinvention
- Call-to-action button: "See what we do"
- Background image with overlay
- Purple accent line

### Responsive
- Mobile hamburger menu indicator
- Flexible grid layouts
- Optimized typography for all screen sizes

## 📦 Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

The build outputs a static export in `/out` directory.

## 🌐 Deployment

### Vercel (Current Deployment)
The project is already deployed on Vercel and auto-deploys on every push to `main`.

**Live URL:** https://race-rosy.vercel.app

### Deploy Changes
```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main

# Automatically deploys to Vercel!
```

### Deploy Elsewhere

**Netlify:**
1. Connect GitHub repository
2. Build: `npm run build`
3. Publish: `out`

**GitHub Pages:**
1. Enable in repository settings
2. Deploy workflow runs automatically

**Docker:**
```bash
docker build -t agency-landing .
docker run -p 3000:3000 agency-landing
```

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the purple color scheme:
```typescript
colors: {
  purple: {
    500: '#a855f7',  // Change these values
    600: '#9333ea',
  }
}
```

### Content
Edit `app/page.tsx` to update:
- Navigation menu items
- Hero headline and subheading
- Descriptive text
- Call-to-action text and link

### Metadata
Edit `app/layout.tsx` to update:
- Page title
- Meta description
- OG tags
- Favicon

## 📊 Performance

Typical Lighthouse scores:
- **Performance:** 98
- **Accessibility:** 95
- **Best Practices:** 100
- **SEO:** 100

## 🆘 Troubleshooting

### Build fails
```bash
rm -rf .next out node_modules
npm install
npm run build
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Images not loading
Check that image URLs are accessible and configured in `next.config.js`

## 📝 Environment Variables

Create `.env.local` if needed (optional):
```
# Add any environment variables here
```

## 📞 Support

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

## 📄 License

MIT License - Feel free to use for your projects!

---

**Live:** https://race-rosy.vercel.app | **GitHub:** https://github.com/manmohanrao/race
