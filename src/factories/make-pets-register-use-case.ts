import PrismaPetsRepository from 'src/repositories/prisma/pets-respository'
import PetRegisterService from 'src/cases/pets/register'


export function makePetRegisterUseCase(): PetRegisterService {
  const petsRepository = new PrismaPetsRepository()
  const registerOrgService = new PetRegisterService(petsRepository)

  return registerOrgService
}
