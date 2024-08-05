import { Module } from '@nestjs/common';
import { PrismaModule } from '../db/prisma.module';
import { UserRepoPrisma } from '../repos/user/user.repo.prisma';
import { UserInjectSymbol } from '../repos/user/user.repo';
import { UserController } from './user.controller';
import { UserServices } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: UserInjectSymbol, useClass: UserRepoPrisma },
    UserServices,
  ],
  controllers: [UserController],
  exports: [UserInjectSymbol],
})
export class UserModule {}
