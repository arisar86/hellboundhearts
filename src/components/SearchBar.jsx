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
            (book.title.toLowerCase().includes(value.toLowerCase()) ||
              book.author.toLowerCase().includes(value.toLowerCase()) ||
              book.year.toString().includes(value) ||
              book.genre.toLowerCase().includes(value.toLowerCase()))
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
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
