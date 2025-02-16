import UsersFakeRepository from 'src/repositories/fake/users-repository'
import {beforeEach, describe, expect, it} from 'vitest'
import UserRegisterCase from './register'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from '../../errors'

let fakeUsersRepository: UsersFakeRepository
let sut: UserRegisterCase

describe('User Register Case', () => {

  beforeEach(() => {
    fakeUsersRepository = new UsersFakeRepository()
    sut = new UserRegisterCase(fakeUsersRepository)
  })

  it("should be able to crypt the user's password", async () => {
    const {
      user: { password_hash: passwordHash },
    } = await sut.execute({
      name: 'user',
      email: 'user@test',
      password: 'abc123',
      role: 'MEMBER',
    })

    const isPasswordCorrectlyHashed = await compare('abc123', passwordHash)

    expect(isPasswordCorrectlyHashed).toBeTruthy()
  })

  it("should not be able to register user with same email", async () => {
    await sut.execute({
      name: 'user-1',
      email: 'user@test',
      password: 'abc123',
      role: 'MEMBER',
    })

    await expect(()=> sut.execute({
      name: 'user-2',
      email: 'user@test',
      password: 'abc123',
      role: 'MEMBER',
    })).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
