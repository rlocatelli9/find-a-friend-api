import { FastifyRequest, FastifyReply } from 'fastify'

export default async function Refresh(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    
  await request.jwtVerify({ onlyCookie: true })

  const { role } = request.user

  const token = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
      },
    },
  )

  const refreshToken = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
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

    console.table(error)

    if(error?.statusCode === 401) {
      return reply.status(401).send({
        message: error.message,
      })
    }

    throw error
  }
}