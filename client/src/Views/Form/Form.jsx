import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <Link to="/">
        <button>LANDING</button>
      </Link>
    </div>
  );
}
