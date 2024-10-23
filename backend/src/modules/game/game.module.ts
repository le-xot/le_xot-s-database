import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { GameController } from './game.controller';
import { GameServices } from './game.service';

@Module({
  imports: [PrismaModule],
  providers: [GameServices],
  controllers: [GameController],
})
export class GameModule {}
