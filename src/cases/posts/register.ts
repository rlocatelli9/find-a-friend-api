import { IPostsRepository } from "src/repositories/interfaces";

export interface PostProps {
  title        :string
  description  :string
  owner_id     :string
  pet_id       :string
  published_at :Date
}

export default class RegisterPostCase {
  constructor(private postsRepository: IPostsRepository){}

  async execute({
    title,
    description,
    owner_id,
    pet_id,
    published_at,
  }: PostProps){

    const post = await this.postsRepository.create({
      title,
      description,
      owner_id,
      pet_id,
      published_at,
    })

    return {
      post
    }

  }
}
