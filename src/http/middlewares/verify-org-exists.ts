import { FastifyReply, FastifyRequest } from 'fastify'
import { ResourceNotFoundError } from 'src/errors'
import { makeFindOrgByIdUseCase } from 'src/factories/make-orgs-find-by-id-use-case'
import { z } from 'zod'

const organizationIdBodySchema = z.object({
  owner_id: z.string().uuid()
})

export async function verifyOrgExists(request: FastifyRequest, reply: FastifyReply) {

  try {

    const {owner_id} = organizationIdBodySchema.parse(request.body)

    const findOrgByIdService = makeFindOrgByIdUseCase()
    const {org} = await findOrgByIdService.execute({id: owner_id})

    if(!org){
      throw new ResourceNotFoundError('Organization is not found')
    }
  } catch (error) {
    if(error instanceof ResourceNotFoundError){
      return reply.status(401).send({
        message: error.message
      })
    }

    if(error instanceof z.ZodError){
      throw error
    }

    return reply.status(400).send({
      message: 'Bad request'
    })
  }
}
