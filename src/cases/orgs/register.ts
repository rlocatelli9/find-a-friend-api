import { ResourceAlreadyExistsError } from "src/errors"
import { IOrgsRepository } from "src/repositories/interfaces"

export type AddressProps = {
  country    :string
  uf         :string
  city       :string
  complement :string
  zip_code   :string
  latitude   :number
  longitude  :number
}

export interface OrgsRepositoryProps{
  name       :string
  phone      :string
  cnpj       :string
  owner_id   :string
  address    :AddressProps
}

export default class RegisterOrgCase {
  constructor(
    private orgsRepository: IOrgsRepository,
  ){}

  async execute({
    cnpj,
    name,
    owner_id,
    phone,
    address,
  }: OrgsRepositoryProps) {

    const orgExists = await this.orgsRepository.findByOwnerId(owner_id);

    if (orgExists) {
      throw new ResourceAlreadyExistsError('Org already exists');
    }

    const org = await this.orgsRepository.create({
      cnpj,
      name,
      owner_id,
      phone,
      ...address,
    })

    return {
      org
    }

  }
}
