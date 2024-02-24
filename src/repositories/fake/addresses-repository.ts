import { Address, Org, Prisma } from "@prisma/client";
import { IAddressRepository } from "../interfaces"
import { randomUUID } from "crypto";

export default class AddressesFakeRepository implements IAddressRepository{
  private addresses: Array<Address> = []

  constructor(){}

  async create(data: Prisma.AddressUncheckedCreateInput) {
    const address = {
      id          :data.id ?? randomUUID(),
      city        :data.city,
      country     :data.country,
      latitude    :data.latitude,
      longitude   :data.longitude,
      uf          :data.uf,
      zip_code    :data.zip_code,
      complement  :data.complement,
      org_id      :data.org_id,
    } as Address

    this.addresses.push(address)

    return address
  }

  async findByOrgId(orgId: string) {
    const address = this.addresses.find(address => address.org_id === orgId)

    if(!address) {
      return null
    }

    return address
  }

}


