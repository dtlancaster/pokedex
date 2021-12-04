import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #eee;
        --medGray: #353535;
        --darkGray: #1c1c1c;
        --fontHuge: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    a {
        color: var(--medGray);
    }

    body {
        margin: 0;
        padding: 0;
        background: lemonchiffon;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

    #thumb-bg {
        background: var(--medGray);
        border-radius: 20px;
        animation: animateThumb 0.5s;
        transform: scale(1.0, 1.0);
        transition: all 0.3s;

        h1 {
            text-align: center;
            color: var(--lightGray);
            text-transform: capitalize;
        }

        :hover {
            box-shadow: 5px 5px 5px 5px grey;
            transform: scale(1.05, 1.05);
            transition: all 0.3s;
        }

        @keyframes animateThumb {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    #info-thumb-img
    {
        width: 400px;
        height: 400px;
        background: gold;
        border-radius: 20px 20px 20px 20px;
    }

    #stats
    {
        background: mediumorchid;
    }

    #sprites
    {
        background: orchid;
    }

    #flavor
    {
        background: fuchsia;
    }

    #basic
    {
        background: darkmagenta;
    }
`;
