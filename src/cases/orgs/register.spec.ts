import { beforeEach, describe, expect, it } from 'vitest'
import RegisterOrgCase from './register'
import OrgsFakeRepository from 'src/repositories/fake/orgs-repository'

let fakeRepository: OrgsFakeRepository
let sut: RegisterOrgCase

describe('Org Register Case', () => {

  beforeEach(() => {
    fakeRepository = new OrgsFakeRepository()
    sut = new RegisterOrgCase(fakeRepository)
  })

  it("should be able to regiter a Org", async () => {
    const { org } = await sut.execute({
      cnpj: "65.664.734/0001-10",
      name: "Organização Tabajara",
      owner_id: 'user_1',
      phone: '084999999999',
    })

    expect(org).toEqual(
      expect.objectContaining({
        cnpj: "65.664.734/0001-10",
        name: "Organização Tabajara",
        owner_id: 'user_1',
        phone: '084999999999',
      })
    )
  })
})
