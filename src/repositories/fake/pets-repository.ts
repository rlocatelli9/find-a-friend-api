import { Pet, Prisma } from "@prisma/client"
import { IPetsRepository, PetQueryProps } from "../interfaces"
import { randomUUID } from "node:crypto"
import { FilterByQueryPetProps } from "src/cases/pets/filter-by-query"

export default class PetsFakeRepository implements IPetsRepository{
  private pets: Array<Pet> = []

  constructor() {}
  async findManyByQuery({ query, page = 1, pageSize = 10}:FilterByQueryPetProps) {
    const splitedQuery = query.split(';')
    let fields = {} as PetQueryProps

    if(splitedQuery?.length){
      splitedQuery.forEach(query => {
        const [key, value] = query.split('=')
        const item = {
          [key]: value
        }
        fields = {...fields, ...item}
      })

      const filteredPetsByType = fields?.type ? this.pets.filter(pet => pet.type === fields?.type) : []
      const filteredPetsByAge = fields?.age ? this.pets.filter(pet => pet.age === Number(fields?.age)) : []
      const filteredPetEnergy = fields?.energy ? this.pets.filter(pet => pet.energy === Number(fields?.energy)) : []
      const filteredPetSize = fields?.size ? this.pets.filter(pet => pet.size === fields?.size) : []

      const set = new Set([...filteredPetsByType, ...filteredPetsByAge, ...filteredPetEnergy, ...filteredPetSize])
      let serializedPets = []

      for (const iterator of set) {
        if(iterator) serializedPets.push(iterator)
      }

      let pageValue = page
      if (page < 1) {
        pageValue = 1
      }
      const totalPages = Math.ceil(serializedPets.length / pageSize)
      if (pageValue > totalPages) pageValue = totalPages;

      const pets = []

      for (var i = (pageValue-1) * pageSize; i < (pageValue * pageSize) && i < serializedPets.length; i+=1) {
        pets.push(serializedPets[i])
      }

      return pets
    }

    return []
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


