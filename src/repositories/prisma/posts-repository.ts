import { Prisma, Post } from "@prisma/client";
import { IPostsRepository } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class PostsRepository implements IPostsRepository {
  async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    const post = await prisma.post.create({ data });
    return post
  }
}
