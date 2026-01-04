# BrandBlog — Next.js Blog Template

A modern, frontend-only blog template built with Next.js, focused on polished UI/UX, accessibility, and a clean design language. This template uses Tailwind CSS and includes light/dark theme switching.

## Features ✅

- Mobile-first, responsive design
- Smooth dark / light theme toggle (persisted in localStorage)
- Homepage with blog list and cards
- Individual blog pages with readable typography
- Component-based structure for easy extension

## Local development 🔧

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

Open http://localhost:3000

## Notes 💡

- This project is frontend-only and uses static dummy data in `data/posts.ts`.
- The theme system is implemented via a small client-side provider that toggles the `dark` class on `document.documentElement`.
