# PayFlow - Bangladesh Mobile Financial Service

## Overview

PayFlow is a comprehensive mobile financial service (MFS) platform designed for Bangladesh. It provides essential banking services including cash in/out, money transfers, bill payments, and merchant transactions through a network of 50,000+ agents across all 64 districts. The application serves over 10 million users with bank-grade security and 24/7 support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend with the following key decisions:

**Component Architecture**: Built with React 18 using functional components and hooks for state management. Uses Wouter for client-side routing instead of React Router for a lighter bundle size.

**UI Framework**: Implements Radix UI primitives with shadcn/ui components for consistent, accessible design. Uses Tailwind CSS for utility-first styling with custom Bangladesh-themed colors (bangladesh-green, golden-yellow).

**State Management**: Uses TanStack Query (React Query) for server state management, providing caching, background updates, and optimistic updates. Local state handled with React hooks.

**Form Handling**: React Hook Form with Zod validation for type-safe form management and validation.

**Build System**: Vite for fast development and optimized production builds, with TypeScript for type safety.

### Backend Architecture
The backend follows a REST API pattern with Express.js:

**Server Framework**: Express.js with TypeScript for type-safe server development. Includes custom middleware for request logging and error handling.

**API Design**: RESTful endpoints organized by resource (agents, FAQs, support tickets) with consistent response patterns.

**Storage Layer**: Abstracted storage interface (IStorage) with in-memory implementation for development. Designed to easily swap to database implementations.

**Development Tools**: Hot module replacement in development with Vite integration for full-stack development experience.

### Data Storage Solutions
**Database**: PostgreSQL configured through Drizzle ORM with type-safe schema definitions. Database migrations managed through Drizzle Kit.

**Connection**: Uses Neon Database serverless PostgreSQL with connection pooling for production scalability.

**Schema Design**: Well-structured tables for users, agents, support tickets, and FAQs with proper relationships and constraints.

**Type Safety**: Drizzle-Zod integration provides runtime validation that matches database schema types.

### Authentication and Authorization
Currently implements a basic foundation with user schema defined but authentication middleware not yet implemented. Designed to support session-based authentication with PostgreSQL session storage using connect-pg-simple.

### External Service Integrations
**Database Hosting**: Neon Database for serverless PostgreSQL hosting with automatic scaling.

**Development Environment**: Replit integration with specialized plugins for development workflow and error handling.

**Session Management**: Configured for connect-pg-simple for PostgreSQL-backed session storage.

The architecture prioritizes type safety, developer experience, and scalability while maintaining simplicity for a financial service application serving Bangladesh's diverse user base.