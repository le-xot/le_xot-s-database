import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { UserController } from './user.controller';
import { UserServices } from './user.service';
import { CustomJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [UserServices],
  controllers: [UserController],
})
export class UserModule {}
