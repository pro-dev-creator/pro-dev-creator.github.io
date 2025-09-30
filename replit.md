# DevFlow - Modern Development Platform

## Project Overview
This is a Vite + React + TypeScript frontend application originally built with Lovable. It features a modern landing page with shadcn/ui components and Tailwind CSS styling.

## Technology Stack
- **Framework**: Vite + React 18
- **Language**: TypeScript
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## Project Structure
- `/src/pages/` - Page components (Index, Services, Pricing, About, Contact, Auth, NotFound)
- `/src/components/` - Reusable components including shadcn/ui components
- `/src/components/ui/` - shadcn/ui component library
- `/src/assets/` - Static assets like images
- `/public/` - Public static files

## Replit Configuration (September 30, 2025)

### Development Setup
- **Port**: 5000 (configured for Replit's proxy)
- **Host**: 0.0.0.0 (required for Replit environment)
- **Dev Server**: Vite with HMR enabled
- **Workflow**: "Start application" runs `npm run dev`

### Key Configuration Changes
1. Updated `vite.config.ts` to use port 5000 and host 0.0.0.0
2. Configured HMR client port to match server port (5000)
3. Set up deployment configuration for autoscale with proper port settings

### Deployment
- **Type**: Autoscale (stateless frontend)
- **Build**: `npm run build`
- **Run**: `npx vite preview --host 0.0.0.0 --port 5000`

## Available Pages
- `/` - Home page with hero section and features
- `/services` - Services page
- `/pricing` - Pricing information
- `/about` - About page
- `/contact` - Contact page
- `/auth` - Authentication page

## Development Commands
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes
- This is a frontend-only application (no backend)
- Uses in-memory state management via React Query
- Fully responsive design with dark mode support via next-themes
