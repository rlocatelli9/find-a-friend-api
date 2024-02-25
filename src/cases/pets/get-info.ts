import { IPetsRepository } from "src/repositories/interfaces"
import { ResourceNotFoundError } from "../errors"

export interface GetInfoPetProps {
  pet_id: string
}

export default class GetInfoPetCase{
  constructor(private petsRepository: IPetsRepository){}

  async execute({
    pet_id
  }: GetInfoPetProps) {

    const pet = await this.petsRepository.findById(pet_id)

    if(!pet) {
      throw new ResourceNotFoundError()
    }

    return {
      pet
    }
  }

}
