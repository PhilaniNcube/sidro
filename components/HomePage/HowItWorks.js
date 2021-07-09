import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  margin: 4rem 0;

  h3,
  h2 {
    text-align: left;
  }
`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="section-heading">How The Application Process Works</h2>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
