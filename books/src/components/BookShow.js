import React, { useState } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

// function BookShow({ book, onDelete, onEdit }) {
function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    // onDelete(book.id);
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // const handleSubmit = (id, newTitle) => {
  const handleSubmit = () => {
    setShowEdit(false);
    // onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    // content = <BookEdit book={book} onEdit={onEdit} />;
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      <div className="book-show">
        <img
          alt="books"
          src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
        />
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
