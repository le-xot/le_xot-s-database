import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Roles } from '@prisma/client';
import { UserServices } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userServices: UserServices,
  ) {}

  async registerUser(
    username: string,
    password: string,
    role: Roles,
  ): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await this.userServices.findUserByName(username);
    if (existingUser) {
      throw new HttpException(
        'User with username already exists',
        HttpStatus.CONFLICT,
      );
    }

    await this.userServices.createUser(username, hashedPassword, role);
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.userServices.findUserByName(username);

    if (!user) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const { password: _, ...payload } = user;

    return await this.jwtService.signAsync(payload);
  }
}
