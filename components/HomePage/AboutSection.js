import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  margin: 3rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 30px;
    grid-auto-flow: row;
    grid-template-areas:
      'headings headings headings text text text'
      'box box box-2 box-2 box-3 box-3';

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 15rem 1fr 10rem 10rem 10rem;
      grid-template-areas:
        'headings headings headings headings headings headings'
        'text text text text text text'
        'box box box box box box'
        'box-2 box-2 box-2 box-2 box-2 box-2'
        'box-3 box-3 box-3 box-3 box-3 box-3';
    }
  }

  .headings {
    grid-area: headings;

    h2 {
      max-width: 25ch;
      text-align: left;
    }

    h4 {
      text-align: left;
      margin-left: 0;
    }
  }

  .text {
    grid-area: text;
  }

  .box,
  .box-2,
  .box-3 {
    max-width: 250px;
    min-width: 250px;
    height: 10rem;
    display: grid;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    transition: all 0.3s ease;
    justify-self: center;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }

    h4 {
      text-align: center;
      font-size: 1.6rem;
    }
  }

  .box {
    grid-area: box;
  }

  .box-2 {
    grid-area: box-2;
  }

  .box-3 {
    grid-area: box-3;
  }
`;

const AboutSection = () => {
  return (
    <Wrapper>
      <div class="container">
        <div class="headings">
          <h4 className="section-sub-heading">Know More About Us</h4>
          <h2 className="section-heading">
            Flexible & Quick Cash & Business Loans
          </h2>
        </div>
        <div class="text">
          <p>
            We offer a niche range of short-term loans over a month to three
            months. We offer the right loans–with the best rates, terms, and
            costs–to meet our client’s basic needs. Our offerings aim to give
            high quality service and convenience.
          </p>
          <p>
            Our team believes that access to financial services facilitates the
            alleviation of poverty and supports the development of a better
            economy. Financial tools and training empower entrepreneurs to start
            and sustain businesses, provide services to their families, and
            transform communities.
          </p>
        </div>
        <div class="box">
          <h4>Low Rates</h4>
        </div>
        <div class="box-2">
          <h4>Easy Payment Methods</h4>
        </div>
        <div class="box-3">
          <h4>Easy Application Process</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
