import { ApiProperty } from '@nestjs/swagger'
import { $Enums, PrismaRoles, User } from '@prisma/client'
import { RolesEnum } from '../../enums/enums.names'

export class UserEntity implements User {
  @ApiProperty()
  id: number

  @ApiProperty()
  username: string

  @ApiProperty()
  password: string

  @ApiProperty({ enumName: RolesEnum, enum: $Enums.PrismaRoles })
  role: PrismaRoles
}
