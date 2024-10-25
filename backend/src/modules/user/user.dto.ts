import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CreateUserDTO {
  @ApiProperty({ example: 'Joe' })
  username: string;

  @ApiProperty({ example: 'Doe' })
  password: string;

  @ApiProperty({ example: $Enums.Roles.USER })
  role: $Enums.Roles;
}

export class UpdateUserDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'NotJoe' })
  username: string;

  @ApiProperty({ example: 'NotDoe' })
  password: string;

  @ApiProperty({ example: $Enums.Roles.ADMIN })
  role: $Enums.Roles;
}
