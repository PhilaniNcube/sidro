import { useRouter } from 'next/router';
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
        font-size: clamp(
          var(--fluid-type-min, 1rem),
          calc(1rem + var(--fluid-type-target, 3vw)),
          var(--fluid-type-max, 1.3rem)
        );
        color: var(--dark-blue);
      }
    }
  }
`;

const Hero = () => {
  const router = useRouter();

  const navigate = () => {
    router.push('/loans');
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="cta">
          <p>Welcome to Sidro</p>
          <h1>
            Connecting Your <br></br> Loan Needs
          </h1>
          <Button onClick={navigate}>Apply</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
