import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  // private으로 선언한 이유 : CatsService는 constructor을 통해 주입됨. private을 사용하면 선언과 초기화가 동시에 이루어짐
  constructor(private catsService: CatsService) {}
  /**
   * 전체조회
   * @returns
   */
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  /**
   * 상세조회
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
