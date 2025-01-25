import { Prisma, Tag } from "@prisma/client";
import { ITagsRepository } from "../interfaces";
import { prisma } from "src/lib/prisma";

export default class TagsRepository implements ITagsRepository{
  async create(data: Prisma.TagUncheckedCreateInput): Promise<Tag> {
    const tag = await prisma.tag.create({ data });
    return tag
  }
}
