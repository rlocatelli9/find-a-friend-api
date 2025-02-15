import { Post } from "@prisma/client";
import { PostFindManySchema } from "prisma/generated/schemas";
import { IPostsRepository, PaginationMetaProps } from "src/repositories/interfaces";
import { z } from "zod";

export type PaginatedPublishedPostsProps = z.infer<typeof PostFindManySchema>

export type PaginatedPublishedPostsResponse = {
  data: Post[]
  meta: PaginationMetaProps
}

export default class PublishedPostCase {
  constructor(private postsRepository: IPostsRepository){}

  async execute({
    take,
    skip,
    where
  }: PaginatedPublishedPostsProps){

    const posts = await this.postsRepository.findManyPublished({take, skip, where})

    return posts

  }
}
