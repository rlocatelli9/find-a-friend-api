import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from 'src/errors/user-already-exists'
import { makeUserRegisterUseCase } from 'src/factories/make-user-register-use-case'
import { Role } from '@prisma/client'

export default async function Register(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.nativeEnum(Role).default('ORG'),
  })

  const { name, email, password, role } = registerBodySchema.parse(request.body)

  try {
    const registerUserService = makeUserRegisterUseCase()

    await registerUserService.execute({
      name,
      email,
      password,
      role,
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
