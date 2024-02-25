import { IPetsRepository } from "src/repositories/interfaces"

export type PetType = 'DOG'|'CAT'|'OTHERS'
export type PetSize = 'SMALL'|'MIDDLE'|'BIG'|'GIANT'

export interface RegisterPetProps{
  id?:string
  type: PetType
  name: string
  race: string
  deficiencies: boolean
  description: string
  owner_id: string
  age: number
  energy: number
  available?: boolean
  size: PetSize
}

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
    size
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
