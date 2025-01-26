import { Prisma, Post } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { prisma } from "src/lib/prisma";
import { PaginatedPublishedPostsProps, PaginatedPublishedPostsResponse } from "src/cases/posts/find-many-available";

export default class PostsRepository implements IPostsRepository {
  async findManyPublishedAvailable({take=10, skip=0, where}: PaginatedPublishedPostsProps) {

    const query = {
      where: {
        ...where,
        published_at: {
          not: null
        },
        deleted_at: null,
        AND: {
          pet: {
            available: true
          }
        }
      }
    } satisfies Prisma.PostFindManyArgs;

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        where: query.where,
        skip,
        take,
        orderBy: {
          published_at: {
            sort: "desc",
          }
        }
      }),
      prisma.post.count(query)
    ]);

    return {
      data: posts,
      meta: {
        totalCount: count,
        pageCount: Math.ceil(count / take)
      }
    }
  }
  async findByPetId(id: string){
    const post = await prisma.post.findFirst({ where: { pet_id: id } });
    return post
  }

  async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    const post = await prisma.post.create({ data });
    return post
  }
}
