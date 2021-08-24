import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import Search from "./Search";

const BooksApp = () => {
  const [allBooks, setAllBooks] = useState([]);

  const updateState = () =>
    BooksAPI.getAll().then((value) => setAllBooks(value));
  updateState();

  const onBookUpdate = (id, shelf) => {
    BooksAPI.update(id, shelf);
    updateState();
  };
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {allBooks
                    .filter((book) => book.shelf === "currentlyReading")
                    .map((filteredBook) => (
                      <li key={filteredBook.id}>
                        <Book
                          book={filteredBook}
                          updateBooksShelf={() => updateState()}
                          onBookUpdate={onBookUpdate}
                        />
                      </li>
                    ))}
                  {console.log(allBooks)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {allBooks
                    .filter((book) => book.shelf === "wantToRead")
                    .map((filteredBook) => (
                      <li key={filteredBook.id}>
                        <Book
                          book={filteredBook}
                          updateBooksShelf={() => updateState}
                          onBookUpdate={onBookUpdate}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {allBooks
                    .filter((book) => book.shelf === "read")
                    .map((filteredBook) => (
                      <li key={filteredBook.id}>
                        <Book
                          book={filteredBook}
                          updateBooksShelf={() => updateState}
                          onBookUpdate={onBookUpdate}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
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
