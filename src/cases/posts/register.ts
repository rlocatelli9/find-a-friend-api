import { PostUncheckedCreateInputObjectSchema } from "prisma/generated/schemas";
import { ResourceAlreadyExistsError, ResourceNotFoundError } from "src/errors";
import { IOrgsRepository, IPetsRepository, IPostsRepository } from "src/repositories/interfaces";
import { z } from "zod";

export type PostProps = z.infer<typeof PostUncheckedCreateInputObjectSchema>

export default class RegisterPostCase {
  constructor(
    private postsRepository: IPostsRepository,
    private orgsRepository: IOrgsRepository,
    private petsRepository: IPetsRepository
  ){}

  async execute({
    title,
    description,
    owner_id,
    pet_id,
    published_at,
  }: PostProps){

    const org = await this.orgsRepository.findById(owner_id)

    if(!org) {
      throw new ResourceNotFoundError('The Org is not exists')
    }

    const pet = await this.petsRepository.findById(pet_id)

    if(!pet) {
      throw new ResourceNotFoundError('The Pet is not exists')
    }

    if(!pet.available) {
      throw new ResourceNotFoundError('The Pet is not available to donation')
    }

    const postExists = await this.postsRepository.findByPetId(pet_id)

    if(postExists){
      throw new ResourceAlreadyExistsError('The Post with Pet already exists')
    }

    const post = await this.postsRepository.create({
      title,
      description,
      published_at,
      org: {
        connect: {
          id: org.id
        }
      },
      pet: {
        connect: {
          id: pet.id
        }
      },
    })

    return {
      post
    }

  }
}
