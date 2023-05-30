import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
    </div>
  );
}
