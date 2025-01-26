import { PetUncheckedCreateInputObjectSchema } from "prisma/generated/schemas"
import { IPetsRepository } from "src/repositories/interfaces"
import { z } from "zod"

export type RegisterPetProps = z.infer<typeof PetUncheckedCreateInputObjectSchema>

export default class RegisterPetCase{
  constructor(private petsRepository: IPetsRepository){}

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

    const pet = await this.petsRepository.create({
      type,
      name,
      race,
      description,
      deficiencies,
      owner_id,
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
