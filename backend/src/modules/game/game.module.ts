import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { GameController } from './game.controller';
import { GameServices } from './game.service';
import { CustomJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [CustomJwtModule, PrismaModule],
  providers: [GameServices],
  controllers: [GameController],
})
export class GameModule {}
