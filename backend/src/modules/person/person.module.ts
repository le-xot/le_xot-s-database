import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { PersonServices } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [PrismaModule],
  providers: [PersonServices],
  controllers: [PersonController],
})
export class PersonModule {}
