import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
// import BooksContext from "../context/books";

// function BookEdit({ book, onEdit }) {
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit(book.id, title);
    onSubmit();
    editBookById(book.id, title);
    // onEdit(book.id, title);
    // console.log("New title", title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
