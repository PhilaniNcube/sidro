import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  .container {
    min-height: 40vh;
    margin-top: 3vh;

    h1 {
      text-align: center;
      margin-bottom: 2vh;
    }
  }
`;

const privacy = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Privacy</h1>
        <div>
          <p>
            As a short-term and payday loan provider, we aim to provide our
            clients with complete protection and guaranteed quality assurance.
            Sidro Finance is fully accredited with the National Credit
            Regulator, and our services are guaranteed compliant and operative.
          </p>
          <p>
            All information gathered on our website is completely confidential
            and compliant with POPIA. We do not sell, trade, or transfer your
            private information to third-parties. The only time we may release
            your information is for legal purposes, for the protection of our
            rights, or for the rights and safety of others. Otherwise, your
            information is strictly confidential and protected. No information
            will be made visible to third parties for soliciting, marketing,
            advertising, or various uses.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default privacy;
