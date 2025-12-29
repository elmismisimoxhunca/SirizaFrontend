# API Client

This directory contains the Tuyau API client setup for communicating with the backend API.

## Setup

The API client is configured to use the backend's route registry, providing type-safe API calls.

## Usage

### Import the client

```typescript
import { apiClient, urlFor } from './lib/api-client'
```

### Get URLs for routes

```typescript
const homeUrl = urlFor('hello.index')
// Returns: '/'
```

### Make API requests

```typescript
// GET request
const response = await apiClient.get('hello.index')

// POST request with body
const response = await apiClient.post('some.route', {
  body: { name: 'John' },
})

// GET request with query parameters
const response = await apiClient.get('hello.index', {
  query: { page: 1, limit: 10 },
})
```

## Configuration

The API base URL can be configured via the `PUBLIC_API_URL` environment variable. Defaults to `http://localhost:3333`.

Create a `.env` file in the frontend package root:

```env
PUBLIC_API_URL=http://localhost:3333
```

## Type Safety

All routes are type-safe thanks to the Tuyau registry. TypeScript will autocomplete route names and validate parameters.




