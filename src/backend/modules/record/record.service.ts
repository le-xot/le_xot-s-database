import { Inject, Injectable } from '@nestjs/common';
import { RecordInjectSymbol, RecordRepo } from './record.repo';
import { RecordEntity } from './record.entity';
import { Genres, Grades, Statuses } from '../../common/enums/record.enum';

@Injectable()
export class RecordServices {
  constructor(@Inject(RecordInjectSymbol) private recordRepo: RecordRepo) {}

  async createRecord(
    title: string,
    user: string,
    status: Statuses,
    genre: Genres,
    grade: Grades,
  ): Promise<RecordEntity> {
    return await this.recordRepo.createRecord({
      title,
      user,
      status,
      genre,
      grade,
    });
  }

  async deleteRecord(id: number): Promise<void> {
    await this.recordRepo.deleteRecord(id);
  }

  async getAllRecords(): Promise<RecordEntity[]> {
    return await this.recordRepo.getAllRecords();
  }
}
