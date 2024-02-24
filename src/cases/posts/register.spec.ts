import { beforeEach, describe, expect, it } from 'vitest'
import RegisterPostCase from './register'
import PostsFakeRepository from 'src/repositories/fake/posts-repository'

let fakeRepository: PostsFakeRepository
let sut: RegisterPostCase

describe('Post Register Case', () => {

  beforeEach(() => {
    fakeRepository = new PostsFakeRepository()
    sut = new RegisterPostCase(fakeRepository)
  })

  it("should be able to regiter a post", async () => {
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
