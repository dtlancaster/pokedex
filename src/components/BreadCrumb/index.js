import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ pokemonSpecies }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span id="bcnavname">{pokemonSpecies}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
