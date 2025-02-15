import PrismaPetsRepository from 'src/repositories/prisma/pets-respository'
import PrismaOrgsRepository from 'src/repositories/prisma/orgs-repository'
import PetRegisterService from 'src/cases/pets/register'


export function makePetRegisterUseCase(): PetRegisterService {
  const petsRepository = new PrismaPetsRepository()
  const orgsRepository = new PrismaOrgsRepository()
  const registerOrgService = new PetRegisterService(petsRepository, orgsRepository)

  return registerOrgService
}
