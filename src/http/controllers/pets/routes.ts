import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/pets/register'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'
import FindById from './find-by-id'

export default async function petsRoutes(app: FastifyInstance) {
  app.post('/pets',{ onRequest: [verifyJWT] }, Register)
  app.get('/pets/:id',{ onRequest: [verifyJWT] }, FindById)
}
