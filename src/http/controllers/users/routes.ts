import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/users/register'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'
import FindById from './find-by-id'

export default async function usersRoutes(app: FastifyInstance) {
  app.post('/users', Register)
  // app.patch('/token/refresh', Refresh)

  /** authenticated routes */
  app.get('/users/me', { onRequest: [verifyJWT] }, FindById)
}
