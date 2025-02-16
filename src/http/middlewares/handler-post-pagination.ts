import { Prisma, Size, Type } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { InvalidActionError } from 'src/errors/invalid-action'
import { i } from 'vitest/dist/reporters-1evA5lom'

export type PostRequestQueryProps = {
  skip: string
  take: string
  uf:string
  city: string
  type?:Type
  age?:string
  energy?: string
  size?:Size
}
export async function handlerPostagination(request: FastifyRequest, reply: FastifyReply) {

  try {
    const {skip, take, city, uf, type, size, age, energy} = request.query as PostRequestQueryProps

    if(!city || !uf){
      throw new InvalidActionError('You must provide a city and uf')
    }

    let pet:Prisma.PetWhereInput = {}

    if(type) {
      pet.type = {
        equals: type,
      }
    }

    if(energy){
      pet.energy = {
        lte: Number(energy),
      }
    }
    if(age){
      pet.age = {
        lte: Number(age)
      }
    }
    if(size) {
      pet.size = {
        equals: size
      }
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
        },
        pet,
      },
    } satisfies Prisma.PostFindManyArgs
  } catch (error) {
     if(error instanceof InvalidActionError){
        return reply.status(401).send({
          message: error.message
        })
      }

    throw error
  }
}
