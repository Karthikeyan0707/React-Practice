import React from "react";
// import BooksContext from "../context/books";
import BookShow from "../components/BookShow";
// import { useContext } from "react";
import useBooksContext from "../hooks/use-books-context";

// function BookList({ books, onDelete, onEdit }) {
function BookList() {
  // const value = useContext(BooksContext);
  // const { count, incrementCount } = useContext(BooksContext);
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return (
      // <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
      <BookShow key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {/* {count} */}
      {/* <button onClick={incrementCount}>Click me!</button> */}
      {renderedBooks}
    </div>
  );
}

export default BookList;
