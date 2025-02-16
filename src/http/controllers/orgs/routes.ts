import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/orgs/register'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'

export default async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs',{ onRequest: [verifyJWT] }, Register)
  // app.patch('/token/refresh', Refresh)

  /** authenticated routes */
  // app.get('/users/me', { onRequest: [verifyJWT] }, UserProfile)
}
