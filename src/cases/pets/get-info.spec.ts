import { beforeEach, describe, expect, it } from 'vitest'
import PetsFakeRepository from 'src/repositories/fake/pets-repository'
import { randomUUID } from 'node:crypto'
import GetInfoPetCase from './get-info'
import { ResourceNotFoundError } from 'src/errors'

let fakeRepository: PetsFakeRepository
let sut: GetInfoPetCase

describe('Pet Get Info Case', () => {

  beforeEach(() => {
    fakeRepository = new PetsFakeRepository()
    sut = new GetInfoPetCase(fakeRepository)
  })

  it("should be able to get pet's info", async () => {
    const createdPet = await fakeRepository.create({
      id          :'fake_pet-1',
      type        :'CAT',
      name        :'Node',
      race        :'SRD',
      description :'muito fofo',
      org         : {
        connect: {
          id    :randomUUID(),
        }
      },
      age         :12,
      energy      :50,
      size        :'SMALL',
      deficiencies: false,
    })


    const {pet} = await sut.execute({pet_id: createdPet.id})

    expect(pet).toEqual(
      expect.objectContaining({
        id          :expect.stringMatching('fake_pet-1'),
        type        :'CAT',
        name        :'Node',
        race        :'SRD',
      })
    )
    expect(pet).toEqual(
      expect.objectContaining({
        owner_id: expect.any(String)
      })
    )
  })

  it("should be ale to return resource not found error if pet_id not exists", async () => {

    await expect(
      () =>  sut.execute({pet_id: 'id-not-existing'})
    ).rejects.toBeInstanceOf(ResourceNotFoundError)

  })
})
