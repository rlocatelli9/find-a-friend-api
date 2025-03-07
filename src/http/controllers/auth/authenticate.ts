import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { InvalidCredentialsError } from 'src/errors/invalid-credentials'
import { makeAuthenticateUseCase } from 'src/factories/make-authenticate-use-case'

export default async function Authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticate = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticate.parse(request.body)

  try {
    const authenticateService = makeAuthenticateUseCase()
    const { user } = await authenticateService.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      },
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: true,
      })
      .status(200)
      .send({
        token,
      })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({
        message: error.message,
      })
    }

    throw error
  }
}
