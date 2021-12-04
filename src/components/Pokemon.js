import React from "react";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import PokemonInfo from "./PokemonInfo";
import { usePokemonFetch } from "../hooks/usePokemonFetch";

const Pokemon = () => {
  const { pokemonName } = useParams();

  const { state: pokemon, loading, error } = usePokemonFetch(pokemonName);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  console.log(pokemon);
  return (
    <>
      <BreadCrumb pokemonSpecies={pokemonName} />
      <PokemonInfo pokemon={pokemon} />
    </>
  );
};

export default Pokemon;
