import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, pokemonName, clickable }) => (
  <div id="thumb-bg">
    {clickable ? (
      <Link to={`/${pokemonName}`}>
        <Image src={image} alt="pokemon-thumbnail" />
      </Link>
    ) : (
      <Image src={image} alt="pokemon-thumbnail" />
    )}

    <h1>{pokemonName}</h1>
  </div>
);

export default Thumbnail;
