import { Injectable } from '@nestjs/common'
import { Video } from '@prisma/client'
import { PrismaService } from '../../database/prisma.service'
import { CreateVideoDTO, PatchVideoDTO } from './video.dto'

@Injectable()
export class VideoServices {
  constructor(private prisma: PrismaService) {}

  async createVideo(video: CreateVideoDTO): Promise<Video> {
    return this.prisma.video.create({
      data: video,
    })
  }

  async patchVideo(id: number, video: PatchVideoDTO): Promise<Video> {
    return this.prisma.video.update({
      where: { id },
      include: { person: true },
      data: video,
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
