import PrismaUsersRepository from 'src/repositories/prisma/users-repository'
import UserFindByIdService from 'src/cases/users/find-by-id'
import UserFindByIdCase from 'src/cases/users/find-by-id'

export function makeUserFindByIdUseCase(): UserFindByIdService {
  const usersRepository = new PrismaUsersRepository()
  const findByIdUserService = new UserFindByIdCase(usersRepository)
  return findByIdUserService
}
