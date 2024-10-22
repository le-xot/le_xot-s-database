import { UserEntity } from './user.entity';
import { Roles } from '../../common/enums/user.enum';

export const UserInjectSymbol = Symbol('UserRepo');

export interface UserRepo {
  createUser(user: Omit<UserEntity, 'id'>): Promise<UserEntity>;
  findUserById(id: number): Promise<UserEntity>;
  findUserByUsername(username: string): Promise<UserEntity>;
  updateUser(
    id: number,
    username: string,
    password: string,
    role: Roles,
  ): Promise<UserEntity>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<UserEntity[]>;
}
