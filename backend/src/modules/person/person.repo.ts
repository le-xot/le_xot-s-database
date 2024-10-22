import { PersonEntity } from './person.entity';

export const PersonInjectSymbol = Symbol('PersonRepo');

export interface PersonRepo {
  createPerson(person: Omit<PersonEntity, 'id'>): Promise<PersonEntity>;

  findPersonById(id: number): Promise<PersonEntity>;

  findPersonByName(name: string): Promise<PersonEntity>;

  deletePersonById(id: number): Promise<void>;

  deletePersonByName(name: string): Promise<void>;

  getAllPersons(): Promise<PersonEntity[]>;
}
