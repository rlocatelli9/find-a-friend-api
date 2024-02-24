import { ITagsOnPostsRepository } from "src/repositories/interfaces";

export interface TagOnPostProps {
  post_id    :string
  tag_id     :string
}

export default class RegisterTagOnPostCase {
  constructor(private tagsOnPostsRepository: ITagsOnPostsRepository){}

  async execute({
    post_id,
    tag_id
  }: TagOnPostProps){

    const tagsOnPosts = await this.tagsOnPostsRepository.create({
      post_id,
      tag_id,
    })

    return {
      tagsOnPosts
    }
  }
}
