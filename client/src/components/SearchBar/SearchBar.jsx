import style from "../SearchBar/SearchBar.module.css";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon, setLoading } from "../../redux/actions";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const OnSearch = () => {
    dispatch(setLoading());
    dispatch(getPokemon(name));
  };

  return (
    <div className={style.searchBar}>
      <input
        onChange={handleChange}
        type="search"
        name="search"
        value={name}
        placeholder="Enter name..."
      />
      <button className={style.buttonSearch} onClick={() => OnSearch(name)}>
        Search
      </button>
    </div>
  );
}
