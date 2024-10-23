import { Module } from '@nestjs/common';
import { VideoModule } from './modules/video/video.module';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { PersonModule } from './modules/person/person.module';
import { GameModule } from './modules/game/game.module';

@Module({
  imports: [PersonModule, VideoModule, GameModule, UserModule, PrismaModule],
})
export class AppModule {}
