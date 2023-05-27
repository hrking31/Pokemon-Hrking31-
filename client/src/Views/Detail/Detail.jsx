import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/">
        <button>Landing</button>
      </Link>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Form</button>
      </Link>
      <div>
        <h3>{pokemon.id}</h3>
        <h4>ID</h4>
        <h3>{pokemon.name}</h3>
        <h4>NAME</h4>
        <img src={pokemon.image} alt="img not found" />
        <h3>{pokemon.hp}</h3>
        <h4>VIDA</h4>
        <h3>{pokemon.attack}</h3>
        <h4>ATTACK</h4>
        <h3>{pokemon.defense}</h3>
        <h4>DEFENSE</h4>
        <h3>{pokemon.speed}</h3>
        <h4>SPEED</h4>
        <h3>{pokemon.height}</h3>
        <h4>HEIGHT</h4>
        <h3>{pokemon.weight}</h3>
        <h4>WEIGHT</h4>
        <h3>{pokemon.types?.join(", ")}</h3>
        <h4>TYPES</h4>
      </div>
    </div>
  );
}