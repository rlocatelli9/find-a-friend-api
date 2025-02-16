import { beforeEach, describe, expect, it } from 'vitest'
import PetsFakeRepository from 'src/repositories/fake/pets-repository'
import { randomUUID } from 'node:crypto'
import FindByIdCase from './find-by-id'
import { ResourceNotFoundError } from 'src/errors'
import UsersFakeRepository from 'src/repositories/fake/users-repository'

let fakeRepository: UsersFakeRepository
let sut: FindByIdCase

describe('User find by id Case', () => {

  beforeEach(() => {
    fakeRepository = new UsersFakeRepository()
    sut = new FindByIdCase(fakeRepository)
  })

  it("should be able to get user profile info", async () => {
    const {id} = await fakeRepository.create({
      name: 'user',
      email: 'user@test',
      password_hash: 'abc123',
      role: 'MEMBER',
    })


    const {user} = await sut.execute({id})

    expect(user).toEqual(
      expect.objectContaining({
        name        :'user',
        email       : 'user@test',
        password_hash :expect.any(String),
      })
    )
  })

  it("should be ale to return resource not found error if user's id not exists", async () => {

    await expect(
      () =>  sut.execute({id: 'id-not-existing'})
    ).rejects.toBeInstanceOf(ResourceNotFoundError)

  })
})
