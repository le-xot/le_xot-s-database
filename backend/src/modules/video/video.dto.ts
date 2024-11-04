import { ApiProperty } from '@nestjs/swagger'
import { $Enums } from '@prisma/client'

export class CreateVideoDTO {
  @ApiProperty({ example: 'Мадагаскар' })
  title: string

  @ApiProperty({ example: 'le_xot' })
  personName: string

  @ApiProperty({ example: $Enums.PrismaTypes.FREE })
  type: $Enums.PrismaTypes

  @ApiProperty({ example: $Enums.PrismaStatuses.PROGRESS })
  status: $Enums.PrismaStatuses

  @ApiProperty({ example: $Enums.PrismaGenres.CARTOON })
  genre: $Enums.PrismaGenres

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE })
  grade?: $Enums.PrismaGrades
}

export class PatchVideoDTO {
  @ApiProperty({ example: 'Боб строитель', required: false })
  title?: string

  @ApiProperty({ example: 1, required: false })
  personId?: number

  @ApiProperty({ example: $Enums.PrismaTypes.FREE, required: false })
  type?: $Enums.PrismaTypes

  @ApiProperty({ example: $Enums.PrismaStatuses.DONE, required: false })
  status?: $Enums.PrismaStatuses

  @ApiProperty({ example: $Enums.PrismaGenres.MOVIE, required: false })
  genre?: $Enums.PrismaGenres

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE, required: false })
  grade?: $Enums.PrismaGrades
}
