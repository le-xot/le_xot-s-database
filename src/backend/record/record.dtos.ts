import { ApiProperty } from '@nestjs/swagger';
import { Genres, Grades, Statuses } from '../repos/record/record.entity.enums';

export class CreateRecordDTO {
  @ApiProperty({ example: 'Dota 2' })
  title: string;

  @ApiProperty({ example: 'le_xot' })
  user: string;

  @ApiProperty({ example: Statuses.PROGRESS })
  status: Statuses;

  @ApiProperty({ example: Genres.GAME })
  genre: Genres;

  @ApiProperty({ example: Grades.DISLIKE })
  grade: Grades;
}
