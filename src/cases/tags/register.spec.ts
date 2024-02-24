import { beforeEach, describe, expect, it } from 'vitest'
import RegisterTagCase from './register'
import TagsFakeRepository from 'src/repositories/fake/tags-repository'

let fakeRepository: TagsFakeRepository
let sut: RegisterTagCase

describe('Tag Register Case', () => {

  beforeEach(() => {
    fakeRepository = new TagsFakeRepository()
    sut = new RegisterTagCase(fakeRepository)
  })

  it("should be able to regiter a tag", async () => {
    const { tag } = await sut.execute({
      owner_id: 'fake_user_id',
      value: 'Node.js'
    })

    expect(tag).toEqual(
      expect.objectContaining({
        owner_id: 'fake_user_id',
        value: 'Node.js'
      })
    )
  })
})
