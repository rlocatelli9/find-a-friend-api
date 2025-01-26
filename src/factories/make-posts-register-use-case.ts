import PrismaPostsRepository from 'src/repositories/prisma/posts-repository'
import PostsRegisterService from 'src/cases/posts/register'


export function makePostRegisterUseCase(): PostsRegisterService {
  const postsRepository = new PrismaPostsRepository()
  const registerOrgService = new PostsRegisterService(postsRepository)

  return registerOrgService
}
