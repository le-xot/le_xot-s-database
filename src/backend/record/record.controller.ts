import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecordServices } from './record.service';
import { CreateRecordDTO } from './record.dtos';

@ApiTags('records')
@Controller('records')
export class RecordController {
  constructor(private recordService: RecordServices) {}

  @Post('create')
  async create(@Body() record: CreateRecordDTO): Promise<void> {
    const { title, user, status, genre, grade, comment } = record;
    await this.recordService.createRecord(
      title,
      user,
      status,
      genre,
      grade,
      comment,
    );
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.recordService.deleteRecord(parseInt(id));
  }

  @Get()
  async getAll() {
    return this.recordService.getAllRecords();
  }
}
