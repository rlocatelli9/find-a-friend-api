import { beforeEach, describe, expect, it } from 'vitest'
import { randomUUID } from 'node:crypto'
import FindManyByCityCase from './find-many-by-city'
import OrgsFakeRepository from 'src/repositories/fake/orgs-repository'

let fakeRepository: OrgsFakeRepository
let sut: FindManyByCityCase

describe("Org filter by City case", () => {

  beforeEach(() => {
    fakeRepository = new OrgsFakeRepository()
    sut = new FindManyByCityCase(fakeRepository)
  })

  it("should be able to filter Org by city and uf", async () => {
    await fakeRepository.create({
      cnpj: "65.664.734/0001-10",
      name: "Organização Tabajara",
      owner_id: 'user_1',
      phone: '084999999999',
      city: 'Fortaleza',
      uf: 'CE',
      complement: 'Rua número zero',
      country: 'Brasil',
      zip_code: '60055888',
      latitude: -3.7380798,
      longitude: -38.5071317
    })

    const {orgs} = await sut.execute({city: 'Fortaleza', uf: 'CE'})

    expect(orgs).toHaveLength(1)

    expect(orgs).toEqual([
      expect.objectContaining({
        id  :expect.any(String),
        name:expect.stringMatching('Organização Tabajara'),
      })
    ])
  })

  it("should be able to paginated filter orgs by city and uf", async () => {
    for (let index = 0; index < 11; index++) {
      await fakeRepository.create({
        cnpj: "65.664.734/0001-10",
        name: "Organização Tabajara",
        owner_id: `user_${index+1}`,
        phone: '084999999999',
        city: 'Fortaleza',
        uf: 'CE',
        complement: 'Rua número zero',
        country: 'Brasil',
        zip_code: '60055888',
        latitude: -Number(`3.7380798${index+1}`),
        longitude: -Number(`38.507131${index+1}`)
      })
    }

    const {orgs} = await sut.execute({city: 'Fortaleza', uf: 'CE', page: 2, pageSize: 10})

    expect(orgs).toHaveLength(1)

    expect(orgs).toEqual([
      expect.objectContaining({
        id  :expect.any(String),
        name:expect.stringMatching('Organização Tabajara'),
        owner_id: 'user_11',
      })
    ])
  })
})
