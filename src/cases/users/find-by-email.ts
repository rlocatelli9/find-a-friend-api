import { ResourceNotFoundError } from "src/errors"
import { IUsersRepository } from "src/repositories/interfaces"

export interface UserProps{
  email: string
}

// work with principle SOLID
// D Dependency Inversion
export default class UserFindByEmailCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({email}: UserProps){

    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user
    }
  }
}
