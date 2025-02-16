import { Prisma, Pet } from "@prisma/client";
import { FilterByQueryPetProps, PaginatedPublishedPetsResponse } from "src/cases/pets/filter-by-query";
import { IPetsRepository, PetQueryProps } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class PetsRepository implements IPetsRepository {
  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data
    })

    return pet
  }
  async findById(petId: string): Promise<Pet | null> {
    const pet = await prisma.pet.findFirst({
      where: {
        id: petId
      }
    })

    return pet
  }

  async findManyByQuery({ where, skip=0, take=10 }: FilterByQueryPetProps): Promise<PaginatedPublishedPetsResponse> {
    const query = {
      where: {
        ...where,
        available: true,
        deleted_at: null,
        AND: {
          org: {
            deleted_at: null,
          }
        }
      }
    } satisfies Prisma.PetFindManyArgs;

    const [pets, count] = await prisma.$transaction([
      prisma.pet.findMany({
        where: query.where,
        skip,
        take,
        orderBy: {
          created_at: 'desc'
        }
      }),
      prisma.pet.count(query)
    ]);

    return {
      data: pets,
      meta: {
        totalCount: count,
        pageCount: Math.ceil(count / take)
      }
    }
  }
  async findByOwnerId(ownerId: string): Promise<Pet | null> {
    const pet = await prisma.pet.findFirst({
      where: {
        owner_id: ownerId
      }
    })

    return pet
  }
}
