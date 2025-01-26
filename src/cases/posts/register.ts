import { PostUncheckedCreateInputObjectSchema } from "prisma/generated/schemas";
import { ResourceAlreadyExistsError } from "src/errors";
import { IPostsRepository } from "src/repositories/interfaces";
import { z } from "zod";

export type PostProps = z.infer<typeof PostUncheckedCreateInputObjectSchema>

export default class RegisterPostCase {
  constructor(private postsRepository: IPostsRepository){}

  async execute({
    title,
    description,
    owner_id,
    pet_id,
    published_at,
  }: PostProps){

    const postExists = await this.postsRepository.findByPetId(pet_id)

    if(postExists){
      throw new ResourceAlreadyExistsError('The Post with Pet already exists')
    }

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
