import { Org, Pet, Post, Prisma, Tag, TagOnPost, User } from "@prisma/client";
import { FilterByQueryPetProps } from "src/cases/pets/filter-by-query";

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}

export interface IPetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findById(petId: string): Promise<Pet | null>
  findManyByQuery({query, page, pageSize}:FilterByQueryPetProps): Promise<Pet[]>
  findByOwnerId(ownerId: string): Promise<Pet | null>
}

export interface IOrgsRepository {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>
  findByOwnerId(ownerId: string): Promise<Org | null>
  findByPhone(phone: string): Promise<Org | null>
}

export interface IPostsRepository {
  create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
}

export interface ITagsRepository {
  create(data: Prisma.TagUncheckedCreateInput): Promise<Tag>
}

export interface ITagsOnPostsRepository {
  create(data: Prisma.TagOnPostUncheckedCreateInput): Promise<TagOnPost>
}
