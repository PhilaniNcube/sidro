import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const services = [
  {
    title: 'Property Seller Finance',
    text:
      'If you have sold your property and have money due to you on registration, Sidro Finance could advance a portion of this money upfront.',
    image: {
      url: 'property.jpg',
      width: 1920,
      height: 1285,
    },
  },
  {
    title: 'Bond Applicant Finance',
    text:
      'If you own a property and have been granted a new, further or switch bond and need to access a portion of the funds quickly, Sidro Finance could advance a portion before registration.',
    image: {
      url: 'bond.jpg',
      width: 1920,
      height: 1080,
    },
  },
  {
    title: 'Trust Administration',
    text:
      'Rodel Fiduciary offers a digitally integrated trust and case management system for the beneficiaries of disability awards.',
    image: {
      url: 'trust.jpg',
      width: 1920,
      height: 1280,
    },
  },
  {
    title: 'Developer Finance',
    text:
      'As a property developer, you may find your cash resources stretched during the final stages of your project.',
    image: {
      url: 'developer.jpg',
      width: 1920,
      height: 1080,
    },
  },
  {
    title: 'Commercial Bridging Finance',
    text:
      'Bridging finance is especially useful if you are expanding your company or premises. In such cases, cash flow can help cover your costs in the short term for investments that you expect a return on in the near future. provides tailormade short-term finance solutions for your business.',
    image: {
      url: 'commercial.jpg',
      width: 1280,
      height: 935,
    },
  },
  {
    title: 'Security Bonds',
    text:
      'Also known as Court Bonds Sidro Finance can assist with Bonds of Security for Executors, Curators, Trustees and Liquidators.',
    image: {
      url: 'security.jpg',
      width: 1920,
      height: 1280,
    },
  },
  {
    title: 'Property Backed Finance',
    text:
      'A short term loan, secured by unencumbered assets (typically property). No monthly repayments required as interest and capital is repaid together at the end of the 6 months.',
    image: {
      url: 'backed.jpg',
      width: 1920,
      height: 1279,
    },
  },
];

const Wrapper = styled.section`
  width: 100%;

  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

    @media screen and (max-width: 1180px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Card = styled.article`
  max-width: 350px;
  min-width: 250px;
  min-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;

  .imgBox {
    height: 200px;

    div {
      height: 100%;

      img {
        object-fit: cover;
      }
    }
  }

  .body {
    padding: 10px;

    h4 {
      font-size: 1.4rem;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 1.3rem;
      color: var(--blue);
    }
  }
`;

const FinanceServices = () => {
  return (
    <Wrapper>
      <h2 className="section-heading">Bridging Finance Services</h2>
      <p className="center">
        Bridging Finance is a form of finance that is made available to you when
        you provide proof that you will be receiving funds from an external
        source.
      </p>
      <div className="container">
        {services.map((service, index) => {
          return (
            <Card key={index}>
              <div className="imgBox">
                <Image
                  src={`/images/${service.image.url}`}
                  width={service.image.width}
                  height={service.image.height}
                  alt={service.title}
                />
              </div>
              <div className="body">
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default FinanceServices;
