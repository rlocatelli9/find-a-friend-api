import PrismaUsersRepository from 'src/repositories/prisma/users-repository'
import UserRegisterService from '../cases/users/register'

export function makeUserRegisterUseCase(): UserRegisterService {
  const usersRepository = new PrismaUsersRepository()
  const registerUserService = new UserRegisterService(usersRepository)

  return registerUserService
}
