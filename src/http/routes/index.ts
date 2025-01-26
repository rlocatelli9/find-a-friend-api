import { FastifyInstance } from 'fastify'
import usersRoutes from '../controllers/users/routes'
import orgsRoutes from '../controllers/orgs/routes'
import authRoutes from '../controllers/auth/routes'
import petsRoutes from '../controllers/pets/routes'
import postsRoutes from '../controllers/posts/routes'

export default async function appRoutes(app: FastifyInstance) {
  app.register(authRoutes)
  app.register(usersRoutes)
  app.register(orgsRoutes)
  app.register(petsRoutes)
  app.register(postsRoutes)
}
