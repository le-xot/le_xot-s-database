import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../repos/user/user.entity.enums';

export class CreateUserDTO {
  @ApiProperty({ example: 'Joe' })
  username: string;

  @ApiProperty({ example: 'Doe' })
  password: string;

  @ApiProperty({ example: Roles.USER })
  role: Roles;
}
