import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Roles } from '../../common/enums/user.enum';
import { User } from '@prisma/client';

@Injectable()
export class UserServices {
  constructor(private prisma: PrismaService) {}

  async createUser(
    username: string,
    password: string,
    role: Roles,
  ): Promise<User> {
    const foundUser = await this.prisma.user.findUnique({
      where: { username },
    });
    if (foundUser) {
      return;
    }
    return this.prisma.user.create({
      data: { username, password, role },
    });
  }

  async updateUser(
    id: number,
    username: string,
    password: string,
    role: Roles,
  ): Promise<User> {
    const foundUser = await this.prisma.user.findUnique({ where: { id } });
    if (!foundUser) {
      return;
    }
    return this.prisma.user.update({
      where: { id },
      data: { username, password, role },
    });
  }

  async deleteUser(id: number): Promise<void> {
    const foundUser = await this.prisma.user.findUnique({ where: { id } });
    if (!foundUser) {
      return;
    }
    await this.prisma.user.delete({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
