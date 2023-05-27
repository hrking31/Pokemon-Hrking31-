import style from "../Landing/Landing.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Welcome to PokéWorld</h1>
        </div>
        <Link to="/home">
          <button className={style.button}>Go!!!</button>
        </Link>
      </div>
    </div>
  );
}
