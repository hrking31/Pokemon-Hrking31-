import style from "../Card/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { ColorForType, ColorForType1 } from "../utils/ColorForType";

export default function Card(props) {
  const color1 = ColorForType(props.types[0]);
  const color2 = ColorForType1(props.types[1]);
  return (
    <div>
      <div
        className={style.card}
        style={{ "--color1": color1, "--color2": color2 }}
      >
        <h2 className={style.name}>{props.name}</h2>
        <h2>{props.types.join(", ")}</h2>
        <Link to={`/detail/${props.id}`}>
          <img
            src={props.image}
            className={style.cardImage}
            alt="img not found"
          />
        </Link>
      </div>
    </div>
  );
}
