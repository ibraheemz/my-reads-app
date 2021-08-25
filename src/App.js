import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { useState, useEffect } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import Search from "./Search";

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

  const onBookUpdate = (id, shelf) => {
    BooksAPI.update(id, shelf);
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
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {allBooks
                      .filter((book) => book.shelf === shelf.key)
                      .map((filteredBook) => (
                        <li key={filteredBook.id}>
                          <Book
                            book={filteredBook}
                            updateBooksShelf={updateState}
                            onBookUpdate={onBookUpdate}
                          />
                        </li>
                      ))}
                    {console.log(allBooks)}
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
