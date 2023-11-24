import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  // DONT DO THIS
  // fetchBooks();

  const { fetchBooks } = useContext(BooksContext); //destructuring fetch books

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      {/* No.of Books:{books.length} */}
      <h1>Reading List</h1>
      {/* <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} /> */}
      <BookList />
      {/* <BookCreate onCreate={createBook} /> */}
      <BookCreate />
    </div>
  );
}

export default App;
