import { FastifyRequest, FastifyReply } from 'fastify'
import { PostUncheckedCreateInputObjectSchema } from 'prisma/generated/schemas'
import { makePostRegisterUseCase } from 'src/factories/make-posts-register-use-case'
import { ResourceAlreadyExistsError } from 'src/errors'

export default async function Register(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  try {
    const {title, description, owner_id, pet_id, published_at} = PostUncheckedCreateInputObjectSchema.parse(request.body)

    const registerPostService = makePostRegisterUseCase()

    await registerPostService.execute({
      title, description, owner_id, pet_id, published_at
    })
  } catch (error) {
    if(error instanceof ResourceAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message
      })
    }

    throw error
  }

  return reply.status(201).send()
}
