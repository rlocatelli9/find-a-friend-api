import { compare } from "bcryptjs"
import { InvalidCredentialsError } from "src/errors"
import { IUsersRepository } from "src/repositories/interfaces"
import { User } from '@prisma/client'

export interface AuthenticateCaseRequest {
  email: string;
  password: string;
}

export interface AuthenticateCaseResponse {
  user: User
}

export default class AuthenticateCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({email, password}: AuthenticateCaseRequest): Promise<AuthenticateCaseResponse> {

    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if(!doesPasswordMatches){
      throw new InvalidCredentialsError()
    }

    return {
      user
    }
  }
}
