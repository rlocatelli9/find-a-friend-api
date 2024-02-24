import { Address, Org, Pet, Prisma, User } from "@prisma/client";

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findByOwnerId(ownerId: string): Promise<Pet | null>
}

export interface IOrgsRepository {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>
  findByOwnerId(ownerId: string): Promise<Org | null>
  findByPhone(phone: string): Promise<Org | null>
}

export interface IAddressesRepository {
  create(data: Prisma.AddressUncheckedCreateInput): Promise<Address>
  findByOrgId(orgId: string): Promise<Address | null>
}
