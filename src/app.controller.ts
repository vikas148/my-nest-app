import { Controller, Delete, Get, Post, Put } from '@nestjs/common/decorators';
import { get } from 'http';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  // public bookService: BookService = new BookService();

  constructor(private bookService : BookService){}
  //   add a book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }
  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }
  //update book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }
  //find all book
  @Get('/find')
  findBook(): string {
    return this.bookService.findBook();
  }
}
