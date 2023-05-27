import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
    </div>
  );
}
