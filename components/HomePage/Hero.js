import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--light-blue);
  background-image: url('/images/hero-background-2.jpeg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  mix-blend-mode: multiply;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .cta {
      width: 60%;

      p {
        font-size: 1.8rem;
        color: var(--blue);
      }

      h1 {
        font-size: 5rem;
        color: var(--dark-blue);
      }
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="cta">
          <p>Welcome to Sidro</p>
          <h1>
            Connecting Your <br></br> Loan Needs
          </h1>
          <Button>Apply</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;