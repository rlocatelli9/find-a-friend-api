import PrismaUsersRepository from 'src/repositories/prisma/users-repository'
import AuthenticateService from '../cases/auth/authenticate'

export function makeAuthenticateUseCase(): AuthenticateService {
  const usersRepository = new PrismaUsersRepository()
  const service = new AuthenticateService(usersRepository)

  return service
}
