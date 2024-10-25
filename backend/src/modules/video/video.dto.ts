import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CreateVideoDTO {
  @ApiProperty({ example: 'Мадагаскар' })
  title: string;

  @ApiProperty({ example: 1 })
  personId: number;

  @ApiProperty({ example: $Enums.Type.FREE })
  type: $Enums.Type;

  @ApiProperty({ example: $Enums.PrismaStatuses.PROGRESS })
  status: $Enums.PrismaStatuses;

  @ApiProperty({ example: $Enums.PrismaGenres.CARTOON })
  genre: $Enums.PrismaGenres;

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE })
  grade?: $Enums.PrismaGrades;
}

export class PatchVideoDTO {
  @ApiProperty({ example: 'Боб строитель' })
  title?: string;

  @ApiProperty({ example: 1 })
  personId?: number;

  @ApiProperty({ example: $Enums.Type.FREE })
  type?: $Enums.Type;

  @ApiProperty({ example: $Enums.PrismaStatuses.DONE })
  status?: $Enums.PrismaStatuses;

  @ApiProperty({ example: $Enums.PrismaGenres.MOVIE })
  genre?: $Enums.PrismaGenres;

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE })
  grade?: $Enums.PrismaGrades;
}
