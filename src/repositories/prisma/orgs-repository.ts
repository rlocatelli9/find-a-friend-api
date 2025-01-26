import { Prisma, Org } from "@prisma/client";
import { FindManyByCityProps } from "src/cases/orgs/find-many-by-city";
import { IOrgsRepository } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class OrgsRepository implements IOrgsRepository{
  async findById(id: string): Promise<Org | null> {
    const org = await prisma.org.findUnique({
      where: {
        id
      }
    })

    return org
  }
  async create(data: Prisma.OrgUncheckedCreateInput): Promise<Org> {
    const org = await prisma.org.create({
      data
    })

    return org
  }
  async findByOwnerId(ownerId: string): Promise<Org | null> {
    const org = await prisma.org.findFirst({
      where: {
        owner_id: ownerId
      }
    })

    return org
  }
  async findByPhone(phone: string): Promise<Org | null> {
    const org = await prisma.org.findFirst({
      where: {
        phone
      }
    })

    return org
  }
  async findManyByCity({ city, uf, page=1, pageSize=10 }: FindManyByCityProps): Promise<Org[]> {
    const orgs = await prisma.org.findMany({
      where: {
        city,
        uf
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    return orgs
  }

}
