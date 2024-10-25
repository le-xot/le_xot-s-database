import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateGameDTO, PatchGameDTO } from './game.dto';
import { Game } from '@prisma/client';
import { GameEntity } from './game.entity';

@Injectable()
export class GameServices {
  constructor(private prisma: PrismaService) {}

  async createGame(game: CreateGameDTO): Promise<Game> {
    return this.prisma.game.create({ data: game });
  }

  async patchGame(id: number, game: PatchGameDTO): Promise<Game> {
    return this.prisma.game.update({
      where: { id },
      include: { person: true },
      data: game,
    });
  }

  async deleteGame(id: number): Promise<void> {
    await this.prisma.game.delete({ where: { id } });
  }

  async getAllGames(): Promise<GameEntity[]> {
    return this.prisma.game.findMany({ include: { person: true } });
  }

  async findGameById(id: number): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }
}
