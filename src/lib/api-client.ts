import { createTuyau } from '@tuyau/client'
import { api } from 'backend/api'

export const tuyau = createTuyau({
  api,
  baseUrl: import.meta.env.PUBLIC_API_URL || 'http://localhost:3333',
})

