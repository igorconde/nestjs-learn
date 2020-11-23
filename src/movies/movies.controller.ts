import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with ID: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie!';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delte movie with ID: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This path delte movie with ID: ${movieId}`;
  }
}
