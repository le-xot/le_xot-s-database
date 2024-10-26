import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UserServices } from './user.service';
import { UpdateUserDTO } from './user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '../auth/auth.guard';
import { UserDecorator } from '../auth/auth.user.decorator';

@ApiTags('users')
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserServices) {}

  @Patch()
  async updateUser(@Body() user: UpdateUserDTO): Promise<void> {
    const { id, username, password, role } = user;
    await this.userService.updateUser(id, username, password, role);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('info')
  async getInfo(@UserDecorator() user: User) {
    return this.userService.findUserByName(user.username);
  }
}
