import React from "react";
import { Link } from "react-router-dom";
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
  console.log(searchResults); // these results has the books without a shelf prop.
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
                  <Book book={book} />
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
