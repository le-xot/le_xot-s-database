import { PrismaService } from '../../database/prisma.service';
import { UserRepo } from './user.repo';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Roles } from '../../common/enums/user.enum';
import { User } from '@prisma/client';

@Injectable()
export class UserRepoPrisma implements UserRepo {
  constructor(private prisma: PrismaService) {}

  private convertUser(user: User): UserEntity {
    return {
      ...user,
      role: Roles[user.role],
    };
  }

  async createUser(user: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    const newUser = await this.prisma.user.create({
      data: user,
    });
    return this.convertUser(newUser);
  }

  async findUserById(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      return;
    }
    return this.convertUser(user);
  }

  async findUserByUsername(username: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      return;
    }
    return this.convertUser(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findUserById(id);
    if (!user) {
      return;
    }
    await this.prisma.user.delete({ where: { id } });
    return;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.convertUser(user));
  }
}
