import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  maxwidth: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const RayquazaImg = styled.img`
  width: 105px;
  position: absolute;
  left: 225px;

  @media screen and (max-width: 500px) {
    width: 75px;
    left: 185px;
  }
`;

export const AppImg = styled.img`
  width: 55px;

  @media screen and (max-width: 500px) {
    width: 55px;
  }
`;
