import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { useState, useEffect } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const BooksApp = () => {
  const [allBooks, setAllBooks] = useState([]);
  const shelves = [
    { title: "Currently Reading", key: "currentlyReading" },
    { title: "Want To Read", key: "wantToRead" },
    { title: "Read", key: "read" },
  ];
  const updateState = () =>
    BooksAPI.getAll().then((value) => setAllBooks(value));

  useEffect(() => {
    updateState();
  }, []);

  const onBookUpdate = async (id, shelf) => {
    await BooksAPI.update(id, shelf).then(() => updateState());
  };
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <div className="bookshelf" key={shelf.key}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {allBooks
                      .filter((book) => book.shelf === shelf.key)
                      .map((filteredBook, index) => (
                        <li key={`unq-key ${index}`}>
                          <Book
                            book={filteredBook}
                            onBookUpdate={onBookUpdate}
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};
export default BooksApp;
