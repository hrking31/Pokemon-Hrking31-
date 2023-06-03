import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";
import { Link } from "react-router-dom";
import {
  ColorForType,
  ColorForType1,
} from "../../components/utils/ColorForType";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.detailPokemon);
  const [loading, setLoading] = useState(true);

  let color1, color2;
  if (pokemon && pokemon.types) {
    color1 = ColorForType(pokemon.types[0]);
    color2 = ColorForType1(pokemon.types[1]);
  }

  useEffect(() => {
    dispatch(getPokemonById(id)).then(() => setLoading(false));
  }, [dispatch, id]);

  if (loading) {
    return <LoadingCircle />;
  }
  return (
    <div className={style.containerDetail}>
      <div className={style.containerButton}>
        <Link to="/">
          <button>Landing</button>
        </Link>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Form</button>
        </Link>
      </div>

      <div
        className={style.containerInfo}
        style={{ "--color1": color1, "--color2": color2 }}
      >
        <div className={style.containerImg}>
          <img src={pokemon.image} alt="img not found" />
          <h1 className={style.name}> {pokemon.name}</h1>
          <div className={style.stats}>
            <div>
              <span>HEIGHT</span>
              <h3>{pokemon.height}</h3>
            </div>
            <div>
              <span>WEIGHT</span>
              <h3>{pokemon.weight}</h3>
            </div>
          </div>
        </div>

        <div className={style.infoCharacter}>
          <div>
            <h1>Pokemon # {pokemon.id}</h1>
          </div>
          <div>
            <span>HP</span>
            <h3>{pokemon.hp}</h3>
          </div>
          <div>
            <span>ATTACK</span>
            <h3>{pokemon.attack}</h3>
          </div>
          <div>
            <span>DEFENSE</span>
            <h3>{pokemon.defense}</h3>
          </div>
          <div>
            <span>SPEED</span>
            <h3>{pokemon.speed}</h3>
          </div>
          <div>
            <span>TYPES</span>
            <h3>{pokemon.types?.join(" ")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
