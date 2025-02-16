import { beforeEach, describe, expect, it } from 'vitest'
import FindByIdCase from './find-by-id'
import OrgsFakeRepository from 'src/repositories/fake/orgs-repository'
import { ResourceNotFoundError } from 'src/errors'

let fakeRepository: OrgsFakeRepository
let sut: FindByIdCase

describe("Org find by Id Case", () => {


  beforeEach(() => {
    fakeRepository = new OrgsFakeRepository()
    sut = new FindByIdCase(fakeRepository)
  })

  it("should be able to find Org by id", async () => {
    await fakeRepository.create({
      id: 'invalid-org-id',
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

    const {org} = await sut.execute({id: 'invalid-org-id'})


    expect(org).toEqual(
      expect.objectContaining({
        id  :'invalid-org-id',
        name:expect.stringMatching('Organização Tabajara'),
      })
    )
  })

  it("should not be able to find org with wrong Id", async () => {
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

    const {org} = await sut.execute({id: 'invalid-org-id'})

    expect(org).toBeNull()

  })
})
