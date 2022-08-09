import { useEffect, useState } from 'react';
import { getBooks } from '@myorg/books/data-access';
import { Books } from '@myorg/books/ui';
import { IBook } from '@myorg/shared/models';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res));
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
