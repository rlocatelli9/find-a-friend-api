import { FastifyRequest, FastifyReply } from 'fastify'
import { UserAlreadyExistsError } from 'src/errors/user-already-exists'
import { PetUncheckedCreateInputObjectSchema } from 'prisma/generated/schemas'
import { makePetRegisterUseCase } from 'src/factories/make-pets-register-use-case'

export default async function Register(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  try {
    const {age, description, name, energy, race, size, type,deficiencies, owner_id } = PetUncheckedCreateInputObjectSchema.parse(request.body)
    const registerPetService = makePetRegisterUseCase()

    await registerPetService.execute({
      age, description, name, energy, race, size, type, deficiencies, owner_id
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      })
    }

    throw error
  }

  return reply.status(201).send()
}
