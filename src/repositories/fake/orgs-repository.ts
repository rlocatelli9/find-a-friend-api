import { Org, Prisma } from "@prisma/client";
import { IOrgsRepository } from "../interfaces"
import { randomUUID } from "crypto";

export default class OrgsFakeRepository implements IOrgsRepository{
  private orgs: Array<Org> = []

  constructor(){}

  async create(data: Prisma.OrgUncheckedCreateInput) {
    const org = {
      id          :data.id ?? randomUUID(),
      name        :data.name,
      cnpj        :data.cnpj,
      owner_id    :data.owner_id,
      phone       :data.phone,
      deleted_at  : null,
      created_at  : new Date(),
      updated_at  : new Date(),
    } as Org

    this.orgs.push(org)

    return org
  }


  async findByOwnerId(ownerId: string) {
    const org = this.orgs.find(org => org.owner_id === ownerId)

    if(!org) {
      return null
    }

    return org
  }

  async findByPhone(phone: string) {
    const org = this.orgs.find(org => org.owner_id === phone)

    if(!org) {
      return null
    }

    return org
  }
}


