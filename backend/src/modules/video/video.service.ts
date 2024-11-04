import { Injectable } from '@nestjs/common'
import { Video } from '@prisma/client'
import { PrismaService } from '../../database/prisma.service'
import { CreateVideoDTO, PatchVideoDTO } from './video.dto'

@Injectable()
export class VideoServices {
  constructor(private prisma: PrismaService) {}
  async createVideo(video: CreateVideoDTO): Promise<Video> {
    const foundedPerson = await this.prisma.person.findUnique({
      where: { name: video.personName },
    })

    if (!foundedPerson) {
      throw new Error('Person not found')
    }

    return this.prisma.video.create({
      data: {
        personId: foundedPerson.id,
        title: video.title,
        type: video.type,
        status: video.status,
        genre: video.genre,
        grade: video.grade,
      },
    })
  }

  async patchVideo(
    id: number,
    video: PatchVideoDTO,
  ): Promise<Video> {
    const foundedVideo = await this.prisma.video.findUnique({
      where: { id },
    })
    if (!foundedVideo) {
      throw new Error('Video not found')
    }
    let personId: number
    if (video.personName) {
      const foundedPerson = await this.prisma.person.findUnique({
        where: { name: video.personName },
      })
      if (!foundedPerson) {
        throw new Error('Person not found')
      }
      personId = foundedPerson.id
    }
    return this.prisma.video.update({
      where: { id },
      include: { person: true },
      data: { ...foundedVideo, ...video, personId },
    })
  }

  async deleteVideo(id: number): Promise<void> {
    await this.prisma.video.delete({ where: { id } })
  }

  async getAllVideos(): Promise<Video[]> {
    return this.prisma.video.findMany({ include: { person: true } })
  }

  async findVideoById(id: number): Promise<Video> {
    return this.prisma.video.findUnique({ where: { id } })
  }
}
