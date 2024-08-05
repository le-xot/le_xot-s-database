import { RecordEntity } from './record.entity';

export const RecordInjectSymbol = Symbol('RecordRepo');

export interface RecordRepo {
  createRecord(record: Omit<RecordEntity, 'id'>): Promise<RecordEntity>;
  deleteRecord(id: number): Promise<void>;
  getAllRecords(): Promise<RecordEntity[]>;
}
