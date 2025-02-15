import { beforeEach, describe, expect, it } from 'vitest'
import PetsFakeRepository from 'src/repositories/fake/pets-repository'
import { randomUUID } from 'node:crypto'
import FilterByQueryPetCase from './filter-by-query'

let fakeRepository: PetsFakeRepository
let sut: FilterByQueryPetCase

describe("Pet filter by Query Case", () => {

  beforeEach(() => {
    fakeRepository = new PetsFakeRepository()
    sut = new FilterByQueryPetCase(fakeRepository)
  })

  it("should be able to filter pet by query", async () => {
      await fakeRepository.create({
        id          :`fake_pet-1`,
        type        :'CAT',
        name        :`Node`,
        race        :'SRD',
        description :'muito fofo',
        org         : {
          connect: {
            id    :randomUUID(),
          }
        },
        age         :2,
        energy      :40,
        size        :'SMALL',
        deficiencies: false,
      })

    const {pets} = await sut.execute({query: 'energy=40'})

    expect(pets).toHaveLength(1)

    expect(pets).toEqual([
      expect.objectContaining({
        id          :expect.stringMatching('fake_pet-1'),
        type        :'CAT',
      })
    ])
  })

  it("should be able to paginated filter pet by query", async () => {
    for (let index = 0; index < 11; index++) {
      await fakeRepository.create({
        id          :`fake_pet-${index}`,
        type        :'CAT',
        name        :`Node ${index+1}`,
        race        :'SRD',
        description :'muito fofo',
        org         : {
          connect: {
            id    :randomUUID(),
          }
        },
        age         :index+1,
        energy      :40+index,
        size        :'SMALL',
        deficiencies: false,
      })
    }

    for (let index = 0; index < 11; index++) {
      await fakeRepository.create({
        id          :`fake_pet-${index+1}`,
        type        :'DOG',
        name        :`Java ${index+1}`,
        race        :'SRD',
        description :'muito fofo',
        org         : {
          connect: {
            id    :randomUUID(),
          }
        },
        age         :index+1,
        energy      :40+index,
        size        :'SMALL',
        deficiencies: false,
      })
    }

    const {pets} = await sut.execute({query: 'size=SMALL;type=DOG', page: 3, pageSize: 10})

    expect(pets).toHaveLength(2)

    expect(pets).toEqual([
      expect.objectContaining({
        id          :'fake_pet-9',
        type        :'CAT',
        name        :`Node 10`,
        race        :'SRD',
        description :'muito fofo',
        owner_id    : expect.any(String),
        age         : expect.any(Number),
        energy      : expect.any(Number),
        size        :'SMALL',
        deficiencies: false,
      }),
      expect.objectContaining({
        id          :'fake_pet-10',
        type        :'CAT',
        name        :`Node 11`,
        race        :'SRD',
        description :'muito fofo',
        owner_id    : expect.any(String),
        age         : expect.any(Number),
        energy      : expect.any(Number),
        size        :'SMALL',
        deficiencies: false,
      }),
    ])
  })
})
