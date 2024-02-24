import { beforeEach, describe, expect, it } from 'vitest'
import AddressesFakeRepository from 'src/repositories/fake/addresses-repository'
import RegisterAddressCase from './register'

let fakeRepository: AddressesFakeRepository
let sut: RegisterAddressCase

describe('Address Register Case', () => {

  beforeEach(() => {
    fakeRepository = new AddressesFakeRepository()
    sut = new RegisterAddressCase(fakeRepository)
  })

  it("should be able to regiter a ORG's address", async () => {
    const { address } = await sut.execute({
      city: "New York",
      complement: '',
      country: "United States",
      latitude: 40.6974881,
      longitude:-73.979681,
      org_id: 'org_1',
      uf: 'US',
      zip_code: '10005'
    })

    expect(address).toEqual(
      expect.objectContaining({
        country: "United States",
        latitude: 40.6974881,
        longitude:-73.979681,
        org_id: 'org_1',
      })
    )
  })
})
