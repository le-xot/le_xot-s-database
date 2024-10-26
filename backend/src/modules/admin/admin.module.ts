import { Module } from '@nestjs/common';
import { AdminController } from './admins.controller';
import { CustomJwtModule } from '../jwt/jwt.module';
import { PrismaModule } from '../../database/prisma.module';
import { UserModule } from '../user/user.module';
import { UserServices } from '../user/user.service';

@Module({
  imports: [CustomJwtModule, PrismaModule, UserModule],
  providers: [UserServices],
  controllers: [AdminController],
})
export class AdminsModule {}
