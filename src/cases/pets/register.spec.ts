import { beforeEach, describe, expect, it } from 'vitest'
import PetRegisterCase from './register'
import PetsFakeRepository from 'src/repositories/fake/pets-repository'
import { randomUUID } from 'node:crypto'

let fakeRepository: PetsFakeRepository
let sut: PetRegisterCase

describe('Pet Register Case', () => {

  beforeEach(() => {
    fakeRepository = new PetsFakeRepository()
    sut = new PetRegisterCase(fakeRepository)
  })

  it("should be able to regiter a pet", async () => {
    const { pet } = await sut.execute({
      type        :'CAT',
      name        :'Node',
      race        :'SRD',
      description :'muito fofo',
      owner_id    :randomUUID(),
      age         :12,
      energy      :50,
      size        :'SMALL',
      deficiencies: false,
    })

    expect(pet).toEqual(
      expect.objectContaining({
        name        :'Node',
        race        :'SRD',
        deficiencies: false,
      })
    )
  })
})
