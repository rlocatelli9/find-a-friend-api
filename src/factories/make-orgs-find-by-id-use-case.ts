import PrismaOrgsRepository from 'src/repositories/prisma/orgs-repository'
import OrgFindByIdService from '../cases/orgs/find-by-id'

export function makeFindOrgByIdUseCase(): OrgFindByIdService {
  const orgsRepository = new PrismaOrgsRepository()
  const orgFindByIdService = new OrgFindByIdService(orgsRepository)

  return orgFindByIdService
}
