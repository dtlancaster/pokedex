import React from "react";
import { Wrapper, Content, Text } from "./PokemonInfo.styles";

const PokemonInfo = ({ pokemon }) => (
  <Wrapper>
    <Content>
      <img
        id="info-thumb-img"
        src={`https://pokemon-images.s3.amazonaws.com/${pokemon.name}.png`}
        alt="pokemon-thumbnail"
      />
      <Text>
        <div id="flavor">
          <h3 className="cap_this">Name: {pokemon.name}</h3>
          <h3>Pokedex Number: {pokemon.id}</h3>
          <h3>Summary: {pokemon.flavor_text_entries[0].flavor_text}</h3>
        </div>
        <div id="basic">
          <h3 className="cap_this">
            Primary Ability: {pokemon.abilities[0].ability.name}
          </h3>
          <h3 className="cap_this">
            Primary Type: {pokemon.types[0].type.name}
          </h3>
        </div>
        <div id="sprites">
          <img src={pokemon.sprites.front_default} alt="front-sprite" />
          <img src={pokemon.sprites.back_default} alt="back-sprite" />
          <img src={pokemon.sprites.front_shiny} alt="front-shiny" />
          <img src={pokemon.sprites.back_shiny} alt="back-shiny" />
        </div>
        <div id="stats">
          <h3>Base HP: {pokemon.stats[0].base_stat}</h3>
          <h3>Base Attack: {pokemon.stats[1].base_stat}</h3>
          <h3>Base Defense: {pokemon.stats[2].base_stat}</h3>
          <h3>Base Special Attack: {pokemon.stats[3].base_stat}</h3>
          <h3>Base Special Defense: {pokemon.stats[4].base_stat}</h3>
          <h3>Base Speed: {pokemon.stats[5].base_stat}</h3>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default PokemonInfo;
