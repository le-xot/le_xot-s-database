import { Genres, Grades, Statuses, Types } from '../../common/enums/video.enum';

export type VideoEntity = {
  id: number;
  title: string;
  person: string;
  personId: number;
  type: Types;
  status: Statuses;
  genre: Genres;
  grade?: Grades;
};
