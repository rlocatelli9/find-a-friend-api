import { ITagsRepository } from "src/repositories/interfaces";

export interface TagProps {
  value   :string
  owner_id:string
}

export default class RegisterTagCase {
  constructor(private tagsRepository: ITagsRepository){}

  async execute({
    value,
    owner_id,
  }: TagProps){

    const tag = await this.tagsRepository.create({
      value,
      owner_id
    })

    return {
      tag
    }
  }
}
