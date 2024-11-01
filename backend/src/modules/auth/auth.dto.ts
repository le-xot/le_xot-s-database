import { ApiProperty } from '@nestjs/swagger'

export class LoginDTO {
  @ApiProperty({ example: 'Joe' })
  username: string

  @ApiProperty({ example: 'Doe' })
  password: string
}
