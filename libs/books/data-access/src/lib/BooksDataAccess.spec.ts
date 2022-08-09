import { booksDataAccess } from './BooksDataAccess';

describe('booksDataAccess', () => {
  it('should work', () => {
    expect(booksDataAccess()).toEqual('books-data-access');
  });
});
