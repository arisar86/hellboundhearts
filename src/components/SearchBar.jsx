import React from "react";
import { useState } from "react";

function SearchBar({ setSearchResults }) {
  const [searchInput, setSearchInput] = useState("");

  const fetchData = (value) => {
    fetch("src/assets/books.json")
      .then((response) => response.json())
      .then((books) => {
        const results = books.filter((book) => {
          return (
            value &&
            book &&
            book.title &&
            book.author &&
            book.year &&
            book.genre
          );
        });
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="search"
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
