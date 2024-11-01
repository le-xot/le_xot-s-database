import { Module } from '@nestjs/common'
import { PrismaModule } from '../../database/prisma.module'
import { CustomJwtModule } from '../jwt/jwt.module'
import { UserModule } from '../user/user.module'
import { UserServices } from '../user/user.service'
import { AdminController } from './admins.controller'

@Module({
  imports: [CustomJwtModule, PrismaModule, UserModule],
  providers: [UserServices],
  controllers: [AdminController],
})
export class AdminsModule {}
