import { beforeEach, describe, expect, it, vi } from 'vitest'
import PetRegisterCase from './register'
import PetsFakeRepository from 'src/repositories/fake/pets-repository'
import { randomUUID } from 'node:crypto'
import OrgsFakeRepository from 'src/repositories/fake/orgs-repository'
import { IOrgsRepository } from 'src/repositories/interfaces'
import { ResourceNotFoundError } from 'src/errors'

let fakeRepository: PetsFakeRepository
let sut: PetRegisterCase
const mockOrgsRepository: IOrgsRepository = {
  findById: vi.fn(),
  findManyByCity: vi.fn(),
  create: vi.fn(),
  findByPhone: vi.fn(),
  findByOwnerId: vi.fn(),
};


describe('Pet Register Case', () => {

  beforeEach(() => {
    fakeRepository = new PetsFakeRepository()
    sut = new PetRegisterCase(fakeRepository, mockOrgsRepository)
  })

  it("should be able to regiter a pet", async () => {
    const owner_id = randomUUID()
    mockOrgsRepository.findById = vi.fn().mockResolvedValue({
      owner_id,
      title: 'Organizações Tabajara'
    })
    const { pet } = await sut.execute({
      type        :'CAT',
      name        :'Node',
      race        :'SRD',
      description :'muito fofo',
      owner_id,
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

  it('should throw an error if the organization does not exist', async () => {
    mockOrgsRepository.findById = vi.fn().mockResolvedValue(null); // Simula que a organização não foi encontrada

    await expect(sut.execute({
      type        :'CAT',
      name        :'Node',
      race        :'SRD',
      description :'muito fofo',
      owner_id    :randomUUID(),
      age         :12,
      energy      :50,
      size        :'SMALL',
      deficiencies: false,
    })).rejects.toThrowError(ResourceNotFoundError);
  });

})
