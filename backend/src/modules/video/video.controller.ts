import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VideoServices } from './video.service';
import { CreateVideoDTO } from '../../common/dtos/video.dto';
import { Video } from '@prisma/client'; // Используем типы Prisma

@ApiTags('videos')
@Controller('videos')
export class VideoController {
  constructor(private videoServices: VideoServices) {}

  @Post('create')
  async createVideo(@Body() video: CreateVideoDTO): Promise<void> {
    await this.videoServices.createVideo(video);
  }

  @Get(':id')
  async findVideoById(@Param('id') id: string): Promise<Video> {
    return await this.videoServices.findVideoById(parseInt(id));
  }

  @Delete(':id')
  async deleteVideo(@Param('id') id: string): Promise<void> {
    await this.videoServices.deleteVideo(parseInt(id));
  }

  @Get()
  async getAllVideos(): Promise<Video[]> {
    return await this.videoServices.getAllVideos();
  }
}
