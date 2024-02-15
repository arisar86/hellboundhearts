import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
      <div>
        <SearchBar setSearchResults={setSearchResults} />
        {searchResults && searchResults.length > 0 && (
          <SearchResultsList searchResults={searchResults} />
        )}
      </div>
    </div>
  );
}

export default Header;
