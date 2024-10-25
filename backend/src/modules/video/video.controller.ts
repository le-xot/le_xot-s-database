import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideoServices } from './video.service';
import { CreateVideoDTO, PatchVideoDTO } from './video.dto';
import { Video } from '@prisma/client';
import { VideoEntity } from './video.entity';

@ApiTags('videos')
@Controller('videos')
export class VideoController {
  constructor(private videoServices: VideoServices) {}

  @Post()
  async createVideo(@Body() video: CreateVideoDTO): Promise<void> {
    await this.videoServices.createVideo(video);
  }

  @Get(':id')
  async findVideoById(@Param('id', ParseIntPipe) id: number): Promise<Video> {
    return await this.videoServices.findVideoById(id);
  }

  @Patch(':id')
  async patchVideo(
    @Param('id', ParseIntPipe) id: number,
    @Body() video: PatchVideoDTO,
  ): Promise<Video> {
    return await this.videoServices.patchVideo(id, video);
  }

  @Delete(':id')
  async deleteVideo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.videoServices.deleteVideo(id);
  }

  @Get()
  @ApiResponse({ status: 200, type: VideoEntity, isArray: true })
  async getAllVideos(): Promise<Video[]> {
    return await this.videoServices.getAllVideos();
  }
}
