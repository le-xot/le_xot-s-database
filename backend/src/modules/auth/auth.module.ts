import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CustomJwtModule } from '../jwt/jwt.module';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../../database/prisma.service';
import { AuthService } from './auth.service';
import { UserServices } from '../user/user.service';

@Module({
  imports: [CustomJwtModule, UserModule],
  providers: [PrismaService, AuthService, UserServices],
  controllers: [AuthController],
})
export class AuthModule {}
