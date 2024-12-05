import { ApiProperty } from '@nestjs/swagger'

export class CreatePersonDTO {
  @ApiProperty({ example: 'le_xot' })
  name: string

  @ApiProperty({ example: '#333333', required: false })
  color?: string
}

export class PatchPersonDTO {
  @ApiProperty({ example: 'le_xot', required: false })
  name?: string

  @ApiProperty({ example: '#333333', required: false })
  color?: string
}
