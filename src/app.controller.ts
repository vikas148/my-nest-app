import { Controller, Delete, Get, Post, Put } from '@nestjs/common/decorators';
import { get } from 'http';

@Controller('book')
export class BookController {
  //   add a book
  @Post("/add")
  addBook(): string {
    return 'This will add book';
  }
  // delete book
 @Delete("/delete")
  deleteBook(): string {
    return 'This will delete book';
  }
  //update book
  @Put("/update")
  updateBook(): string {
    return 'This will update book';
  }
  //find all book
  @Get("/find")
  findBook(): string {
    return 'This will find book';
  }
}
