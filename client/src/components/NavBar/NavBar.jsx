import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
