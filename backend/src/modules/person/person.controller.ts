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
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { PrismaRoles } from '@prisma/client'
import { AuthGuard } from '../auth/auth.guard'
import { RolesGuard } from '../auth/auth.roles.guard'
import { CreatePersonDTO } from './person.dto'
import { PersonEntity } from './person.entity'
import { PersonServices } from './person.service'

@ApiTags('persons')
@Controller('persons')
export class PersonController {
  constructor(private personServices: PersonServices) {}

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Post()
  @ApiResponse({ status: 200, type: PersonEntity })
  async createPerson(@Body() person: CreatePersonDTO): Promise<PersonEntity> {
    const { name } = person
    return await this.personServices.createPerson(name)
  }

  @Get()
  @ApiResponse({ status: 200, type: PersonEntity, isArray: true })
  async getAllPersons(): Promise<PersonEntity[]> {
    return await this.personServices.getAllPersons()
  }

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Delete(':id')
  async deletePersonById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.personServices.deletePersonById(id)
  }

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Delete(':name')
  async deletePersonByName(@Param('name') name: string): Promise<void> {
    await this.personServices.deletePersonByName(name)
  }

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Patch(':id')
  async patchPerson(
    @Param('id', ParseIntPipe) id: number,
    @Body() person: CreatePersonDTO,
  ): Promise<PersonEntity> {
    return await this.personServices.patchPerson(id, person.name)
  }

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Get(':id')
  async findPersonById(@Param('id', ParseIntPipe) id: number): Promise<PersonEntity> {
    return await this.personServices.findPersonById(id)
  }

  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @Get(':name')
  async findPersonByName(@Param('name') name: string): Promise<PersonEntity> {
    return await this.personServices.findPersonByName(name)
  }
}
