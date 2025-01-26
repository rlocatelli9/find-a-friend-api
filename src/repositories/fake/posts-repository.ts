import { Post, Prisma } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { randomUUID } from "crypto";

export default class PostsFakeRepository implements IPostsRepository{
  private posts: Array<Post> = []

  constructor(){}
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


