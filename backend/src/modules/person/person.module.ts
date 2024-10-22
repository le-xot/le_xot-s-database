import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { PersonInjectSymbol } from './person.repo';
import { PersonRepoPrisma } from './person.repo.prisma';
import { PersonServices } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: PersonInjectSymbol, useClass: PersonRepoPrisma },
    PersonServices,
  ],
  controllers: [PersonController],
  exports: [PersonInjectSymbol],
})
export class PersonModule {}
