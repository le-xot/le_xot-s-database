import { Inject, Injectable } from '@nestjs/common';
import { PersonInjectSymbol, PersonRepo } from './person.repo';
import { PersonEntity } from './person.entity';

@Injectable()
export class PersonServices {
  constructor(@Inject(PersonInjectSymbol) private personRepo: PersonRepo) {}

  async createPerson(name: string): Promise<PersonEntity> {
    return await this.personRepo.createPerson({ name });
  }

  async deletePersonById(id: number): Promise<void> {
    await this.personRepo.deletePersonById(id);
  }

  async deletePersonByName(name: string): Promise<void> {
    await this.personRepo.deletePersonByName(name);
  }

  async findPersonById(id: number): Promise<PersonEntity> {
    return await this.personRepo.findPersonById(id);
  }

  async findPersonByName(name: string): Promise<PersonEntity> {
    return await this.personRepo.findPersonByName(name);
  }

  async getAllPersons(): Promise<PersonEntity[]> {
    return await this.personRepo.getAllPersons();
  }
}
