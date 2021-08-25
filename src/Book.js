import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
const Book = ({
  book: {
    id,
    imageLinks: { thumbnail },
    authors,
    title,
    shelf,
  },
  onBookUpdate,
  updateBooksShelf,
}) => {
  onBookUpdate !== true
    ? (onBookUpdate = (id, newShelf) => BooksAPI.update(id, newShelf))
    : (onBookUpdate = onBookUpdate);
  console.log(shelf);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={(e) => {
              onBookUpdate(id, e.target.value);
              setTimeout(() => updateBooksShelf(), 350);
            }}
            value={shelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(",")}</div>
    </div>
  );
};

export default Book;
