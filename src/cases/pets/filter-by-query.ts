import { IPetsRepository } from "src/repositories/interfaces"

export interface FilterByQueryPetProps {
  page?: number,
  pageSize?: number,
  query: string,
}

export default class FilterByQueryPetCase{
  constructor(private petsRepository: IPetsRepository){}

  async execute({
    page,
    pageSize,
    query
  }: FilterByQueryPetProps) {

    const pets = await this.petsRepository.findManyByQuery({page, pageSize, query})

    return {
      pets
    }
  }

}
