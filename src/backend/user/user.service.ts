import { Inject, Injectable } from '@nestjs/common';
import { UserInjectSymbol, UserRepo } from '../repos/user/user.repo';
import { Roles } from '../repos/user/user.entity.enums';
import { UserEntity } from '../repos/user/user.entity';

@Injectable()
export class UserServices {
  constructor(@Inject(UserInjectSymbol) private userRepo: UserRepo) {}

  async createUser(
    username: string,
    password: string,
    role: Roles,
  ): Promise<UserEntity> {
    const user = await this.userRepo.findUserByUsername(username);
    console.log(user);
    if (user) {
      throw new Error('User already exists');
    }

    return await this.userRepo.createUser({ username, password, role });
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepo.findUserById(id);
    if (!user) {
      return;
    }
    await this.userRepo.deleteUser(id);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepo.getAllUsers();
  }
}
