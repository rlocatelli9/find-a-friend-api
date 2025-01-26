import { FastifyReply, FastifyRequest } from 'fastify'
import { InvalidActionError } from 'src/errors/invalid-action'

export async function handlerPostagination(request: FastifyRequest, reply: FastifyReply) {

  try {
    const {skip, take, city, uf} = request.query as {skip: string, take: string, uf:string, city: string}

    if(!city || !uf){
      throw new InvalidActionError('You must provide a city and uf')
    }

    request.query = {
      skip: Number(skip),
      take: Number(take),
      where: {
        org: {
          city: {
            contains: city,
            mode: 'insensitive'
          },
          uf: {
            equals: uf,
            mode: 'insensitive'
          },
        }
      },
    }
  } catch (error) {
     if(error instanceof InvalidActionError){
        return reply.status(401).send({
          message: error.message
        })
      }

    throw error
  }
}
