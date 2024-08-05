import { Module } from '@nestjs/common';
import { RecordModule } from './modules/record/record.module';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [RecordModule, UserModule, PrismaModule],
})
export class AppModule {}
