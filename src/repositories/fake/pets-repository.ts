import { $Enums, Pet, Prisma } from "@prisma/client"
import { IPetsRepository } from "../interfaces"
import { randomUUID } from "node:crypto"

export default class PetsFakeRepository implements IPetsRepository{
  private pets: Array<Pet> = []

  constructor() {}
  async findById(petId: string) {
    const user = this.pets.find(pet => pet.id === petId)

    if(!user) {
      return null
    }

    return user
  }

  async findByOwnerId(ownerId: string){
    const user = this.pets.find(pet => pet.owner_id === ownerId)

    if(!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id          :data.id ?? randomUUID(),
      type        :data.type,
      name        :data.name,
      race        :data.race,
      deficiencies:data.deficiencies,
      description :data.description,
      owner_id    :data.owner_id,
      age         :data.age,
      energy      :data.energy,
      size        :data.size,
      created_at: new Date(),
      updated_at: new Date(),
    } as Pet

    this.pets.push(pet)

    return pet
  }

}


