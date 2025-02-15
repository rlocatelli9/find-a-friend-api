import { beforeEach, describe, expect, it, vi } from 'vitest'
import RegisterPostCase from './register'
import PostsFakeRepository from 'src/repositories/fake/posts-repository'
import { IOrgsRepository, IPetsRepository } from 'src/repositories/interfaces'

let fakeRepository: PostsFakeRepository
let sut: RegisterPostCase

const mockOrgsRepository: IOrgsRepository = {
  findById: vi.fn(),
  findManyByCity: vi.fn(),
  create: vi.fn(),
  findByPhone: vi.fn(),
  findByOwnerId: vi.fn(),
};

const mockPetsRepository: IPetsRepository = {
  findById: vi.fn(),
  create: vi.fn(),
  findByOwnerId: vi.fn(),
  findManyByQuery: vi.fn(),
};

describe('Post Register Case', () => {

  beforeEach(() => {
    fakeRepository = new PostsFakeRepository()
    sut = new RegisterPostCase(fakeRepository, mockOrgsRepository, mockPetsRepository)
  })

  it("should be able to regiter a post", async () => {
    const orgId = 'fake_owner_1'
    mockOrgsRepository.findById = vi.fn().mockResolvedValue({
      id: orgId,
      title: 'Organizações Tabajara'
    })
    mockPetsRepository.findById = vi.fn().mockResolvedValue({
      id: 'fake_pet_1',
      title: 'Doguinho',
      available: true
    })

    const { post } = await sut.execute({
      title: 'Adoção de Pet',
      description: 'Pet muito fofo',
      owner_id: 'fake_owner_1',
      pet_id: 'fake_pet_1',
      published_at: new Date(),
    })

    expect(post).toEqual(
      expect.objectContaining({
        title: 'Adoção de Pet',
        owner_id: 'fake_owner_1',
        pet_id: 'fake_pet_1',
      })
    )
  })
})
