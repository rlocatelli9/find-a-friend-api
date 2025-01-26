import { ResourceNotFoundError } from "src/errors"
import { IUsersRepository } from "src/repositories/interfaces"

export interface UserProps{
  id: string
}

// work with principle SOLID
// D Dependency Inversion
export default class UserFindByIdCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({id}: UserProps){

    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user
    }
  }
}
