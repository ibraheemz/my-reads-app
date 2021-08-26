import "./App.css";
import PropTypes from "prop-types";

const Book = ({
  book,
  book: { id, imageLinks, authors, title, shelf },
  onBookUpdate,
}) => {
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
              onBookUpdate(book, e.target.value);
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

Book.propTypes = {
  book: PropTypes.object,
  onBookUpdate: PropTypes.func,
};

export default Book;
