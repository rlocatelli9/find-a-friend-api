import { Prisma, User } from "@prisma/client"
import { randomUUID } from "node:crypto"
import { IUsersRepository } from "../interfaces"

export default class UsersFakeRepository implements IUsersRepository{
  private users: Array<User> = []

  constructor() {}
  async findByEmail(email: string){
    const user = this.users.find(user => user.email === email)

    if(!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: data?.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      updated_at: new Date(),
    } as User

    this.users.push(user)

    return user
  }

}


