import { Pet, Prisma } from "@prisma/client"
import { IPetsRepository } from "../interfaces"
import { randomUUID } from "node:crypto"
import { FilterByQueryPetProps } from "src/cases/pets/filter-by-query"

export default class PetsFakeRepository implements IPetsRepository{
  private pets: Array<Pet> = []

  constructor() {}
  async findManyByQuery({ where, skip = 0, take = 10}:FilterByQueryPetProps){

    const filteredPetsByType = where?.type ? this.pets.filter(pet => pet.type === where?.type) : []
    const filteredPetsByAge = where?.age ? this.pets.filter(pet => pet.age <= Number(where?.age)) : []
    const filteredPetEnergy = where?.energy ? this.pets.filter(pet => pet.energy <= Number(where?.energy)) : []
    const filteredPetSize = where?.size ? this.pets.filter(pet => pet.size === where?.size) : []

    const set = new Set([...filteredPetsByType, ...filteredPetsByAge, ...filteredPetEnergy, ...filteredPetSize])
    let serializedPets = []

    for (const iterator of set) {
      if(iterator) serializedPets.push(iterator)
    }

    let startIndex = 0
    if(skip >= serializedPets.length) {
      return {
        data: [],
        meta: {
          totalCount: serializedPets.length,
          pageCount: Math.ceil(serializedPets.length / take)
        }
      }
    }

    if(skip > 0 && skip < serializedPets.length) {
      startIndex = skip
    }
    const endIndex = startIndex + (take - 1)
    const paginatedPets = serializedPets.slice(startIndex, endIndex) as Pet[]

    return {
      data: paginatedPets,
      meta: {
        totalCount: serializedPets.length,
        pageCount: Math.ceil(serializedPets.length / take)
      }
    }
  }

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

  async create(data: Prisma.PetCreateInput) {
    const pet = {
      id          :data.id ?? randomUUID(),
      type        :data.type,
      name        :data.name,
      race        :data.race,
      deficiencies:data.deficiencies,
      description :data.description,
      owner_id    :data.org.connect?.id,
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


