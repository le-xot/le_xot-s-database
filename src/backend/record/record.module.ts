import { Module } from '@nestjs/common';
import { PrismaModule } from '../db/prisma.module';
import { RecordController } from './record.controller';
import { RecordInjectSymbol } from '../repositories/record.repository';
import { RecordRepositoryPrisma } from '../repositories/record.repository.prisma';
import { RecordServices } from './record.service';

@Module({
  imports: [PrismaModule],
  providers: [
    { provide: RecordInjectSymbol, useClass: RecordRepositoryPrisma },
    RecordServices,
  ],
  controllers: [RecordController],
  exports: [RecordInjectSymbol],
})
export class RecordModule {}
