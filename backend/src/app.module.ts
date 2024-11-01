import { Module } from '@nestjs/common'
import { PrismaModule } from './database/prisma.module'
import { AdminsModule } from './modules/admin/admin.module'
import { AuthModule } from './modules/auth/auth.module'
import { GameModule } from './modules/game/game.module'
import { PersonModule } from './modules/person/person.module'
import { UserModule } from './modules/user/user.module'
import { VideoModule } from './modules/video/video.module'

@Module({
  imports: [
    AuthModule,
    AdminsModule,
    PersonModule,
    VideoModule,
    GameModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
