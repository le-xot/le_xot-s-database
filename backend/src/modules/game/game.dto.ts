import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CreateGameDTO {
  @ApiProperty({ example: 'minecraft' })
  title: string;

  @ApiProperty({ example: 1 })
  personId: number;

  @ApiProperty({ example: $Enums.Type.FREE })
  type: $Enums.Type;

  @ApiProperty({ example: $Enums.PrismaStatuses.PROGRESS })
  status: $Enums.PrismaStatuses;

  @ApiProperty({ example: $Enums.PrismaGrades.LIKE })
  grade?: $Enums.PrismaGrades;
}

export class PatchGameDTO {
  @ApiProperty({ example: 'Dota 2' })
  title?: string;

  @ApiProperty({ example: 2 })
  personId?: number;

  @ApiProperty({ example: $Enums.Type.FREE })
  type?: $Enums.Type;

  @ApiProperty({ example: $Enums.PrismaStatuses.DONE })
  status?: $Enums.PrismaStatuses;

  @ApiProperty({ example: $Enums.PrismaGrades.DISLIKE })
  grade?: $Enums.PrismaGrades;
}
