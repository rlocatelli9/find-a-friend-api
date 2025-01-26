import PrismaUsersRepository from 'src/repositories/prisma/users-repository'
import UserFindByEmailService from 'src/cases/users/find-by-email'
import UserFindByEmailCase from 'src/cases/users/find-by-email'

export function makeUserFindByEmailUseCase(): UserFindByEmailService {
  const usersRepository = new PrismaUsersRepository()
  const  findByEmailUserService = new UserFindByEmailCase(usersRepository)
  return findByEmailUserService
}
