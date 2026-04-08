# MusiConnect

Real-time shared music listening platform where users can listen together in synchronized sessions via invite codes.

Built with a scalable full-stack architecture using Turborepo.

MusiConnect allows users to explore music, create playlists, and listen together in synchronized sessions using a shared session code.

This project demonstrates engineering fundamentals including clean backend architecture, type-safe APIs, scalable monorepo structure, and real-time system design thinking.

---

# Demo Concept

Users can:

* discover songs, artists, albums
* create and manage playlists
* stream audio from CDN
* listen together in real-time group sessions
* share session codes with friends

---

# Tech Stack

## Monorepo

Turborepo

Shared types between frontend and backend

Consistent API contracts

---

## Frontend

Next.js (App Router)

TypeScript

Tailwind CSS v4

Motion (Framer Motion v12)

Lucide icons

Responsive UI

Reusable component architecture

---

## Backend

Express.js

TypeScript

Prisma ORM

PostgreSQL

Zod validation

Clean Architecture pattern

Global error handler

Async handler wrapper

Repository pattern

---

## Infrastructure

Docker

PostgreSQL container

CDN-ready audio storage

Environment-based configuration

Scalable architecture design

---

# System Design Overview

High level architecture:

Client → Next.js frontend → Express API → PostgreSQL database
↓
CDN storage

Future realtime layer:

Client → WebSocket → Server → broadcast → session users

---

# Key Engineering Decisions

Monorepo architecture using Turborepo

Clean Architecture backend

Type-safe contracts across stack

Repository pattern for database access

Service layer for business logic

Controller layer for request handling

Zod runtime validation

Prisma typed queries

Scalable folder structure

Environment-based configuration

Prepared for realtime features

---

# Monorepo Structure

```
musiconnect/

apps/
web/                     → Next.js frontend
api/                     → Express backend

packages/
types/                   → shared types

docker/
docker-compose.yml

```

---

# Backend Architecture

Each module follows consistent structure:

```
modules/

song/
controller/
service/
repository/
schema/
routes/

artist/
controller/
service/
repository/
schema/
routes/

album/
playlist/
user/

shared/
middleware/
config/
utils/
errors/

```

---

# Database Schema

Core entities:

User

Artist

Album

Song

Playlist

PlaylistSong (join table)

Relationships:

Artist → Albums → Songs

User → Playlists

Playlist → Songs (many-to-many)

Design decisions:

Normalized relational schema

Clear entity boundaries

Efficient joins

Scalable indexing support

---

# Features

## Core Features

Browse songs

Browse artists

Browse albums

Create playlists

Add songs to playlist

Remove songs from playlist

View artist details

View album details

Explore catalog

Global music player UI

Type-safe API integration

Reusable UI components

---

## Realtime Features (planned)

Create listening session

Join session via code

Host controlled playback

Synced play/pause

Synced seek

Synced track change

Room-based socket architecture

Low latency state synchronization

---

# Installation

## Clone repository

```
git clone <repo_url>

cd musiconnect
```

---

# Running Locally (without Docker)

Install dependencies:

```
pnpm install
```

Create PostgreSQL database:

```
musiconnect_db
```

Run Prisma migrations:

```
cd apps/api

pnpm prisma migrate dev
```

Start backend:

```
pnpm dev
```

Start frontend:

```
cd ../web

pnpm dev
```

App runs on:

```
http://localhost:3000
```

API runs on:

```
http://localhost:5000
```

---

# Running with Docker

Start services:

```
docker compose up --build
```

Services:

postgres

api

web

Stop services:

```
docker compose down
```

---

# API Overview

Songs

GET /api/songs

GET /api/songs/:id

POST /api/songs

PATCH /api/songs/:id

DELETE /api/songs/:id

---

Artists

GET /api/artists

GET /api/artists/:id

GET /api/artists/:id/songs

GET /api/artists/:id/albums

POST /api/artists

---

Albums

GET /api/albums

GET /api/albums/:id

GET /api/albums/:id/songs

POST /api/albums

---

Playlists

POST /api/playlists

GET /api/playlists

GET /api/playlists/:id

POST /api/playlists/:id/songs

DELETE /api/playlists/:playlistId/songs/:songId

---

# Shared Types

packages/types ensures consistent API contracts between frontend and backend.

Benefits:

type safety across stack

reduces integration bugs

single source of truth

improves maintainability

---

# Error Handling Strategy

Global error middleware

Consistent response format

asyncHandler wrapper

centralized error utilities

predictable API behaviour

---

# Scalability Considerations

Stateless backend services

CDN based audio delivery

room-based realtime architecture

database indexing support

modular service architecture

ready for horizontal scaling

supports caching layer integration

supports queue-based async jobs

---

# Future Improvements

Google OAuth authentication

JWT access token + refresh token

WebSocket realtime sync implementation

Redis caching layer

Search functionality

Pagination support

Queue system for upcoming songs

Audio streaming optimization

CI/CD pipeline

Unit tests

Integration tests

Load testing

Kubernetes deployment

rate limiting middleware

observability (logs + metrics)

---

# Why this project is valuable for engineering portfolio

Demonstrates real-world backend architecture

Shows system design thinking

Uses scalable monorepo structure

Implements type-safe contracts

Follows production-ready coding patterns

Shows ability to design realtime systems

Demonstrates strong separation of concerns

Uses modern stack used in startups

Shows ability to structure large codebases

Demonstrates practical full-stack skills

---

# Author

Shubham Kashyap

Software engineer focused on:

scalable backend systems

system design

realtime applications

type-safe full-stack architecture

---

# License

MIT
