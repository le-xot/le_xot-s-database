import { Injectable } from '@nestjs/common'
import { Video } from '@prisma/client'
import { PrismaService } from '../../database/prisma.service'
import { CreateVideoDTO, PatchVideoDTO } from './video.dto'
import { VideoEntity } from './video.entity'

@Injectable()
export class VideoServices {
  constructor(private prisma: PrismaService) {}
  async createVideo(video: CreateVideoDTO): Promise<VideoEntity> {
    return this.prisma.video.create({
      data:
        video,
      include: {
        person: true,
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
    return this.prisma.video.update({
      where: { id },
      include: { person: true },
      data: { ...foundedVideo, ...video },
    })
  }

  async deleteVideo(id: number): Promise<void> {
    await this.prisma.video.delete({ where: { id } })
  }

  async getAllVideos(): Promise<VideoEntity[]> {
    return this.prisma.video.findMany({
      include: { person: true },
      orderBy: {
        id: 'desc',
      },
    })
  }

  async findVideoById(id: number): Promise<VideoEntity> {
    return this.prisma.video.findUnique({ where: { id }, include: { person: true } })
  }
}
