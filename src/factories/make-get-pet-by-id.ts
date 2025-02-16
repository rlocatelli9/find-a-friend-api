import PrismaPetsRepository from 'src/repositories/prisma/pets-respository'
import PetByIdService from '../cases/pets/find-info'

export function makeGetPetByIdUseCase(): PetByIdService {
  const petsRepository = new PrismaPetsRepository()
  const petByIdService = new PetByIdService(petsRepository)

  return petByIdService
}
