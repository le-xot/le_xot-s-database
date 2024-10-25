import { Person } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PersonEntity implements Person {
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: number;
}
