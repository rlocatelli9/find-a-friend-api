import { prisma } from 'src/lib/prisma'
import { Prisma } from '@prisma/client'
import { IUsersRepository } from '../interfaces'

export default class PrismaUsersRepository implements IUsersRepository {
  async create(data: Prisma.UserUncheckedCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where:{
        email,
      },
    })

    if (!user) {
      return null
    }

    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
    })

    if (!user) {
      return null
    }

    return user
  }
}
