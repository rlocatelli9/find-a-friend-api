import { IOrgsRepository, IPetsRepository } from "src/repositories/interfaces"

export type FindByIdProps = {
  id: string
 }

export default class FindManyByCityCase{
  constructor(private orgsRepository: IOrgsRepository){}

  async execute({
    id
  }: FindByIdProps) {

    const org = await this.orgsRepository.findById(id);

    return {
      org
    }
  }

}
