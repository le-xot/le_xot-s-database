import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../enums/user.enum';

export class CreateUserDTO {
  @ApiProperty({ example: 'Joe' })
  username: string;

  @ApiProperty({ example: 'Doe' })
  password: string;

  @ApiProperty({ example: Roles.USER })
  role: Roles;
}

export class UpdateUserDTO {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'NotJoe' })
  username: string;

  @ApiProperty({ example: 'NotDoe' })
  password: string;

  @ApiProperty({ example: Roles.ADMIN })
  role: Roles;
}
