import { Prisma, Pet } from "@prisma/client";
import { FilterByQueryPetProps } from "src/cases/pets/filter-by-query";
import { IPetsRepository, PetQueryProps } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class PetsRepository implements IPetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
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
  async findManyByQuery({ query, page=1, pageSize=10 }: FilterByQueryPetProps): Promise<Pet[]> {
    const splitedQuery = query.split(';')

    const skip = (page - 1) * pageSize
    const take = pageSize

    if(splitedQuery?.length){
      let fields = {} as PetQueryProps

      splitedQuery.forEach(query => {
        const [key, value] = query.split('=')
        const item = {
          [key]: value
        }
        fields = {...fields, ...item}
      })

      const {age, energy, size,type } = fields;

      // Start building the `where` clause
      const where = {} as { [key: string]: any }

      if (type) {
        where.type = {
          contains: type,
          mode: 'insensitive', // Optional: case-insensitive search
        };
      }

      if (age) {
        where.age = {
          contains: Number(age),
        };
      }

      if (energy) {
        where.energy  = {
          contains: energy,
          mode: 'insensitive', // Optional: case-insensitive search
        };
      }

      if (size) {
        where.size = {
          contains: size,
          mode: 'insensitive', // Optional: case-insensitive search
        };
      }

      // if (createdAfter) {
      //   where.createdAt = {
      //     gt: new Date(createdAfter), // Filter posts created after the given date
      //   };
      // }

      const pets = await prisma.pet.findMany({
        where,
        orderBy:{created_at: 'desc'},
        skip,
        take,
      })

      return pets
    } else {

      const pets = await prisma.pet.findMany({
        where: {
          available: true
        },
        orderBy:{created_at: 'desc'},
        skip,
        take,
      })
      return  pets
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
