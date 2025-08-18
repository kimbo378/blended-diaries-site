# The Blended Diaries - Website

## Overview

The Blended Diaries is a playful diary-style website for a funny UK book series about blended family life. The site features a React frontend with a diary aesthetic (lined paper backgrounds, handwritten fonts, doodle accents) and an Express.js backend. The application showcases the book series through character introductions, book details, reviews, and includes email signup functionality for marketing purposes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom diary-themed color palette and fonts
- **State Management**: TanStack Query for server state and form handling with React Hook Form
- **Design System**: Custom diary aesthetic with handwritten fonts (Patrick Hand), lined paper backgrounds, and doodle accents in coral, teal, and mustard colors

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for email signups and contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Development Setup**: Integrated Vite development server with hot module replacement
- **Error Handling**: Centralized error middleware with structured error responses

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Database**: PostgreSQL (configured but not yet connected, using Neon serverless)
- **Schema**: Two main entities - email signups and contact submissions with UUID primary keys
- **Migrations**: Drizzle Kit for database schema management and migrations

### Form Handling & Validation
- **Client-side**: React Hook Form with Zod schema validation
- **Server-side**: Zod validation for API endpoints ensuring data integrity
- **User Experience**: Toast notifications for form submission feedback
- **Data Flow**: Form data validated on both client and server before storage

### External Dependencies
- **Database Provider**: Neon serverless PostgreSQL (DATABASE_URL environment variable required)
- **Email Service**: Ready for integration (email signup collection implemented)
- **Development Tools**: Replit-specific development plugins for hot reloading and error overlay
- **Font Loading**: Google Fonts integration for Patrick Hand and Lato fonts
- **Build Process**: ESBuild for server bundling, Vite for client bundling