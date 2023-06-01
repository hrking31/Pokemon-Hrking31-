import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonsTypes);

  const [form, setForm] = useState({
    name: "",
    hp: "",
    attack: "",
    image: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    hp: "",
    attack: "",
    image: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  //------>>>//--REGEX--//<<<------//
  const noEmpty = /\S+/;
  const validateName = /^.{5,200}$/; //------>>>//--Rango de 5 a 200--//<<<------//
  const validateNum = /^(?:\d{1,3}(?:\.\d{0,1})?|0\.\d{1})$/;

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value });
  };

  const handleSelectTypes = (event) => {
    const value = event.target.value;
    setForm({ ...form, types: [...form.types, value] });
  };

  const validate = (form) => {
    let newErrors = {};
    newErrors.name =
      !noEmpty.test(form.name) ||
      !validateName.test(form.name) ||
      form.name.length < 5
        ? "Name required. more than 5 characters"
        : "";

    newErrors.hp =
      !validateNum.test(form.hp) || parseInt(form.hp) < 1
        ? "Number required. Higher than 1"
        : "";
    setErrors({ ...errors, ...newErrors });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postPokemon({ ...form }));
    validate({ ...form });
  };

  return (
    <form onSubmit={submitHandler}>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <Link to="/">
        <button>LANDING</button>
      </Link>
      <h1>Create Pokemon</h1>
      <div>
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          placeholder="  Name..."
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>LIFE</label>
        <input
          type="number"
          name="hp"
          value={form.hp}
          onChange={changeHandler}
          placeholder="  Hp..."
        />
        {errors.hp && <span>{errors.hp}</span>}
      </div>

      <div>
        <label>ATTACK</label>
        <input
          type="number"
          name="attack"
          value={form.attack}
          onChange={changeHandler}
          placeholder="  Attackp..."
        />
        {errors.attack && <span>{errors.attack}</span>}
      </div>

      <div>
        <label>IMAGE</label>
        <input
          type="url"
          name="image"
          value={form.image}
          onChange={changeHandler}
          placeholder="  Url..."
        />
        {errors.image && <span>{errors.image}</span>}
      </div>

      <div>
        <label>DEFENSE</label>
        <input
          type="number"
          name="defense"
          value={form.adefense}
          onChange={changeHandler}
          placeholder="  Defense..."
        />
        {errors.defense && <span>{errors.defense}</span>}
      </div>

      <div>
        <label>SPEED</label>
        <input
          type="number"
          name="speed"
          value={form.speed}
          onChange={changeHandler}
          placeholder="  Speed..."
        />
        {errors.speed && <span>{errors.speed}</span>}
      </div>

      <div>
        <label>HEIGHT</label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={changeHandler}
          placeholder="  Height..."
        />
        {errors.height && <span>{errors.height}</span>}
      </div>

      <div>
        <label>WEIGHT</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={changeHandler}
          placeholder="  Weight..."
        />
        {errors.weight && <span>{errors.weight}</span>}
      </div>

      <div>
        {types.map((type) => (
          <div key={type.id}>
            <input
              type="checkbox"
              name="types"
              value={type.name}
              onChange={handleSelectTypes}
              id={type.value}
            />
            <label htmlFor={type.value}>{type.name}</label>
          </div>
        ))}
      </div>

      <button type="submit">CREATE !!!</button>
    </form>
  );
}
