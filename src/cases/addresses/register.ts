import { IAddressesRepository } from "src/repositories/interfaces";

export type AddressProps = {
  country    :string
  uf         :string
  city       :string
  complement :string
  zip_code   :string
  latitude   :number
  longitude  :number
  org_id     :string
}

export default class RegisterAddressCase {

  constructor(private addressesRepository: IAddressesRepository){}

  async execute({
    city,
    complement,
    country,
    latitude,
    longitude,
    org_id,
    uf,
    zip_code
  }: AddressProps) {
    const address = await this.addressesRepository.create({
      city,
      complement,
      country,
      latitude,
      longitude,
      org_id,
      uf,
      zip_code
    })

    return {
      address
    }
  }
}
