import { PetUncheckedCreateInputObjectSchema } from "prisma/generated/schemas"
import { ResourceNotFoundError } from "src/errors"
import { IOrgsRepository, IPetsRepository } from "src/repositories/interfaces"
import { z } from "zod"

export type RegisterPetProps = z.infer<typeof PetUncheckedCreateInputObjectSchema>

export default class RegisterPetCase{
  constructor(
    private petsRepository: IPetsRepository,
    private orgsRepository: IOrgsRepository,
  ){}

  async execute({
    type,
    name,
    race,
    deficiencies,
    description,
    owner_id,
    age,
    energy,
    available,
    size,
  }: RegisterPetProps) {

    const org = await this.orgsRepository.findById(owner_id)

    if(!org) {
      throw new ResourceNotFoundError('The Org is not exists')
    }

    const pet = await this.petsRepository.create({
      type,
      name,
      race,
      description,
      deficiencies,
      org: {
        connect: {
          id: org.id
        }
      },
      age,
      energy,
      available,
      size
    })

    return {
      pet
    }
  }

}
