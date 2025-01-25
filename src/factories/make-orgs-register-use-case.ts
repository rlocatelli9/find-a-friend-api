import PrismaOrgsRepository from 'src/repositories/prisma/orgs-repository'
import OrgRegisterService from '../cases/orgs/register'

export function makeOrgRegisterUseCase(): OrgRegisterService {
  const orgsRepository = new PrismaOrgsRepository()
  const registerOrgService = new OrgRegisterService(orgsRepository)

  return registerOrgService
}
