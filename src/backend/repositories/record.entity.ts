import { Genres, Grades, Statuses } from './record.entity.enums';

export type RecordEntity = {
  id: number;
  title: string;
  user: string;
  status: Statuses;
  genre: Genres;
  grade?: Grades;
  comment: string;
};
