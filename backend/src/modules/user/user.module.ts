import { Module } from '@nestjs/common'
import { PrismaModule } from '../../database/prisma.module'
import { CustomJwtModule } from '../jwt/jwt.module'
import { UserController } from './user.controller'
import { UserServices } from './user.service'

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [UserServices],
  controllers: [UserController],
})
export class UserModule {}
