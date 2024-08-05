import { UserEntity } from './user.entity';

export const UserInjectSymbol = Symbol('UserRepo');

export interface UserRepo {
  createUser(user: Omit<UserEntity, 'id'>): Promise<UserEntity>;
  findUserById(id: number): Promise<UserEntity>;
  findUserByUsername(username: string): Promise<UserEntity>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<UserEntity[]>;
}
