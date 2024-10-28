import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GameServices } from './game.service';
import { CreateGameDTO, PatchGameDTO } from './game.dto';
import { Game, Roles } from '@prisma/client';
import { GameEntity } from './game.entity';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/auth.roles.guard';

@ApiTags('games')
@UseGuards(AuthGuard, new RolesGuard([Roles.ADMIN]))
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
    return this.gameServices.patchGameById(id, game);
  }

  @Delete(':id')
  async deleteGame(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.gameServices.deleteGame(id);
  }

  @Get()
  @ApiResponse({ status: 200, type: GameEntity, isArray: true })
  async getAllGames(): Promise<Game[]> {
    return this.gameServices.getAllGames();
  }
}
