# HN DESIGNS Portfolio - Next.js

This is a Next.js conversion of the HN DESIGNS Personal Portfolio by Hammad Noor.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata and global scripts
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/         # React components
│   ├── Preloader.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   └── ... (other components)
├── public/
│   └── assets/         # Static assets (CSS, JS, images)
└── package.json
```

## Features

- ✅ Converted from HTML to Next.js
- ✅ All assets preserved in public folder
- ✅ Component-based architecture
- ✅ TypeScript support
- ✅ All original JavaScript functionality maintained

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All original CSS and JavaScript files are preserved in `/public/assets/`
- The project uses Next.js 14 with App Router
- Images are optimized using Next.js Image component
- All original animations and interactions are maintained

