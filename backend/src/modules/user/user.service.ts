import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { $Enums, User } from '@prisma/client';
import bcrypt from 'bcrypt';

@Injectable()
export class UserServices {
  constructor(private prisma: PrismaService) {}

  async createUser(
    username: string,
    password: string,
    role: $Enums.Roles,
  ): Promise<User> {
    const foundUser = await this.prisma.user.findUnique({
      where: { username },
    });
    if (foundUser) {
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: { username, password: hashedPassword, role },
    });
  }

  async updateUser(
    id: number,
    username: string,
    password: string,
    role: $Enums.Roles,
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

  async deleteUserById(id: number): Promise<void> {
    const foundUser = await this.prisma.user.findUnique({ where: { id } });
    if (!foundUser) {
      return;
    }
    await this.prisma.user.delete({ where: { id } });
  }

  async deleteUserByName(username: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user) {
      return;
    }
    await this.prisma.user.delete({ where: { username } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findUserByName(username: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async deleteAll(): Promise<void> {
    this.prisma.user.deleteMany({});
  }
}
