import React from "react";
import { Link } from "react-router-dom";

function NewArrivals({ books }) {
  return (
    <>
      <h1 className="headingArrivals">New Arrivals</h1>
      <div className="newArrivals">
        {books &&
          books.map((book, i) => (
            <div key={i}>
              <Link to={`/books/${book.id}`}>
                <img src={book.image_url} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.price}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default NewArrivals;
