import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../redux/actions";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const OnSearch = () => {
    dispatch(getPokemon(name));
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="search"
        name="search"
        value={name}
        placeholder="Enter name..."
      />
      <button onClick={() => OnSearch(name)}>Search</button>
    </div>
  );
}
