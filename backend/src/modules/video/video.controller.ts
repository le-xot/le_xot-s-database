import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { PrismaRoles, Video } from '@prisma/client'
import { AuthGuard } from '../auth/auth.guard'
import { RolesGuard } from '../auth/auth.roles.guard'
import { CreateVideoDTO, PatchVideoDTO } from './video.dto'
import { VideoEntity } from './video.entity'
import { VideoServices } from './video.service'

@ApiTags('videos')
@Controller('videos')
export class VideoController {
  constructor(private videoServices: VideoServices) {}

  @Post()
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async createVideo(@Body() video: CreateVideoDTO): Promise<Video> {
    return this.videoServices.createVideo(video)
  }

  @Get(':id')
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async findVideoById(@Param('id', ParseIntPipe) id: number): Promise<Video> {
    return await this.videoServices.findVideoById(id)
  }

  @Patch(':id')
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async patchVideo(
    @Param('id', ParseIntPipe) id: number,
    @Body() video: PatchVideoDTO,
  ): Promise<Video> {
    return this.videoServices.patchVideo(id, video)
  }

  @Delete(':id')
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async deleteVideo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.videoServices.deleteVideo(id)
  }

  @Get()
  @ApiResponse({ status: 200, type: VideoEntity, isArray: true })
  async getAllVideos(): Promise<Video[]> {
    return await this.videoServices.getAllVideos()
  }
}
