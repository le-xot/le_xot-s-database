import { ApiProperty } from '@nestjs/swagger';
import { Genres, Grades, Statuses, Types } from '../enums/video.enum';

export class CreateVideoDTO {
  @ApiProperty({ example: 'Мадагаскар' })
  title: string;

  @ApiProperty({ example: 1 })
  personId: number;

  @ApiProperty({ example: Types.FREE })
  type: Types;

  @ApiProperty({ example: Statuses.PROGRESS })
  status: Statuses;

  @ApiProperty({ example: Genres.CARTOON })
  genre: Genres;

  @ApiProperty({ example: Grades.DISLIKE })
  grade?: Grades;
}

export class PatchVideoDTO {
  @ApiProperty({ example: 'Боб строитель' })
  title?: string;

  @ApiProperty({ example: 1 })
  personId?: number;

  @ApiProperty({ example: Types.FREE })
  type?: Types;

  @ApiProperty({ example: Statuses.DONE })
  status?: Statuses;

  @ApiProperty({ example: Genres.MOVIE })
  genre?: Genres;

  @ApiProperty({ example: Grades.DISLIKE })
  grade?: Grades;
}
