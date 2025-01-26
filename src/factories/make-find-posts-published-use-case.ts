import PrismaPostsRepository from 'src/repositories/prisma/posts-repository'
import PostsPublishedService from 'src/cases/posts/find-many-available'


export function makePostPublishedUseCase(): PostsPublishedService {
  const postsRepository = new PrismaPostsRepository()
  const postsPublishedService = new PostsPublishedService(postsRepository)

  return postsPublishedService
}
