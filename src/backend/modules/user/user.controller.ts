import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserServices } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from '../../common/dtos/user.dto';
import { UserEntity } from './user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserServices) {}

  @Post('create')
  async createUser(@Body() user: CreateUserDTO): Promise<void> {
    const { username, password, role } = user;
    await this.userService.createUser(username, password, role);
  }

  @Post('update')
  async updateUser(@Body() user: UpdateUserDTO): Promise<void> {
    const { id, username, password, role } = user;
    await this.userService.updateUser(id, username, password, role);
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
