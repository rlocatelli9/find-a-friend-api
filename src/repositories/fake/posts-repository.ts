import { Org, Pet, Post, Prisma } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { randomUUID } from "crypto";
import { PaginatedPublishedPostsProps } from "src/cases/posts/find-many-published";

export default class PostsFakeRepository implements IPostsRepository{
  private posts: Array<Post & {org?: Org}> = []

  constructor(){}
  async findManyPublished({take=10, skip=0, where}: PaginatedPublishedPostsProps) {
    let city: string = ''
    let uf: string = ''

    if(where?.org?.city && where?.org?.uf) {
      city = where.org.city.toString().toLocaleLowerCase()
      uf = where.org.uf.toString().toLocaleLowerCase()
    }

    if(!city || !uf){
      return {
        data: [],
        meta: {
          totalCount: 0,
          pageCount: 0
        }
      }
    }

    const posts = this.posts.filter((post) => {
        return (post?.org?.city && post?.org?.uf) && !!post.published_at && !post.deleted_at
        && post.org.city.toLocaleLowerCase().includes(city) && post.org.uf.toLocaleLowerCase() === uf
    })

    let startIndex = 0
    if(skip >= posts.length) {
      return {
        data: [],
        meta: {
          totalCount: posts.length,
          pageCount: Math.ceil(posts.length / take)
        }
      }
    }
    if(skip > 0 && skip < posts.length) {
      startIndex = skip
    }
    const endIndex = startIndex + (take - 1)
    const paginatedPosts = posts.slice(startIndex, endIndex) as Post[]

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

  async create(data: Prisma.PostCreateInput ) {
    const post = {
      id          :data.id ?? randomUUID(),
      title       :data.title,
      description :data.description,
      published_at:data.published_at,
      owner_id    :data.org.connect?.id,
      pet_id      :data.pet.connect?.id,
      created_at  : new Date(),
      updated_at  : new Date(),
      deleted_at  : null,
      org         : data?.org.create,
    } as Post

    this.posts.push(post)

    return post
  }

}


