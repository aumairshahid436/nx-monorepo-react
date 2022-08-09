import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { BooksFeature } from '@myorg/books/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@myorg/ui';
export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/" element={<Navigate to={'/books'} replace />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
