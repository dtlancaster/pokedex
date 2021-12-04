import React from "react";
import { Link } from "react-router-dom";

import PokeAppLogo from "../../images/PokeApp.png";
import AppStateLogo from "../../images/Appstate.svg";
import RayquazaLogo from "../../images/rayquaza_logo.gif";

import {
  Wrapper,
  Content,
  LogoImg,
  AppImg,
  RayquazaImg,
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={PokeAppLogo} alt="poke-app-logo" />
      </Link>
      <RayquazaImg src={RayquazaLogo} alt="rayquaza-gif" />
      <AppImg src={AppStateLogo} alt="Appstate-logo" />
    </Content>
  </Wrapper>
);

export default Header;
