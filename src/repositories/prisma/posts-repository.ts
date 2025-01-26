import { Prisma, Post } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class PostsRepository implements IPostsRepository {
  async findByPetId(id: string){
    const post = await prisma.post.findFirst({ where: { pet_id: id } });
    return post
  }

  async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    const post = await prisma.post.create({ data });
    return post
  }
}
