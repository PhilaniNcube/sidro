import Navbar from '../components/Navbar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GlobalStyle = createGlobalStyle`

:root {
  --green: #058C42;
  --blue: #0290d5;
  --dark-blue: #004aa1;
  --dark: #0d2139;
  --black: #252627;
  --light-blue: #B6EFD4;
  --red: #D00000;
      --fluid-type-min: 2.5rem;
  --fluid-type-max: 5rem;
  --fluid-type-target: 5vw;
}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--black);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    font-weight: 900;
  }

h1 {
  font-size: clamp(
    var(--fluid-type-min, 1rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 1.3rem)
  );
}

  ul, ol, li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-size: 1.5rem;
  }

  .container {
    width: 90%;
    max-width: 1280px;
    min-width: 300px;
    margin: 0 auto;
  }

  .section-heading {
    font-size: 3rem;
    color: var(--dark);
    text-align: center;
    margin-top: 2rem;
  }

  .center {
    text-align: center;
    
  }

  .section-sub-heading {
    font-size: 1.5rem;
    color: var(--dark);
    font-weight: 300;
    text-align: center;
    position: relative;
    width: fit-content;
    margin: 0 auto;

    &:after {
      content:'';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateX(115%);
      border-radius: 10px;
      height: 3px;
      width: 30%;
      background-color: green;

    }
  }
`;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T8CTG5X' });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
