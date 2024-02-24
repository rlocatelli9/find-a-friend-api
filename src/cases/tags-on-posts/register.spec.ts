import { beforeEach, describe, expect, it } from 'vitest'
import TagsOnPostsFakeRepository from 'src/repositories/fake/tag-on-post-repository'
import RegisterTagOnPostCase from './register'

let fakeRepository: TagsOnPostsFakeRepository
let sut: RegisterTagOnPostCase

describe('Tag on Post Register Case', () => {

  beforeEach(() => {
    fakeRepository = new TagsOnPostsFakeRepository()
    sut = new RegisterTagOnPostCase(fakeRepository)
  })

  it("should be able to regiter a tag on post", async () => {
    const { tagsOnPosts } = await sut.execute({
      post_id: 'fake-post_1',
      tag_id: 'fake-tag_1',
    })

    expect(tagsOnPosts).toEqual(
      expect.objectContaining({
        post_id: 'fake-post_1',
        tag_id: 'fake-tag_1',
      })
    )
  })
})
