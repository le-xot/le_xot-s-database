import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDTO {
  @ApiProperty({ example: 'le_xot' })
  name: string;
}
