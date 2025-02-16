import { beforeEach, describe, expect, it } from 'vitest'
import FindManyAvailablePostCase from './find-many-published'
import PostsFakeRepository from 'src/repositories/fake/posts-repository'

let postFakeRepository: PostsFakeRepository
let sut: FindManyAvailablePostCase

describe('Find many published post case', () => {

  beforeEach(() => {
    postFakeRepository = new PostsFakeRepository()
    sut = new FindManyAvailablePostCase(postFakeRepository)
  })

  it("should be able to filter post by city and uf", async () => {
    await postFakeRepository.create({
      title: 'Adoção de Pet',
      description: 'Pet muito fofo',
      org: {
        create: {
          id: 'org-fake-id',
          cnpj: "65.664.734/0001-10",
          name: "Organização Tabajara",
          owner_id: 'user_1',
          phone: '084999999999',
          city: 'Fortaleza',
          uf: 'CE',
          complement: 'Rua número zero',
          country: 'Brasil',
          zip_code: '60055888',
          latitude: -3.7380798,
          longitude: -38.5071317
        },
        connect: {
          id:'org-fake-id'
        }
      },
      pet: {
        connect:{
          id: 'pet-fake-id'
        }
      },
      published_at: new Date(),
    })

    const { data, meta } = await sut.execute({
      where:{
        org: {
          city: 'fortal',
          uf: 'ce'
        }
      }
    })

    expect(data).toHaveLength(1)

    expect(data).toEqual([
      expect.objectContaining({
        title: 'Adoção de Pet',
        owner_id: 'org-fake-id',
        pet_id: 'pet-fake-id',
      })
    ])

    expect(meta).toEqual(
      expect.objectContaining({
        totalCount: 1,
        pageCount: 1
      })
    )
  })

  it("should be able to paginated filter post by city and uf", async () => {
      for (let index = 0; index < 11; index++) {
        await postFakeRepository.create({
          title: `Adoção de Pet ${index + 1}`,
          description: 'Pet muito fofo',
          org: {
            create: {
              id: 'org-fake-id',
              cnpj: "65.664.734/0001-10",
              name: "Organização Tabajara",
              owner_id: 'user_1',
              phone: '084999999999',
              city: 'Fortaleza',
              uf: 'CE',
              complement: 'Rua número zero',
              country: 'Brasil',
              zip_code: '60055888',
              latitude: -3.7380798,
              longitude: -38.5071317
            },
            connect: {
              id:'org-fake-id'
            }
          },
          pet: {
            connect:{
              id: `pet-fake-id-${index+1}`
            }
          },
          published_at: new Date(),
        })
      }

      const {data, meta} = await sut.execute({
        where:{
          org: {
            city: 'fortal',
            uf: 'ce'
          }
        }, skip: 10, take: 10})

        expect(data).toHaveLength(1)

        expect(data).toEqual([
          expect.objectContaining({
            title: 'Adoção de Pet 11',
            owner_id: 'org-fake-id',
            pet_id: 'pet-fake-id-11',
          })
        ])

        expect(meta).toEqual(
          expect.objectContaining({
            totalCount: 11,
            pageCount: 2
          })
        )
    })
})
