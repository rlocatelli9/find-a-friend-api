import { IOrgsRepository } from "src/repositories/interfaces"


export interface OrgsRepositoryProps{
  name       :string
  phone      :string
  cnpj       :string
  owner_id   :string
}

export default class RegisterOrgCase {
  constructor(
    private orgsRepository: IOrgsRepository,
  ){}

  async execute({
    cnpj,
    name,
    owner_id,
    phone
  }: OrgsRepositoryProps) {

    const org = await this.orgsRepository.create({
      cnpj,
      name,
      owner_id,
      phone
    })

    return {
      org
    }

  }
}
