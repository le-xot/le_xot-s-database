import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { VideoController } from './video.controller';
import { VideoInjectSymbol } from './video.repo';
import { VideoRepoPrisma } from './video.repo.prisma';
import { VideoServices } from './video.service';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: VideoInjectSymbol, useClass: VideoRepoPrisma },
    VideoServices,
  ],
  controllers: [VideoController],
  exports: [VideoInjectSymbol],
})
export class VideoModule {}
