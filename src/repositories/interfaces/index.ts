import { Pet, Prisma, User } from "@prisma/client";

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findByOwnerId(ownerId: string): Promise<Pet | null>
}
