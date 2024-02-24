import { Prisma, TagOnPost } from "@prisma/client";
import { ITagsOnPostsRepository } from "../interfaces";

export default class TagsOnPostsFakeRepository implements ITagsOnPostsRepository{
  private tagsOnPosts: Array<TagOnPost> = []

  constructor(){}

  async create(data: Prisma.TagOnPostUncheckedCreateInput) {
    const tagOnPost = {
      post_id     :data.post_id,
      tag_id      :data.tag_id,
      created_at  : new Date(),
      updated_at  : new Date(),
    } as TagOnPost

    this.tagsOnPosts.push(tagOnPost)

    return tagOnPost
  }

}
