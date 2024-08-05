import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecordServices } from './record.service';
import { CreateRecordDTO } from '../../common/dtos/record.dto';
import { RecordEntity } from './record.entity';

@ApiTags('records')
@Controller('records')
export class RecordController {
  constructor(private recordService: RecordServices) {}

  @Post('create')
  async createRecord(@Body() record: CreateRecordDTO): Promise<void> {
    const { title, user, status, genre, grade } = record;
    await this.recordService.createRecord(title, user, status, genre, grade);
  }

  @Delete(':id')
  async deleteRecord(@Param('id') id: string): Promise<void> {
    await this.recordService.deleteRecord(parseInt(id));
  }

  @Get()
  async getAllRecords(): Promise<RecordEntity[]> {
    return await this.recordService.getAllRecords();
  }
}
