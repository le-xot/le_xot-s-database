import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';

import { UserServices } from '../user/user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/auth.roles.guard';
import { PrismaRoles, User } from '@prisma/client';

@ApiTags('admin')
@UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
@Controller('admin/users')
export class AdminController {
  constructor(private userServices: UserServices) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'Users found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Users not found' })
  async findAll(): Promise<User[]> {
    return this.userServices.getAllUsers();
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'Users deleted' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Users not found' })
  async deleteAll(): Promise<void> {
    return this.userServices.deleteAll();
  }

  @Get(':username')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'User found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  async findOne(@Param('username') username: string): Promise<User> {
    return this.userServices.findUserByName(username);
  }

  @Delete(':username')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'User deleted' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  async deleteUser(@Query('username') username: string): Promise<void> {
    return this.userServices.deleteUserByName(username);
  }
}
