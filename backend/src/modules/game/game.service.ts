import { Injectable } from '@nestjs/common'
import { Game } from '@prisma/client'
import { PrismaService } from '../../database/prisma.service'
import { CreateGameDTO, PatchGameDTO } from './game.dto'
import { GameEntity } from './game.entity'

@Injectable()
export class GameServices {
  constructor(private prisma: PrismaService) {}

  async createGame(game: CreateGameDTO): Promise<Game> {
    const foundedPerson = await this.prisma.person.findUnique({
      where: { name: game.personName },
    })

    if (!foundedPerson) {
      throw new Error('Person not found')
    }

    return this.prisma.game.create({
      data: {
        personId: foundedPerson.id,
        title: game.title,
        type: game.type,
        status: game.status,
        grade: game.grade,
      },
    })
  }

  async patchGameById(id: number, game: PatchGameDTO): Promise<Game> {
    return this.prisma.game.update({
      where: { id },
      include: { person: true },
      data: game,
    })
  }

  // async patchGameByTitle(name: string, game: PatchGameDTO): Promise<Game> {
  //   const foundedPerson = await this.prisma.person.findUnique({
  //     where: { name: game.personName },
  //   });
  //
  //   if (!foundedPerson) {
  //     throw new Error('Person not found');
  //   }
  //
  //   const foundedGame = await this.prisma.game.findUnique({
  //     where: { title: game.title },
  //   });
  //
  //   return this.prisma.game.update({
  //     where: { title: game.title },
  //     include: { person: true },
  //     data: game,
  //   });
  // }

  async deleteGame(id: number): Promise<void> {
    await this.prisma.game.delete({ where: { id } })
  }

  async getAllGames(): Promise<GameEntity[]> {
    return this.prisma.game.findMany({ include: { person: true } })
  }

  async findGameById(id: number): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } })
  }
}
