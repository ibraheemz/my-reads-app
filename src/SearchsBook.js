// import React, { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
const SearchsBook = ({
  book,
  book: { id, imageLinks, authors, title, shelf },
  homeBooksWithShelf,
}) => {
  const onBookUpdate = (id, newShelf) => BooksAPI.update(id, newShelf);

  const bookWithShelf =
    homeBooksWithShelf &&
    homeBooksWithShelf.filter((item) => item.id === book.id);
  bookWithShelf.length >= 1
    ? (book.shelf = bookWithShelf[0].shelf)
    : (book.shelf = "none");

  return (
    <div className="book">
      <div className="book-top">
        {imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`,
            }}
          />
        ) : (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
            }}
          />
        )}

        <div className="book-shelf-changer">
          <select
            onChange={(e) => {
              onBookUpdate(id, e.target.value);
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
      <div className="book-authors">{authors && authors.join(",")}</div>
    </div>
  );
};

export default SearchsBook;
