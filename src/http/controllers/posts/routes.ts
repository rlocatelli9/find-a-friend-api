import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/posts/register'
import { verifyOrgExists } from 'src/http/middlewares/verify-org-exists'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'

export default async function postsRoutes(app: FastifyInstance) {
  app.post('/posts',{onRequest: [verifyJWT], preHandler: [verifyOrgExists] }, Register)
}
