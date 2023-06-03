import style from "../Form/Form.module.css";
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
  const noEmpty = /\S+/; //------>>>//--Espacios en Blanco--//<<<------//
  const validateName = /^.{5,200}$/; //------>>>//--Rango de 5 a 200--//<<<------//
  const validateNum = /^(?:\d{1,3}(?:\.\d{0,1})?|0\.\d{1})$/; //------>>>//--Numeros de tres cifras o decimal de una decima--//<<<------//
  const validateUrl = /(https?:\/\/.*\.(?:png|jpg))/i; //------>>>//--Inicie https y termine . png o jpg--//<<<------//

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
        ? "Name required, more than 5 characters"
        : "";

    newErrors.hp = !validateNum.test(form.hp)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.attack = !validateNum.test(form.attack)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.image = !validateUrl.test(form.image) ? "URL required" : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.defense = !validateNum.test(form.defense)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.speed = !validateNum.test(form.speed)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.height = !validateNum.test(form.height)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });

    newErrors.weight = !validateNum.test(form.weight)
      ? "Mandatory number, with a maximum of three figures or a decimal of one tenth"
      : "";
    setErrors({ ...errors, ...newErrors });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postPokemon({ ...form }));
      alert(`${form.name} creado exitosamente`);
    } catch (error) {
      alert(`Error al crear el Pokemon: ${error.message}`);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style.button_container}>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/">
          <button>LANDING</button>
        </Link>
      </div>
      <div className={style.form_container}>
        <div className={style.title}>
          <h1>Create Pokemon</h1>
        </div>
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

        <div className={style.img}>
          <img
            src={form.image}
            alt=""
            style={{ width: "200px", height: "auto" }}
          />
        </div>

        <div>
          <label>DEFENSE</label>
          <input
            type="number"
            name="defense"
            value={form.defense}
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
        <label>Select 2 types maximum</label>
        <div className={style.container_checkbox}>
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

        <button className={style.button_create} type="submit">
          CREATE !!!
        </button>
      </div>
    </form>
  );
}
