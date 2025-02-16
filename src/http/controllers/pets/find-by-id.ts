import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetPetByIdUseCase } from 'src/factories/make-get-pet-by-id'
import { z } from 'zod'


const PetGetByIdSchema = z
  .object({
    id: z.string().uuid(),
  })

export default async function GetById(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  try {
    const {id} = PetGetByIdSchema.parse(request.params)

    const getPetByIdService = makeGetPetByIdUseCase()

    const {pet} = await getPetByIdService.execute({
      id
    })

    return reply.status(200).send({pet})

  } catch (error) {
    throw error
  }

}
