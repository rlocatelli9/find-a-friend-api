import { Org, Pet, Post, Prisma, Size, Tag, TagOnPost, Type, User } from "@prisma/client";
import { FindManyByCityProps } from "src/cases/orgs/find-many-by-city";
import { FilterByQueryPetProps } from "src/cases/pets/filter-by-query";

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findById(petId: string): Promise<Pet | null>
  findManyByQuery({query, page, pageSize}:FilterByQueryPetProps): Promise<Pet[]>
  findByOwnerId(ownerId: string): Promise<Pet | null>
}

export interface IOrgsRepository {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>
  findById(id: string): Promise<Org | null>
  findByOwnerId(ownerId: string): Promise<Org | null>
  findByPhone(phone: string): Promise<Org | null>
  findManyByCity({city, uf, page, pageSize}:FindManyByCityProps): Promise<Org[]>
}

export interface IPostsRepository {
  create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
  findByPetId(id: string): Promise<Post | null>
}

export interface ITagsRepository {
  create(data: Prisma.TagUncheckedCreateInput): Promise<Tag>
}

export interface ITagsOnPostsRepository {
  create(data: Prisma.TagOnPostUncheckedCreateInput): Promise<TagOnPost>
}

export type PetQueryProps = {
  type: Type,
  age: string,
  energy: string,
  size: Size
}
