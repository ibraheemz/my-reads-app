import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

const Book = ({
  book: {
    id,
    imageLinks: { thumbnail },
    authors,
    title,
  },
  onBookUpdate,
}) => {
  onBookUpdate !== true
    ? (onBookUpdate = (id, shelf) => BooksAPI.update(id, shelf))
    : (onBookUpdate = onBookUpdate);
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
          <select onChange={(e) => onBookUpdate(id, e.target.value)}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none" selected="true">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(",")}</div>
    </div>
  );
};

export default Book;
