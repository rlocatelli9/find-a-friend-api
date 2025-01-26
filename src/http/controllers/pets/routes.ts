import { FastifyInstance } from 'fastify'
import Register from 'src/http/controllers/pets/register'
import { verifyOrgExists } from 'src/http/middlewares/verify-org-exists'
import { verifyJWT } from 'src/http/middlewares/verifyJwt'

export default async function petsRoutes(app: FastifyInstance) {
  app.post('/pets',{ onRequest: [verifyJWT], preHandler: [verifyOrgExists] }, Register)
}
