import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { PersonServices } from './person.service';
import { PersonController } from './person.controller';
import { CustomJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [PersonServices],
  controllers: [PersonController],
})
export class PersonModule {}
