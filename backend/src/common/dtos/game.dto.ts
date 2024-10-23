import { ApiProperty } from '@nestjs/swagger';
import { Grades, Statuses, Types } from '../enums/video.enum';

export class CreateGameDTO {
  @ApiProperty({ example: 'minecraft' })
  title: string;

  @ApiProperty({ example: 1 })
  personId: number;

  @ApiProperty({ example: Types.FREE })
  type: Types;

  @ApiProperty({ example: Statuses.PROGRESS })
  status: Statuses;

  @ApiProperty({ example: Grades.LIKE })
  grade?: Grades;
}

export class PatchGameDTO {
  @ApiProperty({ example: 'Dota 2' })
  title?: string;

  @ApiProperty({ example: 2 })
  personId?: number;

  @ApiProperty({ example: Types.FREE })
  type?: Types;

  @ApiProperty({ example: Statuses.DONE })
  status?: Statuses;

  @ApiProperty({ example: Grades.DISLIKE })
  grade?: Grades;
}
