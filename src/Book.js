import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

const Book = ({ id, backgroundImage, author, title, updateBooksShelf }) => {
  const [shelf, setShelf] = useState("");
  const [updatedBooks, setUpdatedBooks] = useState(false);

  // const reload = () => setTimeout(() => window.location.reload(), 400);
  useEffect(() => {
    BooksAPI.update(id, shelf);
    setUpdatedBooks(!updatedBooks);
  }, [shelf]);
  useEffect(() => {
    updateBooksShelf();
  }, [updateBooksShelf]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`,
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
      <div className="book-authors">{author}</div>
    </div>
  );
};

export default Book;
