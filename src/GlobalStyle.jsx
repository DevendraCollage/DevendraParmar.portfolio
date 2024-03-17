import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    html {
        font-size: 52.5%;
        overflow-x: hidden;
    }
    body {
        overflow-x: hidden;
    }

    /* My Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 1.6rem;
    }

    ::-webkit-scrollbar-track {
        background-color: rgb(24, 24, 29);
    }
    
    ::-webkit-scrollbar-thumb {
        background: #fff;
        border: 5px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }

    h1 {
        color: ${({theme}) => {
            theme.colors.heading
        }};
        font-size: 6rem;
        font-weight: 900;
    }
    h2 {
        color: ${({theme}) => {
            theme.colors.heading;
        }};
        font-size: 4rem;
        font-weight: 900;
        white-space: normal;
    }
    h3 {
        font-size: 1.8rem;
        font-weight: 400;
    }
    p {
        color: ${({theme}) => {
            theme.colors.heading
        }};
        opacity: calc().7;
        font-size: 2rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight: 400;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }

    .container {
        max-width: 95rem;
        margin: 0 auto;
    }

    .grid {
        display: grid;
        gap: 9rem;
    }

    .grid-two-column {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-three-column {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-four-column {
        grid-template-columns: 1fr 1.2fr .5fr .8fr;
    }


    /* ##### Media Queries For Responsiveness ##### */

    //998px
    @media (max-width:${({ theme }) => theme.media.tab}) {
      .container {
        padding: 0 3.2rem;
      }

      .grid-three-column {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width:${({ theme }) => theme.media.mobile}) {

        html {
            font-size: 45%;
        }

        .grid{
            gap: 3.2rem;
        }

        .grid-two-column, .grid-three-column, .grid-four-column{
            grid-template-columns: 1fr;
        }
    }
`