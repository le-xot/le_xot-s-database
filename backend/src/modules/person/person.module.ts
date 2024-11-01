import { Module } from '@nestjs/common'
import { PrismaModule } from '../../database/prisma.module'
import { CustomJwtModule } from '../jwt/jwt.module'
import { PersonController } from './person.controller'
import { PersonServices } from './person.service'

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [PersonServices],
  controllers: [PersonController],
})
export class PersonModule {}
