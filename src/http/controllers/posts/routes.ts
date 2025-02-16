import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/posts/register'
import { verifyOrgExists } from 'src/http/middlewares/verify-org-exists'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'
import FindManyPublished from './find-many-published'
import { handlerPostagination } from 'src/http/middlewares/handler-post-pagination'

export default async function postsRoutes(app: FastifyInstance) {
  app.post('/posts',{onRequest: [verifyJWT]}, Register)

  app.get('/posts', {onRequest: [verifyJWT], preValidation: [handlerPostagination]}, FindManyPublished)
}
