import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { PrismaRoles, User } from '@prisma/client'
import { AuthGuard } from '../auth/auth.guard'
import { RolesGuard } from '../auth/auth.roles.guard'
import { UserDecorator } from '../auth/auth.user.decorator'
import { UpdateUserDTO } from './user.dto'
import { UserEntity } from './user.entity'
import { UserServices } from './user.service'

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserServices) {}

  @Patch()
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async updateUser(@Body() user: UpdateUserDTO): Promise<void> {
    const { id, username, password, role } = user
    await this.userService.updateUser(id, username, password, role)
  }

  @Delete(':id')
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUserById(id)
  }

  @Get()
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.ADMIN]))
  @ApiResponse({ status: 200, type: UserEntity, isArray: true })
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers()
  }

  @Get('info')
  @UseGuards(AuthGuard, new RolesGuard([PrismaRoles.USER, PrismaRoles.ADMIN]))
  @ApiResponse({ status: 200, type: UserEntity })
  async getInfo(@UserDecorator() user: User) {
    return this.userService.findUserByName(user.username)
  }
}
