import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  orderName,
  orderTypes,
  orderCreated,
  orderAttack,
  reset,
} from "../../redux/actions";

export default function NavBar(props) {
  const types = useSelector((state) => state.pokemonsTypes);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    value1: "DEFAULT",
    value2: "DEFAULT",
    value3: "DEFAULT",
    value4: "DEFAULT",
  });

  function handlerName(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderName(value));
  }

  function handlerTypes(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderTypes(value));
  }

  function handlerAttack(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderAttack(value));
  }

  function handlerCreated(event) {
    event.preventDefault();
    const { value } = event.target;
    setValues(event.target.value);
    dispatch(orderCreated(value));
  }

  function resetButton() {
    dispatch(reset());
    setValues({
      ...values,
      value1: "DEFAULT",
      value2: "DEFAULT",
      value3: "DEFAULT",
      value4: "DEFAULT",
    });
  }

  return (
    <div>
      <Link to="/create">
        <button>CREATE</button>
      </Link>
      <Link to="/">
        <button>LANDING</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <div>
        <select onChange={handlerName} name="name" value={values.value1}>
          <option value="DEFAULT" disabled>
            Select Name
          </option>
          <option value="asc">AZ</option>
          <option value="desc">ZA</option>
        </select>
        <select onChange={handlerTypes} name="types" value={values.value2}>
          <option value="DEFAULT" disabled>
            Select Types
          </option>
          {types.map((type) => (
            <option key={type.id} value={type.name} disabled={type.disabled}>
              {type.name}
            </option>
          ))}
        </select>
        <select onChange={handlerAttack} name="attack" value={values.value3}>
          <option value="DEFAULT" disabled>
            Select Attack
          </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={handlerCreated} name="created" value={values.value4}>
          <option value="DEFAULT" disabled>
            Select Created
          </option>
          <option value="true">Database</option>
          <option value="false">Api</option>
        </select>
      </div>
      <button onClick={resetButton}>RESET</button>
    </div>
  );
}
