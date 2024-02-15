import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
      <SearchBar />
    </div>
  );
}

export default Header;
