import { Post, Prisma } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { randomUUID } from "crypto";
import { PaginatedPublishedPostsProps } from "src/cases/posts/find-many-available";

export default class PostsFakeRepository implements IPostsRepository{
  private posts: Array<Post> = []

  constructor(){}
  async findManyPublishedAvailable({take=10, skip=0, where}: PaginatedPublishedPostsProps) {
    const posts = this.posts.filter(post => post.published_at && !post.deleted_at)

    const startIndex = take * skip
    const endIndex = startIndex + (take - 1)
    const paginatedPosts = posts.slice(startIndex, endIndex)

    return {
      data: paginatedPosts,
      meta: {
        totalCount: posts.length,
        pageCount: Math.ceil(posts.length / take)
      }
    }
  }
  async findByPetId(id: string) {
    const post = this.posts.find(post => post.pet_id === id)

    if(!post){
      return null
    }

    return post
  }

  async create(data: Prisma.PostUncheckedCreateInput) {
    const post = {
      id          :data.id ?? randomUUID(),
      title       :data.title,
      description :data.description,
      published_at:data.published_at,
      owner_id    :data.owner_id,
      pet_id      :data.pet_id,
      created_at  : new Date(),
      updated_at  : new Date(),
      deleted_at  : null
    } as Post

    this.posts.push(post)

    return post
  }

}


