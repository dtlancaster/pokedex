import styled from "styled-components";

export const Wrapper = styled.div`
  background: #000;
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animatePokemonInfo 1s;

  @keyframes animatePokemonInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  h1 {
    text-transform: capitalize;
  }

  .cap_this {
    text-transform: capitalize;
  }
`;
