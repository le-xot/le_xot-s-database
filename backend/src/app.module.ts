import { Module } from '@nestjs/common';
import { VideoModule } from './modules/video/video.module';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [PersonModule, VideoModule, UserModule, PrismaModule],
})
export class AppModule {}
