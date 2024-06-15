import { Inject, Injectable } from '@nestjs/common';
import {
  RecordInjectSymbol,
  RecordRepository,
} from '../repositories/record.repository';
import { RecordEntity } from '../repositories/record.entity';
import { Genres, Grades, Statuses } from '../repositories/record.entity.enums';

@Injectable()
export class RecordServices {
  constructor(
    @Inject(RecordInjectSymbol) private recordRepository: RecordRepository,
  ) {}

  async createRecord(
    title: string,
    user: string,
    status: Statuses,
    genre: Genres,
    grade: Grades,
    comment: string,
  ): Promise<RecordEntity> {
    const newRecord = await this.recordRepository.createRecord({
      title,
      user,
      status,
      genre,
      grade,
      comment,
    });
    return newRecord;
  }

  async deleteRecord(id: number): Promise<void> {
    await this.recordRepository.deleteRecord(id);
  }

  async getAllRecords(): Promise<RecordEntity[]> {
    const records = await this.recordRepository.getAllRecords();
    return records;
  }
}
