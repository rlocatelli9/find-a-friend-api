import { ResourceNotFoundError } from "src/errors"
import { IPetsRepository } from "src/repositories/interfaces"

export interface GetInfoPetProps {
  id: string
}

export default class GetInfoPetCase{
  constructor(private petsRepository: IPetsRepository){}

  async execute({
    id
  }: GetInfoPetProps) {

    const pet = await this.petsRepository.findById(id)

    if(!pet) {
      throw new ResourceNotFoundError('Not found the pet')
    }

    return {
      pet
    }
  }

}
