import { Inject, Injectable } from '@nestjs/common';
import { VideoInjectSymbol, VideoRepo } from './video.repo';
import { VideoEntity } from './video.entity';
import { CreateVideoDTO } from '../../common/dtos/video.dto';

@Injectable()
export class VideoServices {
  constructor(@Inject(VideoInjectSymbol) private recordRepo: VideoRepo) {}

  async createVideo(video: CreateVideoDTO): Promise<VideoEntity> {
    return await this.recordRepo.createVideo(video);
  }

  async deleteVideo(id: number): Promise<void> {
    await this.recordRepo.deleteVideo(id);
  }

  async getAllVideos(): Promise<VideoEntity[]> {
    return await this.recordRepo.getAllVideos();
  }

  async findVideoById(id: number): Promise<VideoEntity> {
    return await this.recordRepo.findVideoById(id);
  }
}
