import { Injectable } from '@nestjs/common';
import { VideoRepo } from './video.repo';
import { PrismaService } from '../../database/prisma.service';
import { VideoEntity } from './video.entity';
import { Person, Video } from '@prisma/client';
import { Genres, Grades, Statuses, Types } from '../../common/enums/video.enum';

@Injectable()
export class VideoRepoPrisma implements VideoRepo {
  constructor(private prisma: PrismaService) {}

  private convertVideo(video: Video & { person: Person }): VideoEntity {
    return {
      ...video,
      person: video.person.name,
      personId: video.personId,
      type: Types[video.type],
      status: Statuses[video.status],
      genre: Genres[video.genre],
      grade: Grades[video.grade],
    };
  }

  async createVideo(
    video: Omit<VideoEntity, 'id' | 'person'>,
  ): Promise<VideoEntity> {
    const newVideo = await this.prisma.video.create({
      data: video,
      include: { person: true },
    });
    return this.convertVideo(newVideo);
  }

  async deleteVideo(id: number): Promise<void> {
    await this.prisma.video.delete({ where: { id } });
  }

  async getAllVideos(): Promise<VideoEntity[]> {
    const records = await this.prisma.video.findMany({
      include: { person: true },
    });
    return records.map((record) => this.convertVideo(record));
  }

  // async patchVideo(
  //   id: number,
  //   title?: string,
  //   personId?: number,
  //   type?: Types,
  //   status?: Statuses,
  //   genre?: Genres,
  //   grade?: Grades,
  // ): Promise<VideoEntity> {
  //   const video = await this.prisma.video.update({
  //     where: { id },
  //     include: { person: true },
  //     data: {
  //       title,
  //       person: { connect: { id: personId } },
  //       type,
  //       status,
  //       genre,
  //       grade,
  //     },
  //   });
  //   return this.convertVideo(video);
  // }

  async findVideoById(id: number): Promise<VideoEntity> {
    const video = await this.prisma.video.findUnique({
      where: { id },
      include: { person: true },
    });
    if (!video) {
      return;
    }
    return this.convertVideo(video);
  }
}
