import { Module } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { CustomJwtModule } from '../jwt/jwt.module'
import { UserModule } from '../user/user.module'
import { UserServices } from '../user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [CustomJwtModule, UserModule],
  providers: [PrismaService, AuthService, UserServices],
  controllers: [AuthController],
})
export class AuthModule {}
