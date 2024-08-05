import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserServices } from './user.service';
import { CreateUserDTO } from './user.dtos';
import { UserEntity } from '../repos/user/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserServices) {}

  @Post('create')
  async createUser(@Body() user: CreateUserDTO): Promise<void> {
    const { username, password, role } = user;
    await this.userService.createUser(username, password, role);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUser(parseInt(id));
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
