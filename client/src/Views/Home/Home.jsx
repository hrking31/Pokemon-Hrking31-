import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPokemons,
  getTypes,
  setLoading,
  setArray,
} from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(setArray());
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
    </div>
  );
}
