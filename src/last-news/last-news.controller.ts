import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createLastNewsDto, updateLastNewsDto } from './dto/dto';

@Controller('last-news')
export class LastNewsController {

  @Get()
  getLastNews() {
    return 'Last news ALl';
  }

  @Get(':id')
  getSingleLastNews(
    @Param('id') id: string,
    @Body() body) {
    return body;
  }

  @Delete(':id')
  deleteSingleLAstNews(@Param('id') id: string): string {
    return `Deleted news id ${id}`;
  }

  @Post()
  createNewLastNews(
    @Param('id') id: string,
    @Body() todo: createLastNewsDto): createLastNewsDto {
    console.log(todo, id);
    return todo;
  }

  @Put()
  updateNewLastNews(
    @Param('id')id: string,
    @Body() todo: updateLastNewsDto
  ): updateLastNewsDto {
    console.log(id);
    return todo;
  }

}
