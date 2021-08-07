import Head from 'next/head';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  width: 100%;

  background-image: linear-gradient(
      to left,
      rgba(245, 246, 252, 0.52),
      rgba(250, 240, 255, 0.73)
    ),
    url('images/business-1.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 80vh;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const loans = () => {
  return (
    <Fragment>
      <Head>
        <title>Loans | Sidro Finance</title>
      </Head>
      <Hero>
        <div className="container">
          <h1>Loans </h1>
        </div>
      </Hero>
    </Fragment>
  );
};

export default loans;
