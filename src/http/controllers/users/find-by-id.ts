import { FastifyRequest, FastifyReply } from 'fastify'
import { makeUserFindByIdUseCase } from 'src/factories/make-find-user-by-id'

export default async function FindById(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  try {
    const {sub} = request.user

    const findUserByIdService = makeUserFindByIdUseCase()

    const {user} = await findUserByIdService.execute({
      id: sub
    })

    return reply.status(200).send({user})

  } catch (error) {
    throw error
  }

}
