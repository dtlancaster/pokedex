import { useState, useEffect } from "react";
import API from "../API";

export const usePokemonFetch = (pokemonName) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(false);

        const pokemon = await API.fetchPokemon(pokemonName);
        const pokemonSpecies = await API.fetchPokemonSpecies(pokemonName);
        setState({
          ...pokemon,
          ...pokemonSpecies,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return { state, loading, error };
};
