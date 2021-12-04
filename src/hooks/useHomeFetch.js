import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchHomePokemonDev = async (url, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const nationalPokemon = await API.fetchHomePokemonDev(searchTerm, url);

      setState((prev) => ({
        ...nationalPokemon,
        results: searchTerm
          ? [nationalPokemon]
          : [...prev.results, ...nationalPokemon.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //const fetchSecondTwentyPokemon = async () => {
  //  try {
  //    setError(false);
  //    setLoading(true);

  //    const nationalPokemon = await API.fetchSecondTwentyPokemon();

  //    setState(() => ({
  //      ...nationalPokemon,
  //      results: [...nationalPokemon.results],
  //    }));
  //  } catch (error) {
  //    setError(true);
  //  }
  //  setLoading(false);
  //};

  useEffect(() => {
    setState(initialState);
    fetchHomePokemonDev(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
      searchTerm
    );
  }, [searchTerm]);

  // Loading More
  useEffect(() => {
    if (!isLoadingMore) return;

    // fetchSecondTwentyPokemon();
    fetchHomePokemonDev(state.next, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.next]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
