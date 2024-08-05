import { Module } from '@nestjs/common';
import { RecordModule } from './record/record.module';
import { PrismaModule } from './db/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RecordModule, UserModule, PrismaModule],
})
export class AppModule {}
