import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Wrapper = styled.section`
  width: 100%;
  padding: 10rem 0;

  .container {
    .service-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 3rem;
      gap: 2rem 4rem;

      .card {
        /* max-width: 350px; */
        min-width: 300px;

        overflow: hidden;
        border-radius: 0.7rem;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.05) 0px 8px 32px;

        .imgBox {
          width: 100%;
          overflow: hidden;
          position: relative;

          div {
            width: 100%;

            img {
              aspect-ratio: 1.5/1;
            }
          }
        }

        .textBox {
          padding: 2rem 2rem 1rem 3rem;

          h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1.4rem;
          }

          .card-icon {
            margin: 2rem 0;
            padding: 10px;
            font-size: 3rem;
            width: 5rem;
            height: 5rem;
            background-color: var(--dark);
            color: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="section-sub-heading">What We Are Offering</h3>
        <h2 className="section-heading">All Loan Services</h2>
        <div className="service-cards">
          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-1.jpeg" width={1920} height={1280} />
            </div>
            <div className="textBox">
              <h3>Cash Loans</h3>
              <p>
                We offer loans between R500 and R5000. Our repayment period is
                between 1 month and a maximum of three months. New clients will
                be charged an interest rate of 5% per month and returning
                clients will e charged 3% per month.
              </p>
              <IoIosArrowRoundForward className="card-icon" />
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-2.jpeg" width={1920} height={1280} />
              <div className="textBox">
                <h3>Purchase Order Finance</h3>
                <p>
                  Our purchase order finance is a solution developed for
                  expanding firms who want funds to offer goods or services to
                  their clients in advance. This allows your company to take on
                  new orders without having to worry about collecting finances
                  to satisfy a client.
                </p>
                <IoIosArrowRoundForward className="card-icon" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-3.jpeg" width={1920} height={1280} />
              <div className="textBox">
                <h3>Micro Lending</h3>
                <p>
                  Maximize social gains in microfinance while providing
                  investors with a fair and appealing financial return. We offer
                  the right loans–with the best rates, terms, and costs–to meet
                  our client’s basic needs.
                </p>
                <IoIosArrowRoundForward className="card-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
