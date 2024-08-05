import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { UserRepoPrisma } from './user.repo.prisma';
import { UserInjectSymbol } from './user.repo';
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
