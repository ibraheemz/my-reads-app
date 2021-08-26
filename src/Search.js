import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchsBook from "./SearchsBook";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [homeBooks, setHomeBooks] = useState("");

  useEffect(() => {
    BooksAPI.search(query).then((res) => setSearchResults(res));
    BooksAPI.getAll().then((books) => setHomeBooks(books));
  }, [query]);
  const homeBooksWithShelf = [];
  homeBooks &&
    homeBooks.map((item) =>
      homeBooksWithShelf.push({ id: item.id, shelf: item.shelf })
    );

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
                  <SearchsBook
                    book={book}
                    homeBooksWithShelf={homeBooksWithShelf}
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
