import PrismaPostsRepository from 'src/repositories/prisma/posts-repository'
import PrismaOrgsRepository from 'src/repositories/prisma/orgs-repository'
import PrismaPetsRepository from 'src/repositories/prisma/pets-respository'
import PostsRegisterService from 'src/cases/posts/register'


export function makePostRegisterUseCase(): PostsRegisterService {
  const postsRepository = new PrismaPostsRepository()
  const orgsRepository = new PrismaOrgsRepository()
  const petsRepository = new PrismaPetsRepository()
  const postsRegisterService = new PostsRegisterService(postsRepository, orgsRepository, petsRepository)

  return postsRegisterService
}
