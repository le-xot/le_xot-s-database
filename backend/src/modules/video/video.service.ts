import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Video } from '@prisma/client';
import { CreateVideoDTO } from '../../common/dtos/video.dto';

@Injectable()
export class VideoServices {
  constructor(private prisma: PrismaService) {}

  async createVideo(video: CreateVideoDTO): Promise<Video> {
    return this.prisma.video.create({
      data: video,
    });
  }

  async deleteVideo(id: number): Promise<void> {
    await this.prisma.video.delete({ where: { id } });
  }

  async getAllVideos(): Promise<Video[]> {
    return this.prisma.video.findMany();
  }

  async findVideoById(id: number): Promise<Video> {
    return this.prisma.video.findUnique({ where: { id } });
  }
}
