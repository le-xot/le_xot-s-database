import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PersonServices } from './person.service';
import { CreatePersonDTO } from '../../common/dtos/person.dto';
import { Person } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('persons')
@Controller('persons')
export class PersonController {
  constructor(private personServices: PersonServices) {}

  @Post()
  async createPerson(@Body() person: CreatePersonDTO): Promise<void> {
    const { name } = person;
    await this.personServices.createPerson(name);
  }

  @Delete(':id')
  async deletePersonById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.personServices.deletePersonById(id);
  }

  @Delete(':name')
  async deletePersonByName(@Param('name') name: string): Promise<void> {
    await this.personServices.deletePersonByName(name);
  }

  @Get()
  async getAllPersons(): Promise<Person[]> {
    return await this.personServices.getAllPersons();
  }

  @Get(':id')
  async findPersonById(@Param('id', ParseIntPipe) id: number): Promise<Person> {
    return await this.personServices.findPersonById(id);
  }

  @Get(':name')
  async findPersonByName(@Param('name') name: string): Promise<Person> {
    return await this.personServices.findPersonByName(name);
  }
}
