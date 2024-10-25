import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Person } from '@prisma/client';
import { PersonEntity } from './person.entity';

@Injectable()
export class PersonServices {
  constructor(private prisma: PrismaService) {}

  async createPerson(name: string): Promise<Person> {
    const existingPerson = await this.findPersonByName(name);
    if (existingPerson) {
      return;
    }
    return this.prisma.person.create({
      data: { name },
    });
  }

  async deletePersonById(id: number): Promise<void> {
    const person = await this.findPersonById(id);
    if (!person) {
      return;
    }
    await this.prisma.person.delete({ where: { id } });
  }

  async deletePersonByName(name: string): Promise<void> {
    const person = await this.findPersonByName(name);
    if (!person) {
      return;
    }
    await this.prisma.person.delete({ where: { name } });
  }

  async findPersonById(id: number): Promise<Person> {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async findPersonByName(name: string): Promise<Person> {
    return this.prisma.person.findUnique({ where: { name } });
  }

  async patchPerson(id: number, name: string): Promise<Person> {
    return this.prisma.person.update({
      where: { id },
      data: { name },
    });
  }

  async getAllPersons(): Promise<PersonEntity[]> {
    return this.prisma.person.findMany();
  }
}
