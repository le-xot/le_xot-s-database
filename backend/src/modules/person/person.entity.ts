import { ApiProperty } from '@nestjs/swagger'
import type { Person } from '@prisma/client'

export class PersonEntity implements Person {
  @ApiProperty()
  name: string

  @ApiProperty()
  id: number
}
