import style from "../CardsContainer/CardsContainer.module.css";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useSelector } from "react-redux";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

export default function CardsContainer() {
  const pokemons = useSelector((state) => state.pokemons);
  const numPage = useSelector((state) => state.numPage);
  const loading = useSelector((state) => state.loading);

  const itemsPage = 12;
  let initial = (numPage - 1) * itemsPage;
  let finish = initial + itemsPage;
  let cantPages = Math.floor(pokemons.length / itemsPage);

  let viewPokemons = pokemons.slice(initial, finish);

  if (loading) {
    return <LoadingCircle />;
  }

  return (
    <div>
      <div className={style.cards_container}>
        {viewPokemons &&
          viewPokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                speed={pokemon.speed}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
              />
            );
          })}
      </div>
      <div>
        {!loading ? (
          <div>
            <Paginate cantPages={cantPages} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
