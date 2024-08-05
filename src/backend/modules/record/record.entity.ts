import { Genres, Grades, Statuses } from '../../common/enums/record.enum';

export type RecordEntity = {
  id: number;
  title: string;
  user: string;
  status: Statuses;
  genre: Genres;
  grade?: Grades;
};
