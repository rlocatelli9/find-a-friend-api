import { FastifyRequest, FastifyReply } from 'fastify'
import { PostFindManySchema } from 'prisma/generated/schemas'
import { makePostPublishedUseCase } from 'src/factories/make-find-posts-published-use-case'

export default async function FindManyPublished(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  try {
    const {take, skip, where} = PostFindManySchema.parse(request.query)

    const postPublishedService = makePostPublishedUseCase()

    const {data, meta} = await postPublishedService.execute({
      take, skip, where
    })

    return reply.status(200).send({data, meta})

  } catch (error) {
    throw error
  }

}
