import { FastifyInstance } from 'fastify'
import Authenticate from './authenticate'
import Refresh from './refresh'

export default async function authRoutes(app: FastifyInstance) {
  app.post('/authenticate', Authenticate)
  app.patch('/token/refresh', Refresh)

  /** authenticated routes */
  // app.get('/users/me', { onRequest: [verifyJWT] }, UserProfile)
}
