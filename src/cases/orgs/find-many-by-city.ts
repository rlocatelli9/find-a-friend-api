import { IOrgsRepository, IPetsRepository } from "src/repositories/interfaces"

export type FindManyByCityProps = {
  uf: string;
  city: string;
  page?: number,
  pageSize?: number,
 }

export default class FindManyByCityCase{
  constructor(private orgsRepository: IOrgsRepository){}

  async execute({
    city,
    uf,
    page,
    pageSize
  }: FindManyByCityProps) {

    const orgs = await this.orgsRepository.findManyByCity({uf, city, page, pageSize});

    return {
      orgs
    }
  }

}
