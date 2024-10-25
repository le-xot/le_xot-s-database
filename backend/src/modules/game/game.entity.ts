import { $Enums, Game } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { PersonEntity } from '../person/person.entity';
import { GradeEnum, StatusesEnum, TypesEnum } from '../../enums/enums.names';

export class GameEntity implements Game {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty({ type: PersonEntity })
  person: PersonEntity;
  @ApiProperty()
  personId: number;
  @ApiProperty({ enumName: TypesEnum, enum: $Enums.Type })
  type: $Enums.Type;
  @ApiProperty({ enumName: StatusesEnum, enum: $Enums.PrismaStatuses })
  status: $Enums.PrismaStatuses;
  @ApiProperty({ enumName: GradeEnum, enum: $Enums.PrismaGrades })
  grade: $Enums.PrismaGrades;
}
