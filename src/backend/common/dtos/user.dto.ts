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
