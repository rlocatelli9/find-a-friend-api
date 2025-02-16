import { hash } from "bcryptjs"
import { IUsersRepository } from "src/repositories/interfaces"
import { UserAlreadyExistsError } from "../../errors"
import { Role } from "@prisma/client"

export interface UserProps{
  name: string
  email: string
  password: string
  role: Role
}

// work with principle SOLID
// D Dependency Inversion
export default class UserRegisterCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({name, email, password, role}: UserProps){
    const password_hash = await hash(password, 6)

    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({name, email, password_hash, role})

    return {
      user
    }
  }
}
