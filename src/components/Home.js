import React, { useState, useEffect } from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) return <div>This is an Error Page!</div>;

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="National Dex">
        {state.results.map((pokemon) => (
          <Thumbnail
            key={pokemon.name}
            clickable
            image={`https://pokemon-images.s3.amazonaws.com/${pokemon.name}.png`}
            pokemonName={pokemon.name}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
