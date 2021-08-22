import React from "react";
import { BrowerRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import "./App.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    BooksAPI.search(query).then((res) => setSearchResults(res));
  }, [query]);
  console.log(query);
  console.log(searchResults);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {query === "" ? (
          <p></p>
        ) : (
          <ol className="books-grid">
            {searchResults === undefined ? (
              <p>Loading Books . . . </p>
            ) : searchResults.length ? (
              searchResults.map((book) => (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    backgroundImage={book.previewLink}
                    author={book.Authors}
                    title={book.title}
                  />
                </li>
              ))
            ) : (
              <p>No Books Found</p>
            )}
          </ol>
        )}
      </div>
    </div>
  );
};
export default Search;
