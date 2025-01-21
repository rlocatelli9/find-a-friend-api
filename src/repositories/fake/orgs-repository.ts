import { Org, Prisma } from "@prisma/client";
import { IOrgsRepository } from "../interfaces"
import { randomUUID } from "crypto";
import { FindManyByCityProps } from "src/cases/orgs/find-many-by-city";

export default class OrgsFakeRepository implements IOrgsRepository{
  private orgs: Array<Org> = []

  constructor(){}
  async findManyByCity({ uf, city, page=1, pageSize=10 }:FindManyByCityProps ){
    const orgs = this.orgs.filter(org => (org.uf === uf && org.city === city))

    let pageValue = page
    if (page < 1) {
      pageValue = 1
    }
    const totalPages = Math.ceil(orgs.length / pageSize)
    if (pageValue > totalPages) pageValue = totalPages;

    const pagenatedOrgs = []

    for (var i = (pageValue-1) * pageSize; i < (pageValue * pageSize) && i < orgs.length; i+=1) {
      pagenatedOrgs.push(orgs[i])
    }

    return pagenatedOrgs
  }


  async create(data: Prisma.OrgUncheckedCreateInput) {
    const org = {
      id          :data.id ?? randomUUID(),
      name        :data.name,
      cnpj        :data.cnpj,
      owner_id    :data.owner_id,
      phone       :data.phone,
      city        :data.city,
      uf          :data.uf,
      complement  :data.complement,
      country     :data.country,
      zip_code    :data.zip_code,
      latitude    :data.latitude,
      longitude   :data.longitude,
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
