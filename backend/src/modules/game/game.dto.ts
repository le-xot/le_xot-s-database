import { ApiProperty } from '@nestjs/swagger'
import { $Enums } from '@prisma/client'

export class CreateGameDTO {
  @ApiProperty({ example: 'minecraft', required: false })
  title?: string

  @ApiProperty({ example: 1, required: false })
  personId?: number

  @ApiProperty({ example: $Enums.PrismaTypes.FREE, required: false })
  type?: $Enums.PrismaTypes

  @ApiProperty({ example: $Enums.PrismaStatuses.PROGRESS, required: false })
  status?: $Enums.PrismaStatuses

  @ApiProperty({ example: $Enums.PrismaGrades.LIKE, required: false })
  grade?: $Enums.PrismaGrades
}

export class PatchGameDTO {
  @ApiProperty({ example: 'Dota 2', required: false })
  title?: string

  @ApiProperty({ example: 1, required: false })
  personId?: number

  @ApiProperty({ example: $Enums.PrismaTypes.FREE, required: false })
  type?: $Enums.PrismaTypes

  @ApiProperty({ example: $Enums.PrismaStatuses.DONE, required: false })
  status?: $Enums.PrismaStatuses

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE, required: false })
  grade?: $Enums.PrismaGrades
}
