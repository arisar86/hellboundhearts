import React from "react";
import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const booksToSearch = [{}];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    booksToSearch.map((book) => {
      return book.name.match(searchInput);
    });
  }

  <div>
    <input
      type="text"
      placeholder="Search"
      onChange={handleSearch}
      value={searchInput}
    />
    ;
  </div>;
}

export default SearchBar;
