import { RecordEntity } from './record.entity';

export const RecordInjectSymbol = Symbol('RecordRepository');

export interface RecordRepository {
  createRecord(record: Omit<RecordEntity, 'id'>): Promise<RecordEntity>;
  deleteRecord(id: number): Promise<void>;
  getAllRecords(): Promise<RecordEntity[]>;
}
