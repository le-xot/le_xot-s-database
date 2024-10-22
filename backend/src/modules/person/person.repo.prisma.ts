import { Injectable } from '@nestjs/common';
import { PersonRepo } from './person.repo';
import { PrismaService } from '../../database/prisma.service';
import { PersonEntity } from './person.entity';
import { Person } from '@prisma/client';

@Injectable()
export class PersonRepoPrisma implements PersonRepo {
  constructor(private prisma: PrismaService) {}

  private convertPerson(person: Person): PersonEntity {
    return {
      ...person,
    };
  }

  async createPerson(person: Omit<PersonEntity, 'id'>): Promise<PersonEntity> {
    const foundedPerson = await this.findPersonByName(person.name);
    if (foundedPerson) {
      return;
    }
    const newPerson = await this.prisma.person.create({
      data: person,
    });
    return this.convertPerson(newPerson);
  }

  async deletePersonById(id: number): Promise<void> {
    const foundedPerson = await this.findPersonById(id);
    if (!foundedPerson) {
      return;
    }
    await this.prisma.person.delete({ where: { id } });
  }

  deletePersonByName(name: string): Promise<void> {
    const foundedPerson = this.findPersonByName(name);
    if (!foundedPerson) {
      return;
    }
    this.prisma.person.delete({ where: { name } });
    return;
  }

  async findPersonById(id: number): Promise<PersonEntity> {
    const user = await this.prisma.person.findUnique({ where: { id } });
    if (!user) {
      return;
    }
    return this.convertPerson(user);
  }

  async findPersonByName(name: string): Promise<PersonEntity> {
    const user = await this.prisma.person.findUnique({ where: { name } });
    if (!user) {
      return;
    }
    return this.convertPerson(user);
  }

  async getAllPersons(): Promise<PersonEntity[]> {
    const persons = await this.prisma.person.findMany();
    return persons.map((person) => this.convertPerson(person));
  }
}
