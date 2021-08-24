import { useState, useEffect } from "react";
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
  updateBooksShelf,
}) => {
  const [shelf, setShelf] = useState("");
  // const {id, imageLinks, author, title, updateBooksShelf} = Book
  // const reload = () => setTimeout(() => window.location.reload(), 400);
  useEffect(() => {
    BooksAPI.update(id, shelf);
  }, [shelf]);
  useEffect(() => {
    updateBooksShelf();
  }, [shelf]);

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
              setShelf(e.target.value);
            }}
          >
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
      {authors.map((author) => (
        <div className="book-authors">{authors}</div>
      ))}
    </div>
  );
};

export default Book;
