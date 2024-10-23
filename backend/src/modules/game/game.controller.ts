import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GameServices } from './game.service';
import { CreateGameDTO, PatchGameDTO } from '../../common/dtos/game.dto';
import { Game } from '@prisma/client';

@ApiTags('games')
@Controller('games')
export class GameController {
  constructor(private gameServices: GameServices) {}

  @Post()
  async createGame(@Body() game: CreateGameDTO): Promise<Game> {
    return this.gameServices.createGame(game);
  }

  @Get(':id')
  async findGameById(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    return this.gameServices.findGameById(id);
  }

  @Patch(':id')
  async patchGame(
    @Param('id', ParseIntPipe) id: number,
    game: PatchGameDTO,
  ): Promise<Game> {
    return this.gameServices.patchGame(id, game);
  }

  @Delete(':id')
  async deleteGame(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.gameServices.deleteGame(id);
  }

  @Get()
  async getAllGames(): Promise<Game[]> {
    return this.gameServices.getAllGames();
  }
}
