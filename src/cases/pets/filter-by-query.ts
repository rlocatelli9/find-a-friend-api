import { Pet } from "@prisma/client"
import { PetFindManySchema } from "prisma/generated/schemas"
import { IPetsRepository, PaginationMetaProps } from "src/repositories/interfaces"
import { z } from "zod"

export type FilterByQueryPetProps = z.infer<typeof PetFindManySchema>

export type PaginatedPublishedPetsResponse = {
  data: Pet[]
  meta: PaginationMetaProps
}

export default class FilterByQueryPetCase{
  constructor(private petsRepository: IPetsRepository){}

  async execute({
    take,
    skip,
    where
  }: FilterByQueryPetProps) {

    const data = await this.petsRepository.findManyByQuery({take, skip, where})

    return data

  }

}
