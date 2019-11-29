import { Controller, Get } from '@nestjs/common';
import { Book } from './models/books';

@Controller('books')
export class BooksController {
  @Get()
  books(): Book[] {
    return [
      new Book('Chicken soup for the soul'),
      new Book('Awaken the giant within'),
      new Book('Find your why'),
      new Book('Man search for the meaning'),
    ];
  }
}
