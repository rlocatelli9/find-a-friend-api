import { Prisma, Tag } from "@prisma/client";
import { ITagsRepository } from "../interfaces";
import { randomUUID } from "crypto";

export default class TagsFakeRepository implements ITagsRepository{
  private tags: Array<Tag> = []

  constructor(){}

  async create(data: Prisma.TagUncheckedCreateInput) {
    const tag = {
      id          :data.id ?? randomUUID(),
      owner_id    :data.owner_id,
      value       :data.value
    } as Tag

    this.tags.push(tag)

    return tag
  }

}
