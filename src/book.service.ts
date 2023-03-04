import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
  addBook(): string {
    return 'this will add a book';
  }

  updateBook(): string {
    return 'This will update the book';
  }

  deleteBook(): string {
    return 'This will delete the book';
  }

  findBook(): string {
    return 'This will find a book';
  }
}
