import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from 'src/errors/user-already-exists'
import { makeUserRegisterUseCase } from 'src/factories/make-user-register-use-case'
import { makeOrgRegisterUseCase } from 'src/factories/make-orgs-register-use-case'

const registerBodySchema = z.object({
  name: z.string(),
  phone: z.string(),
  cnpj: z.string(),
  uf: z.string(),
  city: z.string(),
  complement: z.string(),
  country: z.string(),
  zip_code: z.string(),
  latitude: z.number().refine((value) => {
    return Math.abs(value) <= 90
  }),
  longitude: z.number().refine((value) => {
    return Math.abs(value) <= 180
  }),
})

export type RegisterUserSchema = z.infer<typeof registerBodySchema>;

export default async function Register(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const {city, cnpj, complement, country, latitude, longitude, name, phone, uf, zip_code} = registerBodySchema.parse(request.body)

  try {
    const registerOrgService = makeOrgRegisterUseCase()

    await registerOrgService.execute({
      name,
      phone,
      cnpj,
      address: {
        city,
        complement,
        country,
        latitude,
        longitude,
        uf,
        zip_code,
      },
      owner_id: request.user.sub,
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
