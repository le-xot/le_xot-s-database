import { Module } from '@nestjs/common';
import { RecordModule } from './record/record.module';
import { PrismaModule } from './db/prisma.module';

@Module({
  imports: [RecordModule, PrismaModule],
})
export class AppModule {}
